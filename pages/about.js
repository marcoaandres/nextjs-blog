import React from 'react'
import Layout from '../components/Layout'
import utilStyles from '../styles/Utils.module.css'

export default function about() {
  return (
    <Layout
        title="Acerca de | Blog"
        description="pagina acerca de"
    >
        <h1>Acerca de</h1>
        <section className={utilStyles.headingMd}>
        <p>Front-End Developer</p>
        <p>
          Me encanta implementar diseños que inspiran y atraen a las personas.
        </p>
      </section>
    </Layout>
  )
}

