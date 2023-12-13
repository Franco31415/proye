import React from 'react'
import con1 from '../assets/img/cons1.jpg'
import con2 from '../assets/img/cons2.jpg'
import con3 from '../assets/img/cons3.jpg'
export const Consejos = () => {
  return (
    <div >
         <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={con3} class="d-block w-100" style={{height:"500px",width:"10px"}}></img>
    </div>
    <div class="carousel-item">
      <img src={con2} class="d-block w-100" style={{height:"500px",width:"10px"}}></img>
    </div>
    <div class="carousel-item">
      <img src={con1} class="d-block w-100" style={{height:"500px",width:"10px"}}></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br></br>
      <div className='du'>
        <h1>Consejos Deportivos para una Vida Activa y Saludable:</h1>
        <h3>Variedad en tu Rutina:</h3>
        <p>Incorpora una variedad de actividades deportivas en tu rutina. Esto no solo evita el aburrimiento, sino que también trabaja diferentes grupos musculares y mejora tu capacidad cardiovascular. Considera alternar entre deportes de resistencia, entrenamiento de fuerza y flexibilidad.</p>
        <h3>Escucha a tu Cuerpo:</h3>
        <p>Presta atención a las señales de tu cuerpo. Si sientes dolor agudo o fatiga extrema, es crucial darle tiempo de recuperación a tus músculos. No ignores las lesiones y busca asesoramiento profesional si es necesario.</p>
        <h3>Hidratación Constante:</h3>
        <p>Mantente bien hidratado antes, durante y después del ejercicio. El agua es esencial para el rendimiento óptimo y ayuda en la recuperación. Evita las bebidas azucaradas y opta por agua natural o bebidas deportivas bajas en calorías.</p>
        <h3>Calentamiento y Enfriamiento:</h3>
        <p>No subestimes la importancia del calentamiento y enfriamiento. Antes de comenzar tu rutina, dedica tiempo a estiramientos y ejercicios de calentamiento para preparar tus músculos. Al finalizar, realiza ejercicios de enfriamiento para reducir el riesgo de lesiones y mejorar la flexibilidad.</p>
      </div>
        <div className='cabajo'>
        <br></br>
          <h3 align="center">UMSA  todos los derechos reservados</h3>
      </div>
    </div>
  )
}
