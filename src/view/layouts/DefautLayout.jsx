import React from 'react'
import Navbar from '../Navbar'

export default function DefautLayout({children}) {
  return (
    <section>
        <Navbar></Navbar>
        {children}
    </section>
  )
}
