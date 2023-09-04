export const GuardarEnStorage = (element , key) =>{
    
    let elemento = JSON.parse(localStorage.getItem(key))

    if(Array.isArray(elemento)){
        elemento.push (element)
    }else{
        elemento = [element]
    }
    
    localStorage.setItem(key,JSON.stringify(elemento))

    return elemento
}