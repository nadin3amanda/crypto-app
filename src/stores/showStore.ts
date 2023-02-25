import React from 'react'
import axios from 'axios';
import create from 'zustand';

const showStore = create((set: any) => ({
    graphData: [],

    fetchData: async (id: any) => {
        const [graphRes] = await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=PHP&days=120`),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true`)
        ])

        const graphData: any = graphRes.data.prices.map((price: any) => {
            const [timeStamp, p] = price;
            const date = new Date(timeStamp).toLocaleDateString('en-us')
            return {
                Date: date,
                Price: p,
            };
       });

       set({graphData});
    },
}));

export default showStore;