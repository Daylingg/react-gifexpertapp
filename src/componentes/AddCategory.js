import React,{useState} from 'react'

import PropTypes from 'prop-types'



export const AddCategory = ({setCategori}) => {//el setCategori es la propiedad q se le pasa al componente AddCategory

    const [inputValue, setInputValue] = useState('')

    const handleInputChange=(e)=>{
        setInputValue(e.target.value)//para poder escribir en el input
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(inputValue.trim().length>2){//con trim() se borran los espacios en blanco de antes y despues...se pregunta si es mayor a dos letras entonces se ejecuta el if
            setCategori(categ=>[inputValue,...categ])//se va agregando al listado lo q se escribe en el input
            console.log(setCategori)
            setInputValue('')
        }else{
            alert("debe tener mas de dos letras lo escrito en el input")
        }

        //console.log("Submit hecho")
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
            
        </form>
    )
}

AddCategory.prototype={//garantiza q en el componente AddCategory q esta en el componente GifExpertApp se le pase una propiedad setCategori obligatoriamente
    setCategori:PropTypes.func.isRequired
}
