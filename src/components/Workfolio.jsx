import React from 'react'

function Workfolio() {



    return (

        <section className='wrapper my-40'>

            <div className="container">

                <div className="grid lg:grid-cols-[70%,30%]">


                    {/* <<<<<<<<<<++++++++++ Grid Column ! ==========>>>>>>>>>> */}
                    <div className='pt-28'>

                        <ul>
                            <li>
                                <h2 className='text-h1 font-medium leading-[166%]'>Osome</h2>
                            </li>
                            <li>
                                <h2 className='text-h1 font-medium leading-[166%]'>Speak africa</h2>
                            </li>
                            <li>
                                <h2 className='text-h1 font-medium leading-[166%]'>Edozzier</h2>
                            </li>
                        </ul>

                    </div>

                    {/* <<<<<<<<<<++++++++++ Grid Column 2 ==========>>>>>>>>>> */}
                    <div>

                        <h2 className='text-h2 font-medium leading-[166%]'>Workfolio</h2>

                        <p>
                            I’ve had the pleasure of working with some great clients along the way. These are some of them!
                        </p>

                    </div>


                </div>

            </div>

        </section>

    )



}

export default Workfolio