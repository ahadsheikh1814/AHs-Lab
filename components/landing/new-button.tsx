import { cn } from '@/lib/utils'
import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const NewButton = ({
  title,
  className,
  href,
}: {
  title: string
  className?: string
  href: string
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center gap-1.5 w-fit py-1 px-2.5 rounded-full',
        'bg-accent border border-accent text-xs font-medium text-muted-foreground',
        'hover:text-neutral-800 dark:hover:text-neutral-200',
        'transition-all ease-in-out duration-150 whitespace-nowrap cursor-pointer',
        className,
      )}
    >
      <span className="bg-neutral-200 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 rounded-full px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide">
        New
      </span>
      <span>{title} added.</span>
      <IconArrowRight
        className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform ease-out duration-150"
      />
    </Link>
  )
}

export default NewButton