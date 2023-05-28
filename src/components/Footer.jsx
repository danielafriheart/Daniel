import React from 'react'

function Footer() {

    return (

        <footer className='wrapper bg-black text-white py-32'>
            <div className="container">

                <h1 className="text-h1 flex-wrap font-medium text-white">Esuoladaniel002 <br /> @gmail.com</h1>

                {/* Everything Socials */}
                <div className='mt-24 flex justify-between items-center'>
                    <div>
                        <p className='text-white font-semibold leading-[101%]'>Esuola Daniel</p>
                        <p className='text-white font-semibold leading-[101%]'>Creative Developer</p>
                    </div>

                    <div>

                        <ul className='flex gap-5'>
                            <li>
                                <a href="/" rel='noreferrer noopener' className='text-white font-semibold'> Twitter</a>
                            </li>
                            <li>
                                <a href="/" rel='noreferrer noopener' className='text-white font-semibold'> Instagram</a>
                            </li>
                            <li>
                                <a href="/" rel='noreferrer noopener' className='text-white font-semibold'> Github</a>
                            </li>
                            <li>
                                <a href="/" rel='noreferrer noopener' className='text-white font-semibold'> Linkedin</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </footer>

    )
}

export default Footer