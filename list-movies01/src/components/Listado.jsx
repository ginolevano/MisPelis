import React, { useEffect, useState } from 'react'
import {Editar} from "./Editar"



export const Listado = ({listadoState , setListadoState}) => {

    //const [ listadoState , setListadoState ] = useState([])

    const [ editarState , setEditarState ] = useState(0)

    useEffect(()=>{
        conseguirDatos()
    },[])

    const conseguirDatos = () =>{

        let peliculas = JSON.parse(localStorage.getItem("pelis"))

        setListadoState(peliculas)
        return peliculas
    }

    const BorrarPelis = (id) =>{

        let pelis_almacenadas   = conseguirDatos()
        let nuevo_array_d_pelis = pelis_almacenadas.filter(pelis => pelis.id != id)
        
        setListadoState(nuevo_array_d_pelis)

        localStorage.setItem("pelis",JSON.stringify(nuevo_array_d_pelis))

    }

    return (
    <>

            {
                listadoState != null ?
                listadoState.map(pelis=>{
                    return(
                    <article 
                    key={pelis.id}
                    className="peli-item">
                        <h3 className="title"> {pelis.titulo} </h3>
                        <p className="description">{pelis.descripcion}</p>

                        <button 
                        onClick={ () => setEditarState (pelis.id) }
                        className="edit">Editar</button>
                        <button 
                        onClick={ ()=> BorrarPelis (pelis.id)}
                        className="delete">Borrar</button>

                        {
                            editarState == pelis.id && (
                                <Editar
                                pelis = {pelis}
                                conseguirDatos= {conseguirDatos}
                                setListadoState = {setListadoState}
                                setEditarState = {setEditarState}
                                
                                />
                            )
                        }

                    </article>
                    )
                    
                })
                : <strong>
                no hay pelis

                </strong>
            }


    </>
    )
}
