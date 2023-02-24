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
    const res = await axios.get('https://api.coingecko.com/api/v3/search/trending');

    const coins = res.data.coins.map((coin: { item: { name: any; large: any; id: any; price_btc: any; }; }) => {
        return {
            name: coin.item.name,
            image: coin.item.large,
            id: coin.item.id,
            priceBtc: coin.item.price_btc
        }
    })

    set({coins, trending: coins});
  }
}))

export default homeStore;