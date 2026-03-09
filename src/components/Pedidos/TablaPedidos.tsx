import React from 'react'
// Crea un componente llamado TablaPedidos.tsx.
// Define una Interface Pedido con:
// id: string (ej: "#1025")
// cliente: string
// total: number
// estado: debe ser 'Entregado', 'Pendiente' o 'Cancelado'.
// Crea un array de 4 o 5 pedidos de prueba.
// Dibuja una Tabla de Tailwind que muestre estos datos.
// Lógica visual: El estado debe aparecer dentro de un "Badge" (una etiqueta redondeada) con colores diferentes:
// Entregado: Verde.
// Pendiente: Amarillo/Naranja.
// Cancelado: Rojo.
interface Pedido {
    id: string;
    cliente: string;
    total: number;
    estado: 'Entregado' | 'Pendiente' | 'Cancelado';
}

const TablaPedidos = () => {
    const pedidos: Pedido[] = [
        { id: "#1025", 
        cliente: "Juan Pérez", 
        total: 150.00, 
        estado: 'Entregado' },
        { id: "#1026", 
        cliente: "María García",
        total: 200.00, 
        estado: 'Pendiente' },
        { id: "#1027", 
        cliente: "Carlos López", 
        total: 175.00, 
        estado: 'Cancelado' },
        { id: "#1028", 
        cliente: "Ana Martínez", 
        total: 125.00, 
        estado: 'Entregado' },
        { id: "#1029", 
        cliente: "Luis Fernández", 
        total: 190.00, 
        estado: 'Pendiente' }
    ];
    const colorState ={
        Entregado:'bg-green-100 text-green-800',
        Pendiente:'bg-yellow-100 text-yellow-800',
        Cancelado:'bg-red-100 text-red-800'

    }
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Cliente</th>
                        <th className="py-2 px-4 border-b">Total</th>
                        <th className="py-2 px-4 border-b">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map((pedido) => (
                        <tr key={pedido.id}>
                            <td className="py-2 px-4 border-b bg-yellow-100">{pedido.id}</td>
                            <td className="py-2 px-4 border-b bg-green-100">{pedido.cliente}</td>
                            <td className="py-2 px-4 border-b bg-blue-100">${pedido.total.toFixed(2)}</td> //tofixd nzido ghir joj ar9am 
                            <td className="py-2 px-4 border-b bg-gray-100">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorState[pedido.estado]}`}>
                                    {pedido.estado}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default TablaPedidos