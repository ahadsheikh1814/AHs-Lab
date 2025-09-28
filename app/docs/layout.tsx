import { source } from '@/lib/source';
import { DocsLayout, Navbar } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.pageTree}  nav={{component:<Navbar/>,enabled:true}} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}