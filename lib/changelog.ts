export type changelog_con_type = {
    id: number;
    date: string;
    title: string;
    description: string;
    img_src?: string;
};

export const changelog_content: changelog_con_type[] = [
    {
        id: 47,
        date: "March 12, 2026",
        title: "Add og-image",
        description: "Added an Open Graph image for better social media link previews.",
        img_src:"/og-image.png"
    },
    {
        id: 46,
        date: "March 12, 2026",
        title: "Add /playground link to the navbar",
        description: "Added a navigation link to the playground page in the navbar.",
    },
    {
        id: 45,
        date: "March 12, 2026",
        title: "Add /playground page",
        description: "Added a new playground page to the project.",
    },
    {
        id: 44,
        date: "February 27, 2026",
        title: "Merge CVE fix pull request",
        description: "Merged the Vercel-automated pull request that fixed React Server Components CVE vulnerabilities.",
    },
    {
        id: 43,
        date: "February 24, 2026",
        title: "Fix React Server Components CVE vulnerabilities",
        description: "Updated Next.js and React dependencies to patch React Server Components CVE security vulnerabilities.",
    },
    {
        id: 42,
        date: "October 25, 2025",
        title: "Merge branch from AHs-UI-2",
        description: "Merged changes from the AHs-UI-2 branch into master.",
    },
    {
        id: 41,
        date: "October 25, 2025",
        title: "Add new template",
        description: "Added a new template to the templates section.",
    },
    {
        id: 40,
        date: "October 17, 2025",
        title: "Create nextjs.yml",
        description: "Added a GitHub Actions workflow file for Next.js CI/CD.",
    },
    {
        id: 39,
        date: "October 11, 2025",
        title: "Add Product Hunt badge",
        description: "Added a Product Hunt badge to the landing page.",
    },
    {
        id: 38,
        date: "October 10, 2025",
        title: "Add new landing page design",
        description: "Refreshed the landing page with a new and improved design.",
    },
    {
        id: 37,
        date: "October 07, 2025",
        title: "Fix the bug",
        description: "General bug fix.",
    },
    {
        id: 36,
        date: "October 07, 2025",
        title: "Add Vercel Web Analytics and Speed Insights",
        description: "Integrated Vercel Web Analytics and Speed Insights for performance monitoring.",
    },
    {
        id: 35,
        date: "October 06, 2025",
        title: "Add new features block",
        description: "Added a new features showcase block to the landing page.",
    },
    {
        id: 34,
        date: "October 05, 2025",
        title: "Add the spotlight variants",
        description: "Added additional variants for the spotlight component.",
    },
    {
        id: 33,
        date: "October 05, 2025",
        title: "Add AI input variants",
        description: "Added AI-themed input component variants to the registry.",
    },
    {
        id: 32,
        date: "October 05, 2025",
        title: "Add Open in V0 feature",
        description: "Added an 'Open in V0' button feature for components.",
    },
    {
        id: 31,
        date: "October 05, 2025",
        title: "Add the spotlight-card component",
        description: "Added the SpotlightCard component to the registry.",
    },
    {
        id: 30,
        date: "October 05, 2025",
        title: "Add the meta.json",
        description: "Added meta.json configuration file for the docs.",
    },
    {
        id: 29,
        date: "October 04, 2025",
        title: "Add the blocks in docs",
        description: "Added component blocks section to the documentation.",
    },
    {
        id: 28,
        date: "October 03, 2025",
        title: "Update the navbar",
        description: "Updated the site navbar with improvements.",
    },
    {
        id: 27,
        date: "October 03, 2025",
        title: "Add navigation_01 and navigation_02 in registry",
        description: "Added two new navigation components to the component registry.",
    },
    {
        id: 26,
        date: "October 02, 2025",
        title: "Delete pnpm-lock",
        description: "Removed the pnpm-lock file from the repository.",
    },
    {
        id: 25,
        date: "October 02, 2025",
        title: "Add framer-motion",
        description: "Added framer-motion as a dependency for animations.",
    },
    {
        id: 24,
        date: "October 02, 2025",
        title: "Fix the import bug",
        description: "Fixed an incorrect import that was causing errors.",
    },
    {
        id: 23,
        date: "October 02, 2025",
        title: "Fix the FumaDocs provider bugs",
        description: "Fixed bugs related to the FumaDocs documentation provider.",
    },
    {
        id: 22,
        date: "October 02, 2025",
        title: "Fix the bug and remove PostHog",
        description: "Fixed a bug and removed PostHog analytics integration.",
    },
    {
        id: 21,
        date: "October 02, 2025",
        title: "PostHog configurations",
        description: "Added PostHog analytics configuration to the project.",
    },
    {
        id: 20,
        date: "October 02, 2025",
        title: "Add Google Search Console meta tag",
        description: "Added the Google Search Console verification meta tag for SEO.",
    },
    {
        id: 19,
        date: "October 02, 2025",
        title: "Add logo and ahref script",
        description: "Added the site logo and the ahref analytics script.",
    },
    {
        id: 18,
        date: "October 01, 2025",
        title: "Fix the layout bugs",
        description: "Fixed various layout-related bugs across the project.",
    },
    {
        id: 17,
        date: "October 01, 2025",
        title: "Add the template page and new favicon",
        description: "Added a template browsing page and updated the site favicon.",
    },
    {
        id: 16,
        date: "September 30, 2025",
        title: "Add the readme.md",
        description: "Added the project README file with documentation and usage instructions.",
    },
    {
        id: 15,
        date: "September 30, 2025",
        title: "Fix the animated menubar component",
        description: "Fixed bugs in the animated menubar component.",
    },
    {
        id: 14,
        date: "September 30, 2025",
        title: "Add the HoverDepthCard component",
        description: "Added the HoverDepthCard component to the registry.",
    },
    {
        id: 13,
        date: "September 29, 2025",
        title: "Fix the bug",
        description: "General bug fix.",
    },
    {
        id: 12,
        date: "September 29, 2025",
        title: "Add the animated menu",
        description: "Added an animated menu component to the component library.",
    },
    {
        id: 11,
        date: "September 29, 2025",
        title: "Add new docs layout and BentoHoverEffect component",
        description: "Added a new documentation layout alongside the BentoHoverEffect component.",
    },
    {
        id: 10,
        date: "September 28, 2025",
        title: "Add buttons components",
        description: "Added a set of reusable button components to the registry.",
    },
    {
        id: 9,
        date: "September 28, 2025",
        title: "Add the fixed landing page",
        description: "A fixed and improved landing page design was added.",
    },
    {
        id: 8,
        date: "September 27, 2025",
        title: "Add the introduction docs",
        description: "Added the introduction documentation page to the project.",
    },
    {
        id: 7,
        date: "September 27, 2025",
        title: "Add the modern docs layout",
        description: "A modern layout for AHs Lab's docs using FumaDocs was added.",
    },
    {
        id: 6,
        date: "September 27, 2025",
        title: "Cli test",
        description: "Added command line interface (CLI) of shadcn/ui for fast and easy distribution.",
    },
    {
        id: 5,
        date: "September 26, 2025",
        title: "Add the typewriter effect and new landing page",
        description: "The first great looking component and a decent looking landing page was added in this project.",
        img_src:"/changelog/typewriter.png"
    },
    {
        id: 4,
        date: "September 25, 2025",
        title: "Fix the docs url",
        description: "Fixed the documentation URL path.",
    },
    {
        id: 3,
        date: "September 25, 2025",
        title: "Fix the url bug",
        description: "Fixed a bug related to incorrect URL routing.",
    },
    {
        id: 2,
        date: "September 25, 2025",
        title: "Add the basic docs with registry",
        description: "Added the basic documentation structure along with the component registry.",
    },
    {
        id: 1,
        date: "September 25, 2025",
        title: "Initial commit",
        description: "Initial project setup using Create Next App.",
    },
];