import React from 'react'
import hits1 from '../assets/img/hist1.jpg'
import hits2 from '../assets/img/hist2.jpg'
import hits3 from '../assets/img/hist3.jpg'
export const Historia = () => {
  return (
    
    <div>
    <div style={{width:"90%", marginLeft: "5%", marginTop:"2%"}}>
    <h1>Nuestra Historia</h1>
    <p>Había una vez un pequeño pueblo llamado Activo Springs, donde la vida giraba en torno a la pasión por el deporte y la actividad física. En el corazón de este bullicioso lugar, se encontraba una tienda única que iluminaba las calles con su energía vibrante: "SPORTING".

La tienda fue fundada por dos hermanos, Alex y Victoria, quienes compartían una conexión inquebrantable con el mundo del deporte desde jóvenes. Juntos, decidieron crear un espacio donde los habitantes de Activo Springs pudieran encontrar todo lo que necesitaran para alimentar sus pasiones deportivas.

Desde el primer día, "SPORTING" se convirtió en mucho más que una tienda. Era un centro comunitario, un lugar donde atletas novatos y profesionales se reunían para compartir historias, intercambiar consejos y descubrir las últimas novedades en equipos y tecnología deportiva.

La tienda se especializó en ofrecer una amplia gama de productos para todos los gustos y niveles de habilidad. Desde equipos de fútbol y baloncesto hasta ropa especializada para actividades al aire libre, cada artículo estaba cuidadosamente seleccionado para garantizar calidad y rendimiento.

Alex, un apasionado corredor de trail, organizaba regularmente eventos y carreras locales que comenzaron a atraer a entusiastas de todo el condado. La tienda se convirtió en el epicentro de la acción deportiva, y la comunidad comenzó a florecer con una vibrante cultura de bienestar y actividad física.

Victoria, una exjugadora de tenis profesional, implementó programas de desarrollo juvenil para inspirar a la próxima generación de atletas. "SPORTING" se convirtió en un lugar donde los niños y niñas descubrían su amor por el deporte y recibían mentoría de figuras deportivas locales.

Con el tiempo, la tienda creció en tamaño y alcance. Se expandieron a una tienda en línea, brindando a deportistas de todo el país acceso a los productos de alta calidad que caracterizaban a "SPORTING". Además, inauguraron un moderno gimnasio y un espacio para eventos comunitarios.

La historia de "SPORTING" no solo era la historia de una tienda, sino también la historia de una comunidad que encontró un punto de encuentro para compartir su amor por el deporte. En Activo Springs, el lema de "SPORTING" resonaba en cada calle: "Donde tus sueños deportivos toman vuelo".

Y así, la pequeña tienda de artículos deportivos se convirtió en un símbolo de inspiración y unidad, demostrando que el deporte no solo transforma vidas, sino que también puede unir a comunidades enteras en una celebración de la vitalidad y la perseverancia.</p>
</div>
       <br></br>
      <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={hits1} class="d-block w-100" style={{height:"600px",width:"10px"}}></img>
    </div>
    <div class="carousel-item">
      <img src={hits2} class="d-block w-100" style={{height:"600px",width:"10px"}}></img>
    </div>
    <div class="carousel-item">
      <img src={hits3} class="d-block w-100" style={{height:"600px",width:"10px"}}></img>
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



      <div className='cabajo'>
        <br></br>
          <h3 align="center">UMSA  todos los derechos reservados</h3>
      </div>
    
 </div>
 
  )
}