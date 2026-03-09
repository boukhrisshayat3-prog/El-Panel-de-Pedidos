import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import TablaPedidos from './components/Pedidos/TablaPedidos'
import Contact from './components/Pages/Contact/Contact'
import Mantenimientos from './components/Pages/Mantenimientos/Mantenimientos'
import NotFound from './components/Pages/NotFound/NotFound'



function App() {


  return (
    <BrowserRouter>
      {/* 1. La Navbar (Siempre visible) */}
      <nav className="p-4 bg-indigo-600 text-white flex flex-wrap gap-4 shadow-lg">
        <Link to="/" className="hover:underline font-bold">
          Inicio
        </Link>
        <Link to="/pedidos" className="hover:underline font-bold">
          Pedidos
        </Link>
        <Link to="/mantenimientos" className="hover:underline font-bold">
          Mantenimientos
        </Link>
        <Link to="/contacto" className="hover:underline font-bold">
          Contacto
        </Link>
      </nav>

      {/* 2. El Área de Contenido (Aquí cambian los componentes) */}
      <div className="p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedidos" element={<TablaPedidos />} />
          <Route path="/mantenimientos" element={<Mantenimientos />} />
          <Route path="/contacto" element={<Contact />} />
          {/* 404 - Si no encuentra la ruta */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App