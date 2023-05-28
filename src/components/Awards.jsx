import React from 'react'

function Awards() {



    const myAwards = [

        {

            id: 1,

            awardName: 'JavaScript Algorithms & Data Structures',

            awardYear: '2023',

            awardPlatform: 'FreeCodeCamp'

        },
        {

            id: 2,

            awardName: 'Responsive Web Design',

            awardYear: '2022',

            awardPlatform: 'FreeCodeCamp'

        },

    ]



    return (

        <section className='wrapper p-5 pb-52'>

            <div className="container">

                <header>

                    <h2 className='text-h2 font-medium leading-[166%]'>Awards & Recognitions</h2>

                    <p className='w-[363px]'>
                        I’ve had the pleasure of working with some great clients along the way. These are some of them!
                    </p>

                </header>

                <div className='mt-10'>
                    <table className='table-auto w-[800px] ms-auto'>
                        <thead className='border-b border-black'>
                            <tr className='text-h3'>
                                <th className='text-left font-medium pb-10'>Award</th>
                                <th className='text-center font-medium pb-10'>Platform</th>
                                <th className='text-right font-medium pb-10'>Year</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                myAwards.map((awards, i) => [
                                    <tr className='border-b border-black' key={i}>
                                        <td className='text-left py-10 w-1/3'>
                                            <p> {awards.awardName} </p>
                                        </td>

                                        <td className='text-center py-10'>
                                            <p> {awards.awardPlatform} </p>
                                        </td>

                                        <td className='text-right py-10'>
                                            <p> {awards.awardYear} </p>
                                        </td>
                                    </tr>
                                ])
                            }
                        </tbody>
                    </table>
                </div>

            </div>

        </section>

    )

}

export default Awards