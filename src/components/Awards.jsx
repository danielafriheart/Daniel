import React from 'react'

function Awards() {



    const awards = [

        {

            id: 1,

            awardName: '',

            awardYear: '2022'

        },
        {

            id: 2,

            awardName: '',

            awardYear: '2023'

        },

    ]



    return (

        <section className='wrapper p-5'>

            <div className="container">

                <header>

                    <h2 className='text-h2 font-medium leading-[166%]'>Awards & Recognitions</h2>

                    <p className='w-1/3'>
                        I’ve had the pleasure of working with some great clients along the way. These are some of them!
                    </p>

                </header>

            </div>

        </section>

    )

}

export default Awards