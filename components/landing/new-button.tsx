import { cn } from '@/lib/utils'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const NewButton = ({
    title,
    className,
    href
}: {
    title: string,
    className?: string,
    href: string
}) => {
    return (
        <Link
        href={href}
            className={cn(
                'flex group items-center justify-center gap-1 max-w-52 w-fit py-1 px-2.5 rounded-md bg-accent text-xs font-medium text-muted-foreground whitespace-nowrap cursor-pointer',
                'transition-all ease-in-out duration-100',
                className,
            )}
        >
            New-{title} added.
            <IconArrowRight
                className='w-4 h-4 mt-[2px] group-hover:ml-2 transition-all ease-out duration-100'
            />
        </Link>
    )
}

export default NewButton