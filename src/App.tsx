import { useState } from 'react'
import './App.css'
import TablaPedidos from './TablaPedidos/TablaPedidos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-8">
        ¡Bienvenido a la Gestión de Pedidos!
      </h1>
      <TablaPedidos />
        
    </>
  )
}

export default App
