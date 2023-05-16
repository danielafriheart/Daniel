import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Resume from '../components/Resume';
import WhatIDo from '../components/WhatIDo';



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

            <Resume />

            <WhatIDo />

        </>

    )



}



export default Home