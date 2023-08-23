import React from 'react'

export const Editar = ({pelis,conseguirPelis,setListadoState,setEditarState}) => {

  const editarPelis = (e,id) =>{
    
    e.preventDefault()

    let target = e.target

    let pelis_almacenadas = conseguirPelis()
    let indice = pelis_almacenadas.findIndex(pelis => pelis.id == id)
    
    

    let pelis_actualizadas = {
      id,
      titulo : target.titulo.value,
      descripcion : target.descripcion.value
    }

    pelis_almacenadas[indice] = pelis_actualizadas

    localStorage.setItem("peliculas",JSON.stringify(pelis_almacenadas))

    setListadoState(pelis_almacenadas)
    
    setEditarState(0)
  }



  return (
    <div>

        <form
        onSubmit={e =>editarPelis(e,pelis.id)}
        className="edit__form"
        >

        <input 
        type="text" 
        placeholder="Titulo"
        name="titulo"
        defaultValue={pelis.titulo}
        />

        <input 
        type="text"
        placeholder="Descripcion"
        name="descripcion"
        defaultValue={pelis.descripcion}
        />

        <input 
        value="Actualizar"
        type="submit" />
        
        </form>

    </div>
  )
}
