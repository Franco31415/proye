import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/img/logo.png'
import imgp from '../assets/img/log.jpg'
export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid mar" >
        <Link to='/' className="navbar-brand ">
            <img src={imgp} style={{ width: "100px" }} alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className='nav-link' to='/'>Inicio</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/historia'>Historia</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/productos'>Productos</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/consejos'>Consejos deportivos</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='galeria'>Galeria</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='lanzamientos'>Lanzamientos</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='formulario'>Formulario</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='creditos'>Creditos</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='servicio'>Servicio al cliente</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='contacto'>Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

