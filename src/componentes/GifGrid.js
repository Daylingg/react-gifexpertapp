import React, { useState, useEffect } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
//import { getGifs } from '../helpers/getGifs'
import { GifGridItems } from './GifGridItems'

export const GifGrid = ({categori}) => {

  // const [images, setImages] = useState([])

  const {data:images,loading}=useFetchGifs(categori);

  // console.log(data )
  // console.log(loading )

  // useEffect(()=>{//de esta manera el codigo solo se ejecuta cuando el componente es renderizado por pirmera vez
  //   getGifs(categori)//pide la categoria q se pasa como argumento y como retorna una promesa se usa el them
  //   .then(setImages)//img=>setImages(img) se tienen las img y se llama al setimages como el argumento q se pasa es el mismo q se recibe se puede simplificar a solo setimages
  // },[categori])//solo se ejecuta el efecto nuevamente si cambia la categoria


  
  return (
    <>
      <h3 className='animate__animated animate__flash '>{categori}</h3>
      {loading && <p className='animate__animated animate__flash '>Loading</p>}
      <div className='card-grid'>
        { 
          
          images.map(img=>(
            <GifGridItems 
            {...img} //de esta manera se mandan las img
            key={img.id}
            />
            )            
          )
        }
      
    </div>
    </>
  )
  /* images.map(img=>(
            <li key={images.id}> {img.title} </li>
            )            
          ) esta forma se puede simplificar desestructurando img para no usar el .
          
          images.map(({id,title})=>(
            <li key={id}> {title} </li>
            )            
          )*/
}
