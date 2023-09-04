import React, { useState } from 'react'

export const Buscar = ({listadoState, setListadoState}) => {
  
  let titulo_componente = "Buscador"


  const [ buscarState ,  setBuscarState ] = useState('')

  const [ noEncontrar , setNoEncontrar ] = useState(false)

  const buscarPelis = (e) =>{
    
    setBuscarState(e.target.value)

    //CONSEGUIMOS LAS PELICULAS ALMACENADA DEL LISTADO
    let pelis_almacenadas = listadoState.filter(pelis =>{
      return pelis.titulo.toLowerCase().includes(buscarState.toLocaleLowerCase())

    })
    
    //CONDICIONES SI .LENGHT ES <=1 O PELIS ALAMACENADAS NO ENCUENTRA NADA 
    //ENTONCES MUESTRAME TODA LA LISTA
    if(buscarState.length <=1 || pelis_almacenadas <=0 ){
      pelis_almacenadas = JSON.parse(localStorage.getItem("pelis"))
      setNoEncontrar(true)
    }else{
      setNoEncontrar(false)
    }
    //DEVOLVEMOS EL LISTADO ACTUALIZADO CON LAS PELIS ALMACENADAS 
    setListadoState(pelis_almacenadas)

  }

  return (
    <>

            <div className="search">
                <h3 className="title">
                  {titulo_componente} : {buscarState}
                </h3>
                <strong
                className="color__rojo"
                >
                {
                  (noEncontrar == true && buscarState.length >=1) && 
                  "No hay resultado"
                }
                </strong>
                <form>

                    <input 
                    type="text" 
                    id="search_field" 
                    placeholder="Buscar"
                    value={buscarState}
                    onChange={buscarPelis}
                    />

                    <button 
                    id="search"
                    >Buscar
                    </button>
                </form>
            </div>

    </>
  )
}
