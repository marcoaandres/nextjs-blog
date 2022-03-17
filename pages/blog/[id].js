import React from 'react'
import Layout from '../../components/Layout'

export default function primerPost({data}) {
  return (
    <Layout>
        <a>
          <h1>{data.id} - {data.title}</h1>
        </a>
        <p>{data.body}</p>
    </Layout>
  )
}

//Creacion de archivos del 1 al 100 que son nuestros blogs

//solicitud asincrona para obtener los id de los posts
export async function getStaticPaths(){
  try {
    //solicitud a todos los post (api)
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
    //esperamos la respuesta y la convertimos a formato json
    const data = await resp.json()
    //paths va atener todos los id de cada uno de los blogs
    // hacemos un map de los blog, donde por cada blog, destructuramos su id
    // despues creamos un objeto que dentro tendr una propidead llamada params que tambien es un objeto
    // que tendra el id de cada blog, para evitar errores convertiremos el id numero a un id string
    //con template string
    const paths = data.map(({id}) => ( { params: { id: `${id}` } } ))

    //configuracion de fallback que recomienda next
    
    return{
      paths,
      // genera un 404 en caso de que la solicitud falle
      fallback: false,
    }

  } catch (error) {
    console.log(error)
    
  }
}

//Acceder a cada uno de los archivos


//Generación de página web estatica
//Ejecucion en el servidor, pero no quede expuesto ni en js ni en html, en ningun lado

export async function getStaticProps ({params}){
  try{
    //solicitud fetch a url (api)
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id)
    //Esperamos la respuesta y la convertimos a formato json
    const data = await resp.json()
    return {
      //retornamos las porpoiedades con data
      props:{
        data
      }
    }

  }
  catch(error){
    console.log(error)
  }
}