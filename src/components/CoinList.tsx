import React from 'react'
import { Link } from 'react-router-dom'

export default function CoinList({coin}: {coin:any}) {

  return (
    <div className='home-crypto-coin'>
    <Link to={`/${coin.id}`}>
        <img src={coin.image} className="home-crypto-image" alt="coin icon" />
        <span className="home-crypto-name">{coin.name}</span>
        <div className="currency-container">
          <div className="home-crypto-price-btc">{coin.priceBtc} BTC </div>
          <div className="home-crypto-price-php">({coin.pricePhp} PHP)</div>
        </div>
    </Link>
    </div>
  )
}
