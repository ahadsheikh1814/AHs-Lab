import H1 from '@/components/typography/H1'
import P from '@/components/typography/P'
import React from 'react'

const Tools = () => {
    return (
        <div className='min-h-screen'>
            <div className='md:px-10 px-5 py-20 border-b border-accent'>
                <H1 className='mb-3'>Tools</H1>
                <P className='text-muted-foreground max-w-lg'>
                    A curated collection of free, modern tools built to help developers, designers, and creators work smarter, build faster, and ship better projects.
                </P>
            </div>
            <div className='md:px-10 px-5 py-20'>
                
            </div>
        </div>
    )
}

export default Tools