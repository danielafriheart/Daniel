import React from 'react'
import { NavLink } from 'react-router-dom'



function Navbar() {

    const handleMenuToggle = () => {

        alert("Works")

    };



    return (

        <nav className='w-full fixed z-50'>

            <div className='container justify-between flex items-center'>


                <NavLink to={"/"} className="font-semibold text-lg">

                    Esuola Daniel

                </NavLink>


                <div className=''>


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