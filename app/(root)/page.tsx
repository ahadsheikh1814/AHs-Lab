import Hero from '@/components/landing/Hero'
import Scales from '@/components/layout/Scales'
import React from 'react'

const Home = () => {
  return (
    <div className='relative min-h-screen'>
      <Scales/>
      <Hero/>
    </div>
  )
}

export default Home