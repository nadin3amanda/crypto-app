import React from 'react'
import { useParams } from 'react-router-dom'
import showStore from '../stores/showStore'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Header from '../components/Header';

const data: any = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Show() {

  const store: any = showStore()
  const params: any = useParams()

  React.useEffect(() => {
    store.fetchData(params.id)
  }, [params.id, store]); //previously empty

  if (!store.data) return <></>;

  return (
    <>
    <Header back/>
    <header>
      <img src={store.data.image.large} alt='icon' />
      <h2>{store.data.name} ({store.data.symbol})</h2>
    </header>
    <div>
      <LineChart
          width={500}
          height={300}
          data={store.graphData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Price" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
    </div>
    <div>
      <h4>Market cap rank</h4>
      <span>{store.data.market_cap_rank}</span>
    </div>
    <div>
      <h4>24 high</h4>
      <span>${store.data.market_data.high_24.php}</span>
    </div>
    <div>
      <h4>24 low</h4>
      <span>${store.data.market_data.low_24.php}</span>
    </div>
    <div>
      <h4>Circulating Supply</h4>
      <span>${store.data.market_data.circulating_supply}</span>
    </div>
    <div>
      <h4>Current Price</h4>
      <span>${store.data.market_data.current_price.php} </span>
    </div>
    <div>
      <h4>1year Change</h4>
      <span>${store.data.market_data.price_change_percentage_1y.toFixed(2)}% </span>
    </div>
    </>
  )
}
