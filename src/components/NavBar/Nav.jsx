import React from 'react'
import SearchBar from './SearchBar.jsx'
import {Link} from 'react-router-dom'
import img from '../../img/sunnyCloud.png'
import '../NavBar/Nav.css'

export default function Nav({onSearch}){
  return(
    <div className = 'navBar'>
      <nav className = 'navbar navbar-dark bg-dark navBar'>
        <Link to = '/'>
          <span className = 'navbar-brand'>
            <img
              id = 'logo'
              src = {img}
              width = '30'
              height = '30'
              className = 'd-inline-block align-top'
              alt = 'Imagen no encontrada'
            />
            ClimApp
          </span>
        </Link>
        <Link to = '/about'>
          <span className = 'navbar-brand'>Conóceme</span>
        </Link>
        <div>
          <SearchBar onSearch = {onSearch}/>
        </div>
      </nav>
    </div>
  )
}
