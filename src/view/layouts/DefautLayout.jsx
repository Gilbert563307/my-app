import React from 'react'
import Navbar from '../Navbar'

export default function DefaultLayout({children}) {
  return (
    <section>
        <Navbar></Navbar>
        {children}
    </section>
  )
}
