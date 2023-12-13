import React from 'react'
import credi1 from '../assets/img/cre1.jpg'
import credi2 from '../assets/img/cre2.jpg'
import credi3 from '../assets/img/cre3.jpg'
export const Creditos = () => {
  return (
    <div>
     <h1>Creditos Y Reconocimientos</h1>
     <div>
        <table style={{marginLeft:"10%"}} >
          <tr>
            <td>
              <img src={credi2} className='prod'></img>
            </td>
            <td>
              <img src={credi1} className='prod'></img>
            </td>
            <td>
              <img src={credi3} className='prod'></img> 
            </td>
          </tr>
        </table>
     </div>
     <br></br>
    <div className='du'>
      <p>Franco Mario Ayala Quispe

Estudiante de la Universidad Mayor de San Andrés
Carrera de Informática
Facultad de Ciencias Puras y Naturales
La Paz, Bolivia</p>
<h1>Sobre el estudiante</h1>
<p>Franco Mario Ayala Quispe es un dedicado estudiante de la Universidad Mayor de San Andrés, ubicada en la ciudad de La Paz, Bolivia. Actualmente, cursa la carrera de Informática en la Facultad de Ciencias Puras y Naturales.</p>
<h1>Afiliación Universitaria:</h1>
<p>Franco Mario Ayala Quispe es miembro activo de la comunidad universitaria, participando en actividades académicas y eventos relacionados con la informática. Su contribución y participación en la Universidad Mayor de San Andrés fortalecen el ambiente académico y fomentan el intercambio de conocimientos entre sus pares.

</p>
<br></br>
<p>La Universidad Mayor de San Andrés y la Facultad de Ciencias Puras y Naturales reconocen y felicitan a Franco Mario Ayala Quispe por sus logros y contribuciones en el ámbito académico.</p>
    </div>
     <div className='cabajo'>
          <br></br>
          <h3 align="center">UMSA  todos los derechos reservados</h3>
          </div>
    </div>
  )
}
