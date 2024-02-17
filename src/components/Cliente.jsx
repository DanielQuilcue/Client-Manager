import { useNavigate, Form, redirect } from 'react-router-dom'
import { eliminarCliente } from '../data/clientes'

export async function action({params}) {
    await eliminarCliente(params.clienteId)
    return redirect('/')
}

function Cliente({cliente}) {

    const navigate = useNavigate()
    const { nombre, empresa, email, telefono, id} = cliente

    return (
        <tr className="border">
            <td className='p-6 space-y-2'>
                <p className="text-2xl text-gray-800">{nombre}</p>
                <p>{empresa}</p>
            </td>

            <td className="p-6 border">
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Email: </span>{email} </p>
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono} </p>
            </td>

            <td className="p-6 flex gap-3 justify-center">
                <button
                    type="button"
                    className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                    onClick={() => navigate(`/clientes/${id}/editar`) }
                >
                    Editar
                </button>

            <Form
                method='post'
                action={`/clientes/${id}/eliminar`}
                onSubmit={(e) => {
                    if(!confirm('¿Deseas eliminar este registro?')) {
                        e.preventDefault()
                    }
                }}
            >
                <button
                    type="submit"
                    className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
                >
                    Eliminar
                </button>
            </Form>
  
            </td>
        </tr>
    )
}

export default Cliente