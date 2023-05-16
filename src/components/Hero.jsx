import React from 'react'

function Hero() {

    return (

        <section className='wrapper'>

            <div className="container lg:h-screen justify-between flex flex-col">

                {/* <<<<<<<<<<++++++++++ Header ==========>>>>>>>>>> */}
                <header className="lg:w-[50vw] md:w-[55vw] mx-auto py-2 flex justify-between  w-full">

                    <div className="">

                        <p className='text-lg font-medium flex-wrap leading-[101%] hidden lg:flex'>
                            Currently Email <br />
                            Developer  at Osome
                        </p>

                    </div>




                    <a href="https://github.com/danielafriheart"
                        rel='noopener noreferrer'
                        className='hidden lg:flex items-center gap-3 font-medium'
                    >

                        Github
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 9.50001L21.5 3.50001M21.5 3.50001H15.5M21.5 3.50001L12.5 12.5M10.5 3.5H8.3C6.61984 3.5 5.77976 3.5 5.13803 3.82698C4.57354 4.1146 4.1146 4.57354 3.82698 5.13803C3.5 5.77976 3.5 6.61984 3.5 8.3V16.7C3.5 18.3802 3.5 19.2202 3.82698 19.862C4.1146 20.4265 4.57354 20.8854 5.13803 21.173C5.77976 21.5 6.61984 21.5 8.3 21.5H16.7C18.3802 21.5 19.2202 21.5 19.862 21.173C20.4265 20.8854 20.8854 20.4265 21.173 19.862C21.5 19.2202 21.5 18.3802 21.5 16.7V14.5" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </a>

                </header>


                <div className='flex flex-col gap-[23px]'>
                    <h1 className="lg:text-display-1 text-display-2 font-medium lg:pl-32">Creative </h1>

                    <div className="flex lg:flex-row flex-col items-center justify-between">

                        <h1 className="text-display-2 font-bold">Frontend </h1>

                        <p className='w-[462px]'>
                            I specialize in front end magic with React and have a touch of Angular in my arsenal. I strive to create inclusive and accessible apps that will blow your mind.
                        </p>

                    </div>

                    <div className="flex items-center justify-between">

                        <div className="lg:pl-24 hidden lg:flex">
                            <svg width="90" height="96" viewBox="0 0 90 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M45.5001 4.85303L45.5001 87.206" stroke="black" stroke-width="8" stroke-linecap="round" />
                                <path d="M4.32361 54.853L45.5001 90.5148L85.9413 54.853" stroke="black" stroke-width="8" stroke-linecap="round" />
                            </svg>
                        </div>


                        <h1 className="text-display-2 font-medium">Developer </h1>

                    </div>

                </div>

            </div>

        </section>

    )
}

export default Hero