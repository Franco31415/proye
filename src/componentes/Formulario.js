import React from 'react'

export const Formulario = () => {
  return (
    <div>
    <br></br>
    <h1 align="center">Formulario</h1>
    <br></br>
    <form className='du' style={{textAlign:"left"}}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Introduce tu Correo : </label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Introduce Nombres : </label>
    <input type="text" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Introduce Apellidos : </label>
    <input type="text" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Introduce contraseña : </label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
    
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<div className='cabajo'>
          <br></br>
          <h3 align="center">UMSA  todos los derechos reservados</h3>
          </div>
    </div>
  )
}
