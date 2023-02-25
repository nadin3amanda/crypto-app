import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import homeStore from '../stores/homeStore'

export default function Home() {
    const store: any = homeStore()

    React.useEffect(() => {
        store.fetchCoins()
    })

  return (
    <div>
      <Header />
      <header className='home-search'>
      <h2>Search for a coin</h2>
      <div className="width">
      <input type="text" value={store.query} onChange={store.setQuery} />
      </div>
      </header>
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
