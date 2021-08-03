import React, {useState} from 'react'
import {Route} from 'react-router-dom'
import Nav from '../components/NavBar/Nav'
import Cards from '../components/Cards/Cards'
import About from '../components/About/About'
import Ciudad from '../components/Ciudad/Ciudad'
import './App.css'

const apiKey = process.env.REACT_APP_APIKEY

export default function App(){
  const [cities, setCities] = useState([])

  function onClose(id){
    setCities(oldCities => oldCities.filter(c => c.id !== id))
  }

  function onSearch(ciudad){
    //Llamado a la API del clima
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`)
      .then(r => r.json())
      .then((recurso) => {
        if(!cities.find(e => e.id === recurso.id)){
          if(recurso.main !== undefined){
          const ciudad = {
            min: recurso.main.temp_min.toFixed(1),
            max: recurso.main.temp_max.toFixed(1),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            amanecer:recurso.sys.sunrise,
            anochecer: recurso.sys.sunset
          }
          setCities(oldCities => [...oldCities, ciudad])
        } 
        else{
          alert('Ciudad no encontrada')
        }
      } 
      else{
        alert('Esa ciudad ya fue encontrada. Intente con una diferente.')
      }    
    })
  }

  function onFilter(ciudadId){
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId))
    if(ciudad.length > 0){
        return ciudad[0]
    } 
    else{
        return null
    }
  }
  return(
    <div className = 'App'>
      <Route
        path = '/'
        render = {() => <Nav onSearch = {onSearch}/>}
      />
      <Route
        path = '/about'
        component = {About}
      />
      <Route
        exact path = '/'
        render = {() => <Cards cities = {cities}  onClose = {onClose}/>}
      />
      <Route
        exact path = '/ciudad/:ciudadId'
        render = {({match}) => <Ciudad city = {onFilter(match.params.ciudadId)}/>}
      />
      <hr />
    </div>
  )
}