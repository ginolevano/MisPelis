import React, { useState } from 'react'
import {GuardarEnStorage} from "../helper/GuardarEnStorage"


export const Crear = ({setListadoState}) => {

    let titulo_componente = "Añadir pelicula"

    const [ peliculaState , setPeliculaState ] = useState({
        titulo :"",
        descripcion : ""
    })

    const { titulo , descripcion } = peliculaState

    const crearPelis = (e)=>{

        e.preventDefault()

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        let movies = {
            id : new Date().getTime(),
            titulo,
            descripcion,
        }
        //GUARDAR EN ESTADO

        setPeliculaState(movies)
        
        setListadoState(element =>{
            return[...element,movies]
        })
        //localStorage.setItem("peliculas",JSON.stringify(movies))
        GuardarEnStorage( "peliculas" ,movies )
    }
    

    return (
        
    <div>

            <div className="add">
                <h3 className="title">{titulo_componente}</h3>

                <strong
                className="color__green"
                >
                {(titulo && descripcion)&&
                    "Pelicula Añadida"
                }
                </strong>

                <form
                onSubmit={crearPelis}
                >

                    
                    <input type="text" 
                    id="title" 
                    placeholder="Titulo" 
                    name="titulo"
                    />

                    <textarea 
                    id="description" 
                    placeholder="Descripción"
                    name="descripcion"
                    ></textarea>

                    <input 
                    type="submit" 
                    id="save" 
                    value="Guardar" />
                </form>
            </div>

    </div>

    )
}
