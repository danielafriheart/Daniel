import React from 'react'
import Button from './Button'

function WhatIDo() {
    return (


        <section className='wrapper'>

            <div className="container">

                <div className="grid lg:grid-cols-[70%,30%]">


                    {/* <<<<<<<<<<++++++++++ Grid Column ! ==========>>>>>>>>>> */}
                    <div className='pt-28'>

                        <ul className='flex flex-col gap-5'>
                            <li>
                                <h2 className='text-h2 leading-[166%]'>Front End Engineering</h2>
                            </li>
                            <li>
                                <h2 className='text-h2 leading-[166%]'>Interaction Design</h2>
                            </li>
                            <li>
                                <h2 className='text-h2 leading-[166%]'>Creative Implementation</h2>
                            </li>
                        </ul>

                    </div>

                    {/* <<<<<<<<<<++++++++++ Grid Column 2 ==========>>>>>>>>>> */}
                    <div>

                        <h2 className='text-h2 font-medium leading-[166%]'>What I do</h2>

                        <p>
                            I’ve had the pleasure of working with some great clients along the way. These are some of them!
                        </p>

                    </div>


                </div>

            </div>

        </section>

    )
}

export default WhatIDo