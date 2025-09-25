import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import {IconLayoutDashboardFilled} from "@tabler/icons-react"


export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className='flex justify-center items-center'>
          <h1 className='h-10 w-10 text-secondary-foreground'>
            <IconLayoutDashboardFilled/>
          </h1>
          <h1 className='text-primary-foreground hidden md:block text-lg font-semibold tracking-tight -mt-4'>AHs UI</h1>
        </div>
      ),
      transparentMode: 'top',
    },
    links:[
        {
          text:"Templetes",
          url:"/templets"
        }
      ]
  };
}