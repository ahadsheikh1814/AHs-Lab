import ComponentsPreview from '@/components/landing/ComponentsPreview'
import Hero from '@/components/landing/Hero'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Hero/>
      <ComponentsPreview/>
    </div>
  )
}

export default Home