import React from 'react'
import Card from '../Card/Card'
import '../Cards/Cards.css'

export default function Cards({cities, onClose, id}){
  
  return (
    <div className = 'cards'>
      {console.log(cities)}
      {cities.map(c => <Card
          id = {c.id}
          key = {c.id}
          max = {c.max}
          min = {c.min}
          name = {c.name}
          img = {c.img}
          onClose = {() => onClose(c.id)}
        />)}
    </div>
  )
}