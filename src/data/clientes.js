export async function obtenerClientes() {
  const resuesta = await fetch(import.meta.env.VITE_API_URL)
  const resultado = await resuesta.json()
  return resultado
}

export async function agregarCliente(datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: 'POST',
      body: JSON.stringify(datos),
      headers: {
        'content-Type': 'application/json'
      }
    })
    await respuesta.json()
  } catch (error) {
    console.log(error);
  }
}

export async function editarCliente(id) {
  const resuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
  const resultado = await resuesta.json()
  return resultado
}

export async function actualizarCliente(id, datos) {
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarCliente(id) {
  try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE',
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}