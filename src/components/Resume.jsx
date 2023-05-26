import React from 'react'
// import Button from './Button'

function Resume() {


    // const handleClick = () => {

    //     alert("it works")

    // }

    return (


        <section className='wrapper'>

            <div className="container">

                <div className="grid lg:grid-cols-[40%,60%] py-52">


                    {/* <<<<<<<<<<++++++++++ Grid Column ! ==========>>>>>>>>>> */}
                    <div className='lg:pr-14'>

                        <h2 className='text-h2 font-medium leading-[166%]'>Resume</h2>
 
                        <p>
                            I am constantly seeking out new challenges and opportunities to expand my knowledge and skills. 
                        </p>
                        <br />
                        <p>
                            With years of experience in creating visually stunning and functional products and web experiences.
                        </p>


                        {/* <div className='mt-[50px]'>

                            <Button btnText={"PDF"} onClick={handleClick} />

                        </div> */}

                    </div>

                    {/* <<<<<<<<<<++++++++++ Grid Column 2 ==========>>>>>>>>>> */}
                    <div className="rounded-[30px] bg-[url('https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_17rSt_Qso-s_vvosxz.png')] bg-cover bg-center h-[422px]">

                    </div>


                </div>

            </div>

        </section>

    )
}

export default Resume