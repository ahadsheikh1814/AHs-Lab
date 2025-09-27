export interface NavItem {
    id: string | number;
    title: string;
    href: string;
    description?: string;
    count?: number | string;
    isComingSoon?: boolean;
    isNew?: boolean;
    isLab?: boolean;
}

export interface NavSection {
    title: string;
    items: NavItem[];
}

export const navigationSections: NavSection[] = [
    {
        title: "Getting Started",
        items: [
            {
                id: "intro",
                title: "Installation",
                href: "/docs",
                description: "Introduction and usage guidelines",
            },
        ],
    },
    {
        title: "Components",
        items: [
            {
                id: 1,
                title: "AI-Input",
                href: "/docs/components/ai-input",
                description: "Modern AI chat interface components",
                count: 16,
            },
            {
                id: 2,
                title: "TypeWriter Effect",
                href: "/docs/components/typewriter-effet",
                description: "A typewriter effect component for displaying animated text.",
                count: 15,
                isNew:true,
            },
        ],
    },
    {
        title: "Hooks",
        items: [
            // {
            //     id: 1,
            //     title: "useAutoResizeTextarea",
            //     href: "/docs/hooks/useAutoResizeTextarea",
            // },
        ],
    },
    {
        title: "Blocks",
        items: [
            // {
            //     id: 1,
            //     title: "Block - 01",
            //     href: "/docs/components/block",
            //     isLab: true,
            // },
        ],
    },
];