import React from 'react'
import axios from 'axios';
import create from 'zustand';
import debounce from '../helpers/debounce';

const showStore = create((set: any) => ({
    fetchData: async (id: any) => {
        const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=PHP&days=7`)
        console.log("hello");
    },
}));

export default showStore;