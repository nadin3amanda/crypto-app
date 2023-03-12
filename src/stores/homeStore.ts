import axios from "axios";
import { create, SetState } from "zustand";
import debounce from "../helpers/debounce";

interface Coin {
  name: string;
  image: string;
  id: string;
  priceBtc?: string;
  pricePhp?: string;
}

interface HomeStoreState {
  coins: Coin[];
  trending: Coin[];
  query: string;
}

interface HomeStore extends HomeStoreState {
  setQuery: (query: string) => void;
  searchCoins: () => Promise<void>;
  fetchCoins: () => Promise<void>;
}

const homeStore = create<HomeStore>((set: SetState<HomeStoreState>, get) => ({
  coins: [],
  trending: [],
  query: "",

  // Set query and search for coins
  setQuery: (query: string) => {
    set({ query });
    get().searchCoins();
  },

  // Search for coins based on the query
  searchCoins: debounce(async () => {
    const query = get().query;

    if (query.length > 2) {
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );

      const coins: Coin[] = res.data.coins.map((coin: any) => {
        return {
          name: coin.name,
          image: coin.large,
          id: coin.id,
        };
      });

      set({ coins });
    } else {
      set({ coins: get().trending });
    }
  }, 500),

  // Fetch trending coins and BTC price
  fetchCoins: async () => {
    const [trendingRes, btcRes] = await Promise.all([
      axios.get("https://api.coingecko.com/api/v3/search/trending"),
      axios.get(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=php`
      ),
    ]);
    const btcPrice = btcRes.data.bitcoin.php;
    const coins: Coin[] = trendingRes.data.coins.map(
      (coin: {
        item: {
          name: string;
          large: string;
          id: any;
          price_btc: number;
          pricePhp: number;
        };
      }) => {
        return {
          name: coin.item.name,
          image: coin.item.large,
          id: coin.item.id,
          priceBtc: (coin.item.price_btc).toFixed(10),
          pricePhp: (coin.item.pricePhp * btcPrice).toFixed(6),
        };
      }
    );
    set({ coins, trending: coins });
  },
}));

export default homeStore;
