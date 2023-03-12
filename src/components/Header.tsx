import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props: any) {

  const back = props;

  return (
    <header className='header'>
    <div className='width'>
      {back && (
      <Link to='/'>
<svg xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25"><path fill="white" d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"/></svg>
      </Link>
      )}
      <h1>
        <Link to='/'>Crypto App</Link>
      </h1>
    </div>
    </header>
  )
}
