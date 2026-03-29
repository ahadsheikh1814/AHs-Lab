import React from 'react'
import H1 from '../typography/H1';
import P from '../typography/P';

const TempleteHeading = () => {

  return (
      <div className="md:px-10 px-5 py-20 border-b border-accent">
        <H1 className="mb-3">Templates</H1>
        <P className="text-muted-foreground max-w-lg">
          Modern, minimalist templates to kickstart your next product — built with React, Next.js, TailwindCSS, Framer Motion, and TypeScript.
        </P>
      </div>
  )
}



export default TempleteHeading