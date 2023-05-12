import React from 'react'
import { NavLink } from 'react-router-dom'



function Navbar() {

    const handleMenuToggle = () => {

        alert("Works")

    };



    return (

        <nav className='wrapper'>

            <div className='container justify-between flex items-center'>

                <div className='flex items-center lg:gap-32 md:gap-24 sm:gap-20'>


                    <NavLink to={"/"} className="font-semibold text-lg">

                        Esuola Daniel

                    </NavLink>

                    <p className='text-lg font-medium flex-wrap leading-[101%] hidden lg:flex'>
                        Currently Email <br />
                        Developer  at Osome
                    </p>

                </div>

                <div className='flex items-center gap-24'>


                    <a href="https://github.com/danielafriheart"
                        rel='noopener noreferrer'
                        className='hidden lg:flex items-center gap-3 font-medium'
                    >

                        Github
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.5 9.50001L21.5 3.50001M21.5 3.50001H15.5M21.5 3.50001L12.5 12.5M10.5 3.5H8.3C6.61984 3.5 5.77976 3.5 5.13803 3.82698C4.57354 4.1146 4.1146 4.57354 3.82698 5.13803C3.5 5.77976 3.5 6.61984 3.5 8.3V16.7C3.5 18.3802 3.5 19.2202 3.82698 19.862C4.1146 20.4265 4.57354 20.8854 5.13803 21.173C5.77976 21.5 6.61984 21.5 8.3 21.5H16.7C18.3802 21.5 19.2202 21.5 19.862 21.173C20.4265 20.8854 20.8854 20.4265 21.173 19.862C21.5 19.2202 21.5 18.3802 21.5 16.7V14.5" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </a>


                    <button
                        onClick={handleMenuToggle}
                    >

                        <svg className='hidden lg:flex' width="61" height="19" viewBox="0 0 61 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="2.5" y1="2" x2="58.4756" y2="2" stroke="black" stroke-width="4" stroke-linecap="round" />
                            <line x1="2.52448" y1="17" x2="58.5" y2="17" stroke="black" stroke-width="4" stroke-linecap="round" />
                        </svg>

                        <p className='lg:hidden flex font-medium'>Menu</p>

                    </button>


                </div>

            </div>

        </nav>

    )



}




export default Navbar