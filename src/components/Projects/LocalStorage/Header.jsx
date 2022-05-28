import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container-local">
        <div className="inner-content">
          <div className="brand">
            <Link to='/'>
              WatchList
            </Link>
          </div>
          <ul className='nav-links'>
            <li>
              <Link to='/WatchList'>Watch List</Link>
            </li>
            <li>
              <Link to='/Watched'>Watched</Link>
            </li>
            <li>
              <Link to='/Add' className='btn'>+ Add</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header