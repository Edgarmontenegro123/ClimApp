import React, {useEffect, useState} from 'react'
import './Clock.css'

const date = new Date()
const semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']


export default function Clock() {
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        dia: date.getDate(),
        year: date.getFullYear()
      })
    }, 1000)
    return () => clearInterval(timer);
  }, [])

    let diaSemana = date.getDay()
    let renderDia = semana[diaSemana]
    let mes = date.getMonth()
    let renderMes = meses[mes]
    let ampm 

        if(dateTime.hours >= 12){
        dateTime.hours = dateTime.hours - 12
        ampm = 'PM'
        }
        else{
            ampm = 'AM'
        }
    
        if(dateTime.hours === 0){
            dateTime.hours = 12
        }
    
        if(dateTime.minutes < 10){dateTime.minutes = '0' + dateTime.minutes}
        if(dateTime.seconds < 10){dateTime.seconds = '0' + dateTime.seconds}

  return (
        <div className = 'wrap'>
            <div className = 'widget'>
                <div className = 'fecha'>
                    <p className = 'diaSemana'>Tipea tus ciudades favoritas en el buscador!</p>
                </div>
                <div className = 'fecha'>
                    <p className = 'diaSemana'>{renderDia} {dateTime.dia} de {renderMes} de {dateTime.year}</p>
                </div>
                <div className = 'reloj'>
                    <p className = 'horas'>{dateTime.hours}</p>
                    <p>:</p>
                    <p className = 'minutos'>{dateTime.minutes}</p>
                    <p>:</p>
                    <div className = 'caja-segundos'>
                        <p className = 'ampm'>{ampm}</p>                             
                        <p className = 'segundos'>{dateTime.seconds}</p>
                    </div>
                </div>
            </div>     
        </div>
  )
}
