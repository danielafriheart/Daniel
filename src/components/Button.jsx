import React from 'react'

function Button({ onClick, btnText }) {


    return (



        <button

            className='bg-black text-white flex items-center px-[35px] py-[15px] rounded-[10px] gap-5'

            onClick={() => onClick()}

        >



            <p> {btnText} </p>

            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 14V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H4C3.46957 20 2.96086 19.7893 2.58579 19.4142C2.21071 19.0391 2 18.5304 2 18V14M6 9L11 14M11 14L16 9M11 14V2" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>



        </button>



    )
}

export default Button