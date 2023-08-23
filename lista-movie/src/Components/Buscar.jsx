import { useState } from "react"



export const Buscar = ( {listadoState, setListadoState} ) => {

  let titulo_componente = "Buscador"

  const [buscador , setBuscador] = useState('')
  const [ noEncontrar , setNoEncontrar ] = useState (false)
  const buscarPelis = (e) =>{

    setBuscador(e.target.value)

    let pelis_encontradas = listadoState.filter(pelis =>{
      return pelis.titulo.toLowerCase().includes(buscador.toLocaleLowerCase())
    })

    if(buscador.length <=1 || pelis_encontradas <=0 ){
      pelis_encontradas = JSON.parse(localStorage.getItem("peliculas"))
      setNoEncontrar(true)
    }else{
      setNoEncontrar(false)
    }

    setListadoState(pelis_encontradas)

  }

  
  
  return (
    <div>

            <div className="search">
                <h3 className="title">{titulo_componente} </h3>

                <strong
                className="no__buscar"
                >
                {
                  (noEncontrar == true && buscador.length > 1) &&
                  "no hay resultado : " + buscador
                }
                </strong>

                <form>
                    <input 
                    type="text" 
                    id="search_field" 
                    placeholder="Buscar"
                    value={buscador}
                    onChange={buscarPelis}
                    
                    />
                    <button id="search">Buscar</button>
                </form>
            </div>

    </div>
  )
}
