import React from 'react'
import 'font-awesome/css/font-awesome.min.css'
import './About.css'

export default function About(){
    return(  
        <>  
            <div className = 'container'>
                <span className = 'text'>Sígueme en <a href = 'https://github.com/Edgarmontenegro123' target = '_blank' rel = 'noopener noreferrer' className = 'link'>
                        GitHub <i className="fab fa-github"></i></a>   
                </span>    
                <span className = 'text'>Sígueme en <a href = 'https://www.linkedin.com/in/edgarmontenegro/' target = '_blank' rel = 'noopener noreferrer' className = 'link'> 
                    LinkedIn <i className = "fab fa-linkedin-in"></i></a>  
                </span>
                <p className = 'text'>Mi Currículum Vitae <a href = 'https://edgarmontenegro123.github.io/MyCurriculumVitae/' 
                                                        target = '_blank' rel = 'noopener noreferrer' className = 'link'> Acá!</a>
                </p>
                <p className = 'text'>Conoce el código 
                    <a href = 'https://github.com/Edgarmontenegro123/ClimApp' target = '_blank' rel = 'noopener noreferrer' className = 'link'> Acá!</a>
                </p>
            </div>
            <div className = 'footer'>
                <footer>
                    <h5>Esta App fue realizada con amor por Edgar Montenegro!</h5>
                </footer>
            </div>
        </>
    )
}