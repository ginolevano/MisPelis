import { useEffect, useState } from "react"
import {Editar} from "../Components/Editar"


export const Listado = ( {listadoState, setListadoState} ) => {


//    const [ listadoState ,  setListadoState ] = useState([])

    const [ editarState, setEditarState ] = useState(0)

    useEffect(()=>{
        conseguirPelis()
    },[])

    const conseguirPelis = () =>{

        let pelicula = JSON.parse(localStorage.getItem("peliculas"))
        setListadoState(pelicula)

        return pelicula
    }   

    const borrarPelis = (id) =>{

        let pelis_alamacenada = conseguirPelis()
        let nuevo_array_pelis = pelis_alamacenada.filter(pelis => pelis.id != id)

        setListadoState(nuevo_array_pelis)

        localStorage.setItem("peliculas",JSON.stringify(nuevo_array_pelis))

    }

    return (


    <>
        
            {/* <!--aqui van las peliculas--> */}

            {   

                listadoState != null ?
                listadoState.map(pelis =>{
                    return(
                <article 
                key={pelis.id}
                className="peli-item">
                <h3 className="title"> {pelis.titulo} </h3>
                <p className="description"> {pelis.descripcion} </p>

                <button 
                onClick={()=> setEditarState (pelis.id)}
                className="edit">Editar</button>
                <button 
                onClick={()=>borrarPelis (pelis.id)}
                className="delete">Borrar</button>
                
                {editarState == pelis.id && (
                    
                    <Editar
                    pelis = {pelis}
                    conseguirPelis = {conseguirPelis}
                    setListadoState = {setListadoState}
                    setEditarState = {setEditarState}
                    />

                )}
                
                </article>

                    )
                    
                })
                :<strong
                className="no__encontrado"
                >
                    no hay pelis
                </strong>
            }

            


    </>
  )
}
