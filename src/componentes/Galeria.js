import React from 'react'
import img1 from '../assets/img/log.jpg'
import img2 from '../assets/img/art1.jpg'
import img3 from '../assets/img/cons1.jpg'
import img4 from '../assets/img/cons3.jpg'
import img5 from '../assets/img/hist1.jpg'
import img6 from '../assets/img/hist2.jpg'
import img7 from '../assets/img/pro9.jpg'
import img8 from '../assets/img/pro4.jpg'
import img9 from '../assets/img/hist3.jpg'
export const Galeria = () => {
  return (
    <div>
        <h1>Galeria</h1>
        <div>
        <table style={{marginLeft:"10%"}}>
    <tr>
      <td>
        <img src={img1} className='prod'></img>
        
      </td>
      <td>
        <img src={img2} className='prod'></img>
        
      </td>
      <td>
        <img src={img3} className='prod'></img>
        
      </td>
    </tr>
    <tr>
      <td>
        <img src={img4} className='prod'></img>
        
      </td>
      <td>
        <img src={img5} className='prod'></img>
        
      </td>
      <td>
        <img src={img6} className='prod'></img>
        
      </td>     
    </tr>
    <tr>
      <td>
        <img src={img7} className='prod'></img>
        
      </td>
      <td>
        <img src={img8} className='prod'></img>
        
      </td>
      <td>
        <img src={img9} className='prod'></img>
        
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