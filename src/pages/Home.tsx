import React from 'react'
import { Link } from 'react-router-dom';
import homeStore from '../stores/homeStore'

export default function Home() {
    const store: any = homeStore()

    React.useEffect(() => {
        store.fetchCoins()
    })

  return (
    <div>
      <input type="text" value={store.query} onChange={store.setQuery} />
    {store.coins.map((coin: any) => {
      return (
        <div key={coin.id} >
        <Link to ={`/${coin.id}`}>
        {coin.name}
        </Link>
        </div>
      )
    })}
    </div>
  )
}
