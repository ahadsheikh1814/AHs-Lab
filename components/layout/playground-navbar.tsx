import React from 'react'

const PlayGroundNavbar = () => {
    return (
        <nav className='w-full h-full sticky top-0 backdrop-blur-2xl flex items-center justify-between py-4 md:px-0 px-5 z-50'>
            <div className='text-xl font-bold px-5'>
                <h1 className='italic'>
                    AHs {" "}
                    <span className='text-lg font-serif text-ahs font-medium'>playground</span>
                </h1>
            </div>
        </nav>
    )
}

export default PlayGroundNavbar