import React, { useEffect } from 'react'
import Hero from '../components/Hero'



function Home() {

    useEffect(() => {

        window.scrollTo(

            {

                top: 0,

                left: 0,

                behavior: 'smooth'

            }

        );

        document.title = 'Daniel Esuola | Home'

    })

    return (

        <>

            <Hero />

        </>

    )



}



export default Home