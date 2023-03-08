import React, { useState } from 'react'
import { AddCategory } from './componentes/AddCategory'
import { GifGrid } from './componentes/GifGrid'

export const GifExpertApp=()=>{

    //const categori=['One Punch','Samurai X', 'Dragon Ball']

    const [categori, setCategori] = useState(['One Punch'])

    // const handleAdd=()=>{
    //     let nuevo='One Peace'
    //     //setCategori([...categori,nuevo])
    //     setCategori(categ=>[...categ,nuevo])//se hace una callback con las cat q serian el estado anterior mas la nueva q es el nuevo estado q tiene
    // }
    // <button onClick={handleAdd}>Agregar</button>
    return(
        <>
            <h2>GifExperApp</h2>
            <hr/>
            <AddCategory setCategori={setCategori}/>
            <ol>
                {
                    categori.map((categori)=>
                        (  
                            //<li key={categori}>{categori}</li> esto es una forma de hacerlo
                            <GifGrid key={categori} categori={categori}/>
                        )
                    )
                }
            </ol>
        </>
    )
}