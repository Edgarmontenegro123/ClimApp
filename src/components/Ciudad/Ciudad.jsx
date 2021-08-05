import React from 'react'
import {Link} from 'react-router-dom'
import './Ciudad.css'

export default function Ciudad({city}){
  let sunrise = new Date(city.amanecer * 1000)
  let sunset = new Date(city.anochecer * 1000)

  return(
    <div className = 'card_container'>
        <div className = 'container'>
          <Link to = '/' className = 'link'><h2 className = 'titulo'>{city.name}</h2></Link>
          <div className = 'info'>
            <div><b>Temperatura:</b> {city.temp} ºC</div>
            <div><b>Clima:</b> {city.weather}</div>
            <div><b>Viento:</b> {city.wind} km/h</div>
            <div><b>Nubosidad:</b> {city.clouds}%</div>
            <div><b>Latitud:</b> {city.latitud}º</div>
            <div><b>Longitud:</b> {city.longitud}º</div>
            <div>
            <b>Amanece:</b> {`${sunrise.getHours()}:${(sunrise.getMinutes()<10)? '0' + sunrise.getMinutes() : sunrise.getMinutes()} h`} UTC
            </div>
            <div>
            <b>Anochece:</b> {`${sunset.getHours()}:${(sunset.getMinutes()<10)? '0' + sunset.getMinutes() : sunset.getMinutes()} h`} UTC
            </div>
            <div>
              <img
                className = 'iconito'
                src = {`http://openweathermap.org/img/wn/${city.img}@2x.png`}
                width = '120'
                height = '120'
                alt = ''
              />
              <p>{city.icon}</p>
            </div>
          </div>
        </div>
    </div>
  )
}
