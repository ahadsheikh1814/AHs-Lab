import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import {IconLayoutDashboardFilled} from "@tabler/icons-react"


export function baseOptions({ navbar }: { navbar?: React.ReactNode } = {}): BaseLayoutProps {
  return {
    nav: {
      component: navbar,
      title: (
        <div className='flex justify-center items-center'>
          <h1 className='h-10 w-10 dark:text-white text-neutral-800'>
            <IconLayoutDashboardFilled/>
          </h1>
          <h1 className='dark:text-white text-neutral-800 hidden md:block text-lg font-semibold tracking-tight -mt-4'>AHs Lab</h1>
        </div>
      ),
      transparentMode: 'top',
      enabled: true
    },
    links: [
      {
        text: "Templetes",
        url: "/templets"
      }
    ]
  };
}