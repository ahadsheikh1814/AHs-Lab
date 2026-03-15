import H1 from '@/components/typography/H1';
import P from '@/components/typography/P';
import { cn } from '@/lib/utils';
import React from 'react';
import { changelog_content,changelog_con_type } from '@/lib/changelog';

/** Group changelog entries by date so each date renders once on the left. */
function groupByDate(items: changelog_con_type[]) {
    const groups: { date: string; items: changelog_con_type[] }[] = [];
    for (const item of items) {
        const last = groups[groups.length - 1];
        if (last && last.date === item.date) {
            last.items.push(item);
        } else {
            groups.push({ date: item.date, items: [item] });
        }
    }
    return groups;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const DateBadge = ({ date, className }: { date: string; className?: string }) => (
    <span
        className={cn(
            'inline-block py-1 px-2.5 rounded-md bg-accent text-xs font-medium text-muted-foreground whitespace-nowrap',
            className,
        )}
    >
        {date}
    </span>
);

// ─── Page ─────────────────────────────────────────────────────────────────────

const Changelog = () => {
    const groups = groupByDate(changelog_content);

    return (
        <div className="min-h-screen">
            {/* Header */}
            <div className="md:px-10 px-5 py-20 border-b border-accent">
                <H1 className="mb-3">Changelog</H1>
                <P className="text-muted-foreground max-w-lg">
                    Updates, additions and improvements to AHs Lab — from new components and
                    templates to bug fixes and infrastructure changes.
                </P>
            </div>

            {/* Timeline */}
            <div className="md:px-10 px-5 max-w-5xl">
                {groups.map((group, gIdx) => (
                    <div
                        key={group.date}
                        className={cn(
                            'grid grid-cols-1 md:grid-cols-[200px_1fr] gap-0',
                            gIdx !== groups.length - 1 && 'mb-0',
                        )}
                    >
                        {/* Left: sticky date column */}
                        <div className="hidden md:flex flex-col items-start pt-8 pr-8 relative">
                            {/* Vertical timeline line */}
                            <div className="absolute right-0 top-0 bottom-0 w-px bg-border" />
                            {/* Dot on the line */}
                            <div className="absolute right-[-4.5px] top-[38px] w-2 h-2 rounded-full bg-muted-foreground/40 border border-accent" />
                            <DateBadge date={group.date} className="sticky top-8" />
                        </div>

                        {/* Right: entries for this date */}
                        <div className="pl-0">
                            {group.items.map((item, iIdx) => (
                                <div
                                    key={item.id}
                                    className={cn(
                                        'py-8',
                                        iIdx !== group.items.length - 1 && 'border-b border-accent',
                                    )}
                                >
                                    {/* Mobile-only date badge */}
                                    <div className="md:hidden mb-3">
                                        <DateBadge date={item.date} />
                                    </div>
                                    <div className='md:pl-10'>

                                    <h2 className="text-lg font-semibold tracking-tight mb-2">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                    </div>

                                    {item.img_src && (
                                        <div className="mt-4 rounded-lg overflow-hidden border border-accent md:ml-10">
                                            <img
                                                src={item.img_src}
                                                alt={item.title}
                                                className="w-full object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Changelog;

