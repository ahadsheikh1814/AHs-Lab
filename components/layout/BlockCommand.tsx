import React from 'react'

const BlockCommand = ({componentKey}: {componentKey: string}) => {
  return (
    <div>
      <code className="text-sm text-foreground/80 dark:text-foreground/80">
        npx shadcn@latest add https://ahs-lab.vercel.app/r/{componentKey}.json
      </code>
    </div>
  )
}

export default BlockCommand
