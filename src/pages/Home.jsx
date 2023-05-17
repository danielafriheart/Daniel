import React, { useEffect } from 'react'
import Hero from '../components/Hero'
import Resume from '../components/Resume';
import WhatIDo from '../components/WhatIDo';
import Gallery from '../components/Gallery';
import Workfolio from '../components/Workfolio';



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

            <Gallery />

            <Workfolio />

        </>

    )



}



export default Home