export type changelog_con_type = {
    id: number;
    date: string;
    title: string;
    description: string;
    img_src?: string;
};

export const changelog_content: changelog_con_type[] = [
    {
        id: 51,
        date: "March 16, 2026",
        title: "Playground page gets a full UI overhaul",
        description:
            "The Playground page has been redesigned from the ground up with a cleaner layout, improved file tabs, and a navbar that matches the rest of AHs Lab. Experimenting with components is now faster and more intuitive.",
        img_src: "/changelog/templates.png",
    },
    {
        id: 50,
        date: "March 16, 2026",
        title: "Homepage redesigned with a modern layout",
        description:
            "The AHs Lab homepage has been refreshed with an improved hero section, component spotlight grid, and cleaner visual hierarchy — making it easier for developers to discover and install components.",
    },
    {
        id: 49,
        date: "March 15, 2026",
        title: "Templates page gets a cleaner browsing experience",
        description:
            "The Templates page has been redesigned with a better layout and improved card structure, making it easier to browse and preview available starter templates.",
    },
    {
        id: 48,
        date: "March 15, 2026",
        title: "Changelog page launched",
        description:
            "AHs Lab now has a dedicated Changelog page. Every update, new component, bug fix, and improvement will be tracked here so you always know what's new.",
        img_src: "/changelog/changelog.png",
    },
    {
        id: 47,
        date: "March 12, 2026",
        title: "Open Graph image added for better link previews",
        description:
            "AHs Lab now displays a rich preview image when shared on Twitter, LinkedIn, Slack, and other platforms — making links more recognizable and click-worthy.",
        img_src: "/og-image.png",
    },
    {
        id: 46,
        date: "March 12, 2026",
        title: "Playground added to the navbar",
        description:
            "The Playground page is now directly accessible from the main navbar, so you can jump straight into experimenting with components without hunting for the link.",
    },
    {
        id: 45,
        date: "March 12, 2026",
        title: "Playground page launched — experiment with components live",
        description:
            "The new Playground gives developers a live, in-browser environment to write, preview, and iterate on AHs Lab components with Monaco editor and instant hot reload.",
    },
    {
        id: 44,
        date: "February 27, 2026",
        title: "Security patch merged — React Server Components CVE fix",
        description:
            "The Vercel-generated pull request patching React Server Components CVE vulnerabilities has been reviewed and merged into the main branch.",
    },
    {
        id: 43,
        date: "February 24, 2026",
        title: "React Server Components CVE vulnerabilities patched",
        description:
            "Updated Next.js and React dependencies to address known React Server Components CVE security vulnerabilities. All users on the latest version are protected.",
    },
    {
        id: 42,
        date: "October 25, 2025",
        title: "AHs-UI-2 branch merged into main",
        description:
            "A large batch of improvements and additions from the AHs-UI-2 development branch have been merged into the main codebase.",
    },
    {
        id: 41,
        date: "October 25, 2025",
        title: "New template added to the library",
        description:
            "A new starter template has been added to the Templates section, giving developers another ready-to-use foundation for their next project.",
    },
    {
        id: 40,
        date: "October 17, 2025",
        title: "GitHub Actions CI/CD workflow added for Next.js",
        description:
            "A `nextjs.yml` GitHub Actions workflow has been added to automate building and deployment checks on every push and pull request.",
    },
    {
        id: 39,
        date: "October 11, 2025",
        title: "AHs Lab listed on Product Hunt",
        description:
            "AHs Lab is now featured on Product Hunt. A badge has been added to the landing page — support the project by upvoting and sharing it with the community.",
    },
    {
        id: 38,
        date: "October 10, 2025",
        title: "Landing page redesigned",
        description:
            "The landing page has been fully redesigned with a fresh layout, better component showcases, and a clearer value proposition for developers discovering AHs Lab for the first time.",
    },
    {
        id: 37,
        date: "October 07, 2025",
        title: "Bug fix — layout rendering issue resolved",
        description:
            "Fixed a rendering bug that was causing inconsistent layout behavior across certain pages.",
    },
    {
        id: 36,
        date: "October 07, 2025",
        title: "Vercel Analytics and Speed Insights integrated",
        description:
            "Vercel Web Analytics and Speed Insights have been added to monitor real-world performance, Core Web Vitals, and visitor data — helping guide future improvements.",
    },
    {
        id: 35,
        date: "October 06, 2025",
        title: "New features showcase block added to landing page",
        description:
            "A new 'Why Choose Us' features section has been added to the homepage, highlighting the key benefits of building with AHs Lab components.",
    },
    {
        id: 34,
        date: "October 05, 2025",
        title: "New variants added to the Spotlight component",
        description:
            "The Spotlight component now ships with additional style variants, giving you more flexibility to match it to your project's design language.",
    },
    {
        id: 33,
        date: "October 05, 2025",
        title: "AI Input variants added to the registry",
        description:
            "New AI-styled input field variants have been added — perfect for chat interfaces, prompt builders, and AI-powered applications.",
    },
    {
        id: 32,
        date: "October 05, 2025",
        title: "Open in V0 button added to component pages",
        description:
            "Every component page now features an 'Open in V0' button, letting you instantly open and remix any AHs Lab component directly in Vercel's v0 editor.",
    },
    {
        id: 31,
        date: "October 05, 2025",
        title: "SpotlightCard component released",
        description:
            "The SpotlightCard component is now available in the registry. It features a glowing spotlight that follows your cursor across the card surface, creating a premium interactive feel.",
    },
    {
        id: 30,
        date: "October 05, 2025",
        title: "meta.json added for component registry",
        description:
            "A `meta.json` configuration file has been added to the docs registry, improving how component metadata is structured and served.",
    },
    {
        id: 29,
        date: "October 04, 2025",
        title: "UI Blocks section added to the docs",
        description:
            "The documentation now includes a dedicated Blocks section, featuring larger pre-built layout sections like navbars and feature grids that you can drop directly into your project.",
    },
    {
        id: 28,
        date: "October 03, 2025",
        title: "Navbar updated with improved design",
        description:
            "The site navbar has been updated with a cleaner layout, better mobile handling, and improved link visibility across light and dark modes.",
    },
    {
        id: 27,
        date: "October 03, 2025",
        title: "Navigation_01 and Navigation_02 blocks added to the registry",
        description:
            "Two new navbar blocks — a simple minimal navbar and a modern responsive navbar — are now available in the registry and docs.",
    },
    {
        id: 26,
        date: "October 02, 2025",
        title: "pnpm-lock file removed from repository",
        description:
            "The `pnpm-lock.yaml` file has been removed to keep the repository cleaner and avoid lockfile conflicts for contributors using different package managers.",
    },
    {
        id: 25,
        date: "October 02, 2025",
        title: "Framer Motion added as a core dependency",
        description:
            "Framer Motion has been added as a dependency, powering all animation-heavy components across the AHs Lab registry going forward.",
    },
    {
        id: 24,
        date: "October 02, 2025",
        title: "Import path bug fixed",
        description:
            "Fixed an incorrect module import that was causing build errors for users installing components via the registry.",
    },
    {
        id: 23,
        date: "October 02, 2025",
        title: "FumaDocs provider bugs resolved",
        description:
            "Fixed several issues with the FumaDocs documentation provider that were causing broken page navigation and incorrect content rendering in the docs.",
    },
    {
        id: 22,
        date: "October 02, 2025",
        title: "Bug fix and PostHog analytics removed",
        description:
            "Fixed a runtime bug affecting page load. PostHog analytics has also been removed to reduce third-party script overhead.",
    },
    {
        id: 21,
        date: "October 02, 2025",
        title: "PostHog analytics configured",
        description:
            "PostHog was integrated for product analytics to better understand how developers interact with the docs and component pages.",
    },
    {
        id: 20,
        date: "October 02, 2025",
        title: "Google Search Console verification added",
        description:
            "The Google Search Console meta verification tag has been added to improve AHs Lab's SEO visibility and allow search performance monitoring.",
    },
    {
        id: 19,
        date: "October 02, 2025",
        title: "Site logo and Ahrefs analytics script added",
        description:
            "The AHs Lab logo has been added to the site header, and the Ahrefs analytics script has been integrated for SEO tracking.",
    },
    {
        id: 18,
        date: "October 01, 2025",
        title: "Layout bugs fixed across multiple pages",
        description:
            "Resolved several layout issues causing misaligned sections and broken padding on mobile and desktop viewports.",
    },
    {
        id: 17,
        date: "October 01, 2025",
        title: "Templates page and new favicon added",
        description:
            "The Templates browsing page is now live, and the site has a new favicon that better represents the AHs Lab brand.",
    },
    {
        id: 16,
        date: "September 30, 2025",
        title: "README added to the repository",
        description:
            "A comprehensive README file has been added to the project repository, covering installation, usage, and contributing guidelines.",
    },
    {
        id: 15,
        date: "September 30, 2025",
        title: "Animated Menubar component bug fixed",
        description:
            "Fixed several animation timing and state bugs in the Animated Menubar component that were causing visual glitches on first render.",
    },
    {
        id: 14,
        date: "September 30, 2025",
        title: "HoverDepthCard component released",
        description:
            "The HoverDepthCard component is now in the registry. It applies a smooth 3D parallax depth effect on hover, great for image cards, profile cards, and product showcases.",
    },
    {
        id: 13,
        date: "September 29, 2025",
        title: "Bug fix — component render error resolved",
        description:
            "Fixed a component render error that was intermittently breaking the docs page on certain browsers.",
    },
    {
        id: 12,
        date: "September 29, 2025",
        title: "Animated Menu component added",
        description:
            "A new animated menu component has been added to the library, featuring smooth entrance and exit transitions powered by Framer Motion.",
    },
    {
        id: 11,
        date: "September 29, 2025",
        title: "New docs layout and BentoHoverEffect component released",
        description:
            "The documentation has a new cleaner layout, and the BentoHoverEffect component is now available — bringing magnetic spotlight hover effects to bento-style grid layouts.",
    },
    {
        id: 10,
        date: "September 28, 2025",
        title: "Button component collection added to the registry",
        description:
            "A full set of reusable button components is now available, including primary, outline, ghost, and destructive variants — all styled with Tailwind and Shadcn.",
    },
    {
        id: 9,
        date: "September 28, 2025",
        title: "Landing page redesigned and stabilized",
        description:
            "The landing page has been rebuilt with a fixed, stable layout after earlier structural issues — featuring a cleaner hero, better spacing, and improved responsiveness.",
    },
    {
        id: 8,
        date: "September 27, 2025",
        title: "Introduction documentation page added",
        description:
            "The docs now have a proper Introduction page covering project setup, dependencies, and how to install your first AHs Lab component.",
    },
    {
        id: 7,
        date: "September 27, 2025",
        title: "Modern documentation layout built with FumaDocs",
        description:
            "AHs Lab's documentation has been rebuilt using FumaDocs, giving it a fast, searchable, and developer-friendly layout with sidebar navigation.",
    },
    {
        id: 6,
        date: "September 27, 2025",
        title: "Shadcn CLI distribution enabled",
        description:
            "Components can now be installed directly via the Shadcn CLI using `npx shadcn@latest add`, making it effortless to drop any AHs Lab component into your Next.js project.",
    },
    {
        id: 5,
        date: "September 26, 2025",
        title: "TypeWriter Effect component released — first major component",
        description:
            "The TypeWriter Effect component has been added to the registry — the first polished, production-ready component in AHs Lab. A new landing page design also shipped alongside it.",
        img_src: "/changelog/typewriter.png",
    },
    {
        id: 4,
        date: "September 25, 2025",
        title: "Documentation URL path corrected",
        description:
            "Fixed an incorrect URL path that was sending users to a 404 page when navigating to the documentation.",
    },
    {
        id: 3,
        date: "September 25, 2025",
        title: "URL routing bug fixed",
        description:
            "Resolved a routing bug that was causing certain internal links to point to the wrong page.",
    },
    {
        id: 2,
        date: "September 25, 2025",
        title: "Documentation structure and component registry set up",
        description:
            "The foundational documentation structure has been created alongside the component registry, establishing the core architecture that all future components will be built on.",
    },
    {
        id: 1,
        date: "September 25, 2025",
        title: "AHs Lab is live — initial commit",
        description:
            "AHs Lab officially starts here. The project was bootstrapped with Create Next App as the foundation for a growing library of animated, production-ready Shadcn UI components.",
    },
];