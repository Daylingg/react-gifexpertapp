import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs'


export const useFetchGifs = (categori) => {

    const [state, setState] = useState({
        data:[],
        loading:true
    })

    useEffect(()=>{//de esta manera el codigo solo se ejecuta cuando el componente es renderizado por pirmera vez
        getGifs(categori)//pide la categoria q se pasa como argumento y como retorna una promesa se usa el them
        .then(img=>{
            setState({
                data:img,
                loading:false
            })
        })//img=>setImages(img) se tienen las img y se llama al setimages como el argumento q se pasa es el mismo q se recibe se puede simplificar a solo setimages
    },[categori])//solo se ejecuta el efecto nuevamente si cambia la categoria

    return state
}
