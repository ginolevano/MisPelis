import React from 'react'
import { useState } from 'react'
import {GuardarEnStorage} from "../helper/GuardarEnStorage"


export const Crear = ({setListadoState}) => {

    let titulo_componente = "Añadir pelicula"

    const [ peliculaState , setPeliculaState ] = useState({
        titulo : "",
        descripcion : ""
    })
    const { titulo , descripcion } = peliculaState
    const buscarDatos = (e) =>{

        e.preventDefault()

        let target      = e.target
        let titulo      = target.titulo.value
        let descripcion =  target.descripcion.value

        let peliculas = {
            id :  new Date().getTime(),
            titulo,
            descripcion,
        }
        setPeliculaState(peliculas)

        //localStorage.setItem("pelis",JSON.stringify(peliculas))
        setListadoState(elemento=>{
            return[...elemento,peliculas]
        })

        GuardarEnStorage(peliculas , "pelis" )
    }

    return (

    <>
            <div className="add">
                <h3 className="title">{titulo_componente}</h3>
                
                <strong
                className="color__green"
                >
                {
                    (titulo && descripcion ) && "Pelicula añadida"
                }
                </strong>
                
                <form
                onSubmit={buscarDatos}
                >
                    <input 
                    type="text" 
                    id="title" 
                    placeholder="Titulo" 
                    name="titulo"
                    />

                    <textarea 
                    id="description" 
                    placeholder="Descripción"
                    name="descripcion"
                    >
                    </textarea>

                    <input 
                    type="submit" 
                    id="save" 
                    value="Guardar" 
                    />

                </form>

            </div>

    </>
    )
}
