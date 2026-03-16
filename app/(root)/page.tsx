import ComponentsPreview from '@/components/landing/ComponentsPreview'
import Features from '@/components/landing/features'
import Hero from '@/components/landing/Hero'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Hero/>
      <ComponentsPreview/>
      <Features/>
    </div>
  )
}

export default Home