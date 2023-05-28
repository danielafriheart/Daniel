import React from 'react'
import { NavLink } from 'react-router-dom'



function Navbar() {

    const handleMenuToggle = () => {

        alert("Works")

    };



    return (

        <nav className='w-full fixed z-50'>

            <div className='container justify-between flex items-center'>


                <NavLink to={"/"} className="font-semibold text-lg blend">

                    Esuola Daniel

                </NavLink>


                <div>

                    <ul className='flex gap-5'>
                        <li>
                            <NavLink to={"/"} className='font-medium px-3'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about"} className='font-medium px-3'>About</NavLink>
                        </li>
                    </ul>

                    <button
                        className='lg:hidden flex '
                        onClick={handleMenuToggle}
                    >
                        <p className='font-medium'>Menu</p>

                    </button>


                </div>

            </div>

        </nav>

    )



}




export default Navbar