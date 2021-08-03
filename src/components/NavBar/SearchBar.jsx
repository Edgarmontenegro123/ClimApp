import React, {useState} from 'react'
import './Nav.css'

export default function SearchBar({onSearch}){
  const [city, setCity] = useState('')
  return(
    <form className = 'searchNav' onSubmit = {(e) => {
      e.preventDefault()
      onSearch(city)
      setCity('')
    }}>
      <div className = 'input-group mb-3'>
          <input type = 'text' className = 'form-control' value = {city}  onChange = {e => setCity(e.target.value)} placeholder = 'Ciudad...' aria-label = 'Ciudad...' aria-describedby = 'basic-addon2'/>
          <div className = 'input-group-append'>
              <button className = 'btn btn-outline-secondary' type = 'submit'>Agregar</button>
          </div>
      </div>  
    </form>
  )
}
