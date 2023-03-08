import React from 'react'

export const GifGridItems = ({id,title,url}) => {//se obtienen de forma desestructurada esos datos de la img
    console.log(id,title,url)

    return (
        <div className='card animate__animated animate__bounceIn '>
            {/* {props.title} */}
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
