import React from 'react'
import img1 from '../assets/img/logo.png'
import carr1 from '../assets/img/car1.jpg'
import carr2 from '../assets/img/car2.jpg'
import carr3 from '../assets/img/car3.jpg'
import artc1 from '../assets/img/art1.jpg'
export const Inicio = () => {
  return (
    <div>
      <br></br>
      <h1 align="center">Bienvenido a SPORTING - Tu Destino para el Éxito Deportivo</h1>
      <div>
      <br></br>
      <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={carr1} class="d-block w-100" style={{height:"450px"}}></img>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
      <img src={carr2} class="d-block w-100" style={{height:"450px"}}></img>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
      <img src={carr3} class="d-block w-100" style={{height:"450px"}}></img>
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <br></br>
          <div className='tex caja'>
           <p>En SPORTING, abrazamos la pasión por el deporte y te ofrecemos una experiencia única de compra para satisfacer todas tus necesidades deportivas. Sumérgete en nuestro mundo dedicado a atletas de todos los niveles, donde encontrarás una amplia gama de artículos deportivos de la más alta calidad.</p>
           <h2>Descubre la Excelencia en Cada Deporte:</h2>
           <p>Explora nuestra extensa colección que abarca desde equipos para deportes de equipo hasta artículos especializados para actividades individuales. Ya sea que seas un atleta profesional o un entusiasta del fitness, tenemos todo lo que necesitas para alcanzar tus metas.</p>
           <h2>Variedad y Calidad Garantizadas:</h2>
           <p>Desde la última tecnología en calzado deportivo hasta ropa de rendimiento y equipos de entrenamiento de vanguardia, solo ofrecemos productos de las marcas más reconocidas y confiables. Nuestra selección está cuidadosamente curada para garantizar que cada artículo cumpla con los estándares más altos de calidad y durabilidad.</p>
           <h2>Servicio al Cliente Excepcional:</h2>
           <p>En SPORTING, no solo nos enorgullece ofrecer productos excepcionales, sino también proporcionar un servicio al cliente sin igual. Nuestro equipo apasionado está aquí para ayudarte en cada paso, desde la elección de productos hasta la entrega, para que puedas centrarte en lo que más te importa: tu rendimiento deportivo.</p>
          </div>
          <div className='caja2'>
              <img src={artc1} style={{height:"500px"}}></img>
          </div>
          <br></br>
          <div className='cabajo'>
          <br></br>
          <h3 align="center">UMSA  todos los derechos reservados</h3>
          </div>

    </div>
  )
}
