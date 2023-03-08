

export const getGifs=async(categori)=>{

    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(categori)}&limit=10&key=PDZAIxD39r9o6VSaL87MPeLL1MgpO1yU`
    //${encodeURI(categori)} se usa para eliminar los espacios q pueda tener la categoria
    //"http://api.giphy.com/v1/gifs/search?q=Rick&limit=10&key=PDZAIxD39r9o6VSaL87MPeLL1MgpO1yU"

    const resp=await fetch(url),
    {data}=await resp.json()

    const gifs=data.map(img=>{
        return {
            id:img.id,
            title:img.title,
            url:img.images?.downsized_medium.url//img.images? el signo de interrogacion significa q si viene esa inforacion traiga las imagenes

        }
    })

    return gifs//regresa una promesa con la coleccion de las imagenes

}