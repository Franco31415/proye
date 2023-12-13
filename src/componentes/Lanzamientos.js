import React from 'react'
import im1 from '../assets/img/art1.jpg'
import im2 from '../assets/img/art2.jpg'
export const Lanzamientos = () => {
  return (
    <div>
         <h1>Nuevos Lanzamientos</h1>
        <br></br>
          <table style={{marginLeft:"18%"}}>
            <tr>
              <td>
              <img src={im1} className='prod'></img>
              </td>
              <td style={{width:"10%"}}>

              </td>
              <td>
              <img src={im2} className='prod'></img>
              </td>
            </tr>
          </table>
        <div className='du'>
          <h3>Sección de Lanzamientos: Eleva tu Experiencia Deportiva</h3>
          <p>Bienvenido a nuestra emocionante sección de "Lanzamientos", donde la innovación y el rendimiento se unen para llevar tu experiencia deportiva al siguiente nivel. En esta colección curada, descubrirás los últimos y más emocionantes lanzamientos en el mundo de los artículos deportivos. ¡Prepárate para sumergirte en la excelencia deportiva!</p>
          <h3>Zapatillas de Última Generación:</h3>
          <p>Experimenta la fusión perfecta de estilo y tecnología con nuestras nuevas zapatillas de edición limitada. Diseñadas para ofrecer máxima comodidad, soporte y estilo, estas zapatillas te impulsarán a conquistar tus metas deportivas con confianza y elegancia.</p>
          <h3>Equipamiento de Alta Tecnología:</h3>
          <p>Descubre la próxima generación de equipamiento deportivo con características revolucionarias. Desde tecnologías de absorción de impactos hasta materiales ultraligeros, nuestro nuevo lanzamiento redefine los estándares de rendimiento, brindándote una ventaja competitiva única.</p>
          <h3>Ropa Deportiva Vanguardista:</h3>
          <p>Sumérgete en la moda deportiva con nuestra línea de ropa innovadora. Diseñada para combinar estilo y funcionalidad, esta colección te permite expresar tu pasión por el deporte mientras te mueves con facilidad y comodidad.</p>
        </div>
    
          <div className='cabajo'>
          <br></br>
          <h3 align="center">UMSA  todos los derechos reservados</h3>
          </div>
    </div>
  )
}
