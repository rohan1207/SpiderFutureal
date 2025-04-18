import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhoAreWe from '../components/WhoAreWe'
import OurValues from '../components/OurValues'
import OurProcess from '../components/OurProcess'
import Footer from '../components/Footer'



export default function HomePage() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <WhoAreWe/>
    <OurValues/>
    <OurProcess/>
    <Footer/>
    </>
  )
}
