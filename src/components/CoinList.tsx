import React from 'react'
import { Link } from 'react-router-dom'

export default function CoinList(coin: any) {

  return (
    <div className='home-crypto-coin'>
    <Link to ={`/${coin.id}`}>
        <span className="home-crypto-image">
          <img src={coin.image} alt="coin icon" />
        </span>
        <span className="home-crypto-name">{coin.name}</span>

        <span className="home-crypto-price-btc">{coin.priceBtc} BTC </span>
        <span className="home-crypto-price-php">({coin.pricePhp} PHP)</span>
    </Link>
    </div>
  )
}
