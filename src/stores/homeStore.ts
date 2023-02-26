import axios from 'axios';
import { create } from 'zustand'
import debounce from '../helpers/debounce';

const homeStore: any = create((set: any) => ({
    coins: [],
    trending:[],
    query:'',

    setQuery: (event: any) => {
        set({query: event.target.value})
        homeStore.getState().searchCoins() 
    },

    searchCoins: debounce( async () => {
    const query: any = homeStore.getState()
    const trending: any = homeStore.getState()

    if (query.length > 2) {
    const res = await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`);

    const coins: any = res.data.coins.map((coin: any) => {
      return {
        name: coin.name,
        image: coin.large,
        id: coin.id
      };
    });

      set({coins});
    } else {
      set({coins: trending});
    }
  }, 500),

  fetchCoins: async () => {
    const [res, btcRes] = await Promise.all([
      axios.get('https://api.coingecko.com/api/v3/search/trending'),
      axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=php`),

    ]);
    const btcPrice = btcRes.data.bitcoin.php;
    const coins = res.data.coins.map((coin: { item: { name: string; large: string; id: any; price_btc: number; pricePhp: number }; }) => {
        return {
            name: coin.item.name,
            image: coin.item.large,
            id: coin.item.id,
            priceBtc: coin.item.price_btc.toFixed(10),
            pricePhp:(coin.item.price_btc*btcPrice).toFixed(6)
        }
    })
    set({coins, trending: coins});
  }
}))

export default homeStore;