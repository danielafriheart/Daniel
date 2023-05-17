import React from 'react'

function Gallery() {


    const galleryImages = [

        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072612/Daniel/unsplash_ztdvIEjyOdY_nlemmv.png',

        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_QemyfppHkU8_w0rfpo.png',

        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_17rSt_Qso-s_vvosxz.png',

        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_ZSPBhokqDMc_tyivrp.png',

        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_5f68N0n4Ef8_qybid5.png',

        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072609/Daniel/unsplash_3ZvHsFiZyME_aslnv3.png',

        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072606/Daniel/unsplash_gy08FXeM2L4_atywzt.png',

        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072604/Daniel/unsplash_LxBMsvUPAgo_mzacvf.png',

        'https://res.cloudinary.com/dnzi0xxtx/image/upload/v1684072602/Daniel/unsplash_pyMbXQhPK0k_kxgyib.png'

    ]



    const rows = [];

    const rowSize = 3;

    for (let i = 0; i < galleryImages.length; i++) {

        const row = galleryImages.slice(i, i + rowSize);

        rows.push(row);

    }


    return (

        <section className='wrapper p-5'>

            <div className="w-full grid grid-rows-3 gap-5">



                {

                    rows.map((row, i) => (



                        <div key={i} className={`h-[350px] grid ${i === 0 ? 'grid-cols-[40%,40%,auto] gap-5' : i === 1 ? 'grid-cols-[auto,40%,40%] gap-5' : i === 2 ? 'grid-cols-[50%,auto,30%] gap-5' : ''}`}>

                            {

                                row.map((img, image) => (

                                    <div

                                        key={image} // Add a unique key for each mapped element

                                        style={{

                                            backgroundImage: `url(${img})`,

                                            backgroundSize: 'cover',

                                            backgroundPosition: 'center',

                                        }}

                                        className='rounded-xl'

                                    >

                                    </div>

                                ))

                            }

                        </div>

                    ))


                }


            </div>

        </section>

    )

}

export default Gallery