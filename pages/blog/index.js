import React from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'

//function principal que recibe unas propiedades 
//destructuramos del objeto la propiedad data
export default function index({data}) {
  return (
      <Layout
      title="Blog | Next.js"
      description="Página del blog"
      >
        <h1>Lista de blogs</h1>
        {
          data.map(({id, title, body})=>
             (
              <div key={id}>
                <Link href={`/blog/${id}`}>
                  <a>
                    <h3>{id} - {title}</h3>
                  </a>
                </Link>
                <p>
                  {body}
                </p>
              </div>
            )
          )
        }
      </Layout> 
  )
}


//Generación de página web estatica
//Ejecucion en el servidor, pero no quede expuesto ni en js ni en html, en ningun lado

export async function getStaticProps (){
  try{
    //solicitud fetch a url (api)
    const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
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