import React from 'react'
import prod1 from '../assets/img/pro1.jpg'
import prod2 from '../assets/img/pro2.jpg'
import prod3 from '../assets/img/pro3.jpg'
import prod4 from '../assets/img/pro4.jpg'
import prod5 from '../assets/img/pro5.jpg'
import prod6 from '../assets/img/pro6.jpg'
import prod7 from '../assets/img/pro7.jpg'
import prod8 from '../assets/img/pro8.jpg'
import prod9 from '../assets/img/pro9.jpg'
export const Productos = () => {
  return (
    <div>
    <h1 align="center">Nuestros productos</h1>
      <div>
      <table className='tabla'>
    <tr>
      <td>
        <img src={prod1} className='prod'></img>
        <h3>Guantes de Futbol</h3>
        <p>Los guantes de fútbol son esenciales para los porteros, proporcionando un agarre adicional y protección para las manos. Diseñados con materiales duraderos y tecnologías que mejoran el control del balón, los guantes de fútbol ofrecen confianza y rendimiento a los porteros en el campo.</p>
      </td>
      <td>
        <img src={prod2} className='prod'></img>
        <h3>Zapatillas de Fútbol</h3>
        <p>Las zapatillas de fútbol están diseñadas para ofrecer tracción, agilidad y comodidad en el campo de juego. Con tacos estratégicamente ubicados para un mejor agarre, estas zapatillas optimizan el rendimiento del jugador, permitiendo giros rápidos y cambios de dirección precisos.</p>
      </td>
      <td>
        <img src={prod3} className='prod'></img>
        <h3>Medias</h3>
        <p>Las medias deportivas son una parte esencial del uniforme, proporcionando comodidad y apoyo durante la actividad física. Fabricadas con tejidos transpirables y elásticos, las medias ofrecen ajuste y protección, manteniendo a los deportistas cómodos durante todo el juego.</p>
      </td>
    </tr>
    <tr>
      <td>
        <img src={prod4} className='prod'></img>
        <h3>Pesas</h3>
        <p>Las pesas son herramientas fundamentales para el entrenamiento de fuerza. Disponibles en una variedad de formas y tamaños, las pesas permiten a los atletas fortalecer y tonificar músculos específicos, mejorando la resistencia y el rendimiento general.</p>
      </td>
      <td>
        <img src={prod5} className='prod'></img>
        <h3>Deportivo</h3>
        <p>La ropa deportiva es una parte esencial del equipo de cualquier atleta. Diseñada para brindar comodidad, libertad de movimiento y transpirabilidad, la ropa deportiva ayuda a los deportistas a alcanzar su máximo rendimiento. Con tejidos técnicos que absorben la humedad y proporcionan ventilación.</p>
      </td>
      <td>
        <img src={prod6} className='prod'></img>
        <h3>Brazuca</h3>
        <p>El balón de fútbol Brazuca es conocido por su diseño innovador y su rendimiento excepcional. Fabricado con materiales de alta calidad, proporciona un toque suave y preciso, siendo la elección preferida para jugadores y competiciones de alto nivel.</p>
      </td>
    </tr>
    <tr>
      <td>
        <img src={prod7} className='prod'></img>
        <h3>Balón de Básquet</h3>
        <p>El balón de básquet es esencial para este deporte rápido y dinámico. Diseñado para facilitar el agarre y el control, ofrece la durabilidad necesaria para resistir el juego intenso en la cancha.</p>
      </td>
      <td>
        <img src={prod8} className='prod'></img>
        <h3>Guantes de Boxeo</h3>
        <p>Los guantes de boxeo son elementos clave para la protección de las manos y muñecas durante el entrenamiento y la competición. Fabricados con materiales resistentes y acolchados, brindan soporte y absorben impactos, permitiendo a los boxeadores entrenar con confianza.</p>
      </td>
      <td>
        <img src={prod9} className='prod'></img>
        <h3>Armadura de Kendo</h3>
        <p>La armadura de kendo, conocida como "bogu", es esencial para este arte marcial japonés. Compuesta por protectores para la cabeza, torso, manos y piernas, proporciona seguridad durante los combates de kendo, permitiendo a los practicantes concentrarse en la técnica y la disciplina.</p>
      </td>
    </tr>
  </table>
      </div>


      <div className='cabajo'>
          <br></br>
          <h3 align="center">UMSA  todos los derechos reservados</h3>
          </div>
    </div>
  )
}
