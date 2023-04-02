import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props: any) {

  return (
    <header className='header'>
    <div className='width'>
      <h1>
        <Link to='/'>Crypto App</Link>
      </h1>
    </div>
    </header>
  )
}
