import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import  { Navbar }  from './componentes/Navbar';
import  {Inicio}  from './componentes/Inicio';
import  {Historia}  from './componentes/Historia.js';
import { Productos } from './componentes/Productos.js';
import { Consejos } from './componentes/Consejos.js';
import { Galeria } from './componentes/Galeria.js';
import { Lanzamientos } from './componentes/Lanzamientos.js';
import { Formulario } from './componentes/Formulario.js';
import { Creditos } from './componentes/Creditos.js';
import { Serviciocliente } from './componentes/Serviciocliente.js';
import { Contacto } from './componentes/Contacto.js';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar> 
        <Routes>
          <Route path='/' exact Component={Inicio}></Route>
          <Route path='/historia' exact element={<Historia />}></Route>
          <Route path='/productos' exact element={<Productos />}></Route>
          <Route path='/consejos' exact element={<Consejos />}></Route>
          <Route path='/galeria' exact element={<Galeria />}></Route>
          <Route path='/lanzamientos' exact element={<Lanzamientos />}></Route>
          <Route path='/formulario' exact element={<Formulario />}></Route>
          <Route path='/creditos' exact element={<Creditos />}></Route>
          <Route path='/servicio' exact element={<Serviciocliente />}></Route>
          <Route path='/contacto' exact element={<Contacto />}></Route>
        </Routes> 
         
      </Router>

    </div>
  );
}

export default App;
