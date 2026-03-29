import { cn } from '@/lib/utils';
import React from 'react';
import Navigation_03 from '../navigations/Navigation_03';
import { Button } from '@/components/ui/button';

const Herosection_01 = () => {
  return (
    <main>
      <Navigation_03 />
      <Container>
        {/* Hero text & CTA */}
        <div className={cn(
          "py-20 md:py-32 w-full flex flex-col items-center justify-center gap-5",
          "px-5 md:px-10 border-b border-accent"
        )}>
          <Banner />
          <h1 className={cn(
            "text-3xl md:text-6xl font-medium text-center",
            "leading-none tracking-tight",
            "max-w-3xl"
          )}>
            Build and scale your next idea with Tailark
          </h1>
          <p className={cn(
            "text-sm md:text-base text-muted-foreground text-center leading-relaxed text-balance",
            "max-w-2xl"
          )}>
            Tailark is a no-code platform that empowers you to build and scale your next idea with ease. Create stunning websites and apps without writing a single line of code.
          </p>
          <div className="flex items-center gap-3 mt-1">
            <Button
              variant="outline"
              className="text-sm font-medium cursor-pointer h-10 px-5 border-accent/80 hover:bg-accent/50 transition-all duration-150 active:scale-[0.98]"
            >
              Log In
            </Button>
            <Button
              className={cn(
                "text-sm font-medium text-white",
                "bg-[#514fd5] hover:bg-[#4340c0]",
                "shadow-sm shadow-[#514fd5]/30",
                "cursor-pointer h-10 px-5",
                "transition-all duration-150 active:scale-[0.98]"
              )}
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="px-10 relative">
          <Squares />
          <div className="border-x border-accent relative">
            <Squares />
            <HeroDashboard />
          </div>
        </div>

        <div className="h-10 border-t border-accent" />
      </Container>
    </main>
  );
};

/* ─── Dashboard hero image ─── */
const HeroDashboard = () => {
  return (
    <div className="w-full overflow-hidden bg-background">
      {/* Outer browser-chrome strip */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-accent/60 bg-accent/20">
        <span className="w-2.5 h-2.5 rounded-full bg-accent-foreground/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent-foreground/20" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent-foreground/20" />
        <div className="mx-auto flex items-center gap-1.5 bg-background border border-accent/60 rounded px-3 py-0.5 text-[10px] text-muted-foreground/60">
          ahs-lab.com/dashboard
        </div>
      </div>

      {/* App shell */}
      <div className="flex h-[460px] md:h-[520px] overflow-hidden">

        {/* Sidebar */}
        <aside className="hidden md:flex w-44 flex-col border-r border-accent/60 bg-background/80 py-4 flex-shrink-0">
          {/* Brand */}
          <div className="flex items-center gap-2 px-4 pb-4 mb-3 border-b border-accent/60">
            <div className="w-6 h-6 rounded-md bg-[#514fd5] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">A</div>
            <span className="text-xs font-semibold text-foreground">AHs Lab</span>
          </div>

          {/* Nav */}
          {[
            { label: "Dashboard", active: true, icon: <GridIcon /> },
            { label: "Analytics",  active: false, icon: <ChartIcon /> },
            { label: "AI Insights", active: false, icon: <SparkIcon /> },
            { label: "Predictions", active: false, icon: <BarIcon /> },
            { label: "Reports",    active: false, icon: <FileIcon /> },
            { label: "Customers",  active: false, icon: <UserIcon /> },
          ].map((item) => (
            <div
              key={item.label}
              className={cn(
                "flex items-center gap-2 px-4 py-1.5 text-[11px] mx-2 rounded-md",
                item.active
                  ? "bg-accent text-foreground font-medium"
                  : "text-muted-foreground"
              )}
            >
              {item.icon}
              {item.label}
            </div>
          ))}

          <p className="px-4 mt-4 mb-1 text-[9px] uppercase tracking-widest text-muted-foreground/40">Projects</p>
          {[
            { name: "ahs-lab.com", active: true },
            { name: "components.dev", active: false },
            { name: "ui.ahs.io", active: false },
          ].map((p) => (
            <div key={p.name} className="flex items-center gap-2 px-4 py-1 text-[11px] text-muted-foreground">
              <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", p.active ? "bg-[#514fd5]" : "bg-muted-foreground/30")} />
              {p.name}
            </div>
          ))}

          <div className="mt-auto px-4 pt-3 border-t border-accent/60">
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground py-1">
              <CogIcon />
              Settings
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          {/* Topbar */}
          <div className="flex items-center gap-2 px-5 py-2.5 border-b border-accent/60 bg-background/80">
            {["Revenue", "Last 30 days", "Daily"].map((label) => (
              <div key={label} className="flex items-center gap-1 text-[10px] text-muted-foreground border border-accent/60 rounded px-2.5 py-1">
                {label}
                <ChevronDown />
              </div>
            ))}
          </div>

          {/* Body */}
          <div className="flex-1 overflow-hidden p-5 flex flex-col gap-4">

            {/* Overview header */}
            <div>
              <p className="text-sm font-semibold text-foreground">Overview</p>
              <p className="text-[11px] text-muted-foreground">Your main activities data</p>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { label: "Total Balance",     value: "$23,056", frac: ".56", badge: "+65%", up: true },
                { label: "Orders",            value: "562",     frac: "",    badge: "",     up: true },
                { label: "Customers",         value: "456",     frac: "",    badge: "-5%",  up: false },
                { label: "Recurring Revenue", value: "$23,056", frac: ".56", badge: "+65%", up: true },
              ].map((s) => (
                <div key={s.label} className="bg-accent/30 border border-accent/60 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] text-muted-foreground">{s.label}</span>
                    {s.badge && (
                      <span className={cn(
                        "text-[9px] font-medium px-1.5 py-0.5 rounded",
                        s.up ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" : "bg-red-500/10 text-red-600 dark:text-red-400"
                      )}>
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-base font-semibold tracking-tight text-foreground">
                    {s.value}<span className="font-light text-muted-foreground/50">{s.frac}</span>
                  </p>
                </div>
              ))}
            </div>

            {/* Activity chart */}
            <div className="bg-accent/30 border border-accent/60 rounded-lg p-4 flex-1">
              <p className="text-[11px] font-medium text-foreground mb-0.5">Activity</p>
              <p className="text-[10px] text-muted-foreground mb-3">Visitors and page views</p>
              <ActivityChart />
            </div>

            {/* Insight cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                {
                  icon: <CheckCircleIcon />,
                  iconBg: "bg-[#514fd5]/10",
                  bold: "AI Insights:",
                  text: "Revenue increased 23% vs last month. Top products driving 65% of total sales.",
                  linkColor: "text-[#514fd5]",
                },
                {
                  icon: <AlertIcon />,
                  iconBg: "bg-red-500/10",
                  bold: "Critical:",
                  text: "Customer churn rate increased 12% this week. Immediate attention required.",
                  linkColor: "text-red-500",
                },
              ].map((c, i) => (
                <div key={i} className="bg-accent/30 border border-accent/60 rounded-lg p-3 flex gap-2.5">
                  <div className={cn("w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5", c.iconBg)}>
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">
                      <span className="font-medium text-foreground">{c.bold}</span> {c.text}
                    </p>
                    <span className={cn("text-[10px] mt-1 block", c.linkColor)}>View Details</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

/* ─── SVG Activity Chart ─── */
const ActivityChart = () => {
  const w = 600;
  const h = 70;
  const data1 = [20, 28, 24, 35, 42, 50, 58, 68, 75];
  const data2 = [14, 16, 15, 20, 23, 27, 32, 34, 36];
  const n = data1.length;

  const toPath = (data: number[]) => {
    const max = Math.max(...data1);
    const min = 10;
    const pts = data.map((v, i) => {
      const x = (i / (n - 1)) * w;
      const y = h - ((v - min) / (max - min)) * (h - 8) - 4;
      return [x, y] as [number, number];
    });
    return pts.reduce((acc, [x, y], i) => {
      if (i === 0) return `M${x},${y}`;
      const [px, py] = pts[i - 1];
      const cx = (px + x) / 2;
      return `${acc} C${cx},${py} ${cx},${y} ${x},${y}`;
    }, "");
  };

  const months = ["Dec 1", "Dec 5", "Dec 9", "Dec 13", "Dec 17", "Dec 21", "Dec 25", "Dec 29", "Dec 31"];

  return (
    <svg viewBox={`0 0 ${w} ${h + 16}`} className="w-full" preserveAspectRatio="none">
      <path d={toPath(data1)} fill="none" stroke="#514fd5" strokeWidth="1.5" />
      <path d={toPath(data2)} fill="none" stroke="currentColor" strokeWidth="1.2" className="text-muted-foreground/30" />
      {months.map((m, i) => (
        <text
          key={m}
          x={(i / (n - 1)) * w}
          y={h + 14}
          textAnchor="middle"
          fontSize="8"
          className="fill-muted-foreground/40"
        >
          {m}
        </text>
      ))}
    </svg>
  );
};

/* ─── Tiny icons ─── */
const GridIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
    <rect x="1" y="1" width="4" height="4" rx="1" fill="currentColor" />
    <rect x="7" y="1" width="4" height="4" rx="1" fill="currentColor" opacity=".4" />
    <rect x="1" y="7" width="4" height="4" rx="1" fill="currentColor" opacity=".4" />
    <rect x="7" y="7" width="4" height="4" rx="1" fill="currentColor" opacity=".4" />
  </svg>
);
const ChartIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
    <path d="M1 9 L4 6 L6 8 L9 4 L11 5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const SparkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
    <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M6 3.5v2.5l1.5 1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
);
const BarIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
    <path d="M2 10V7M5 10V4M8 10V6M11 10V2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);
const FileIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
    <rect x="2" y="1.5" width="8" height="9" rx="1" stroke="currentColor" strokeWidth="1.2" />
    <path d="M4 5h4M4 7.5h2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);
const UserIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
    <circle cx="6" cy="4.5" r="2.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M1 10.5c0-2.5 2.2-4 5-4s5 1.5 5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);
const CogIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="flex-shrink-0">
    <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.2" />
    <path d="M6 1v1.5M6 9.5V11M1 6h1.5M9.5 6H11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);
const ChevronDown = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <path d="M2 3l2 2 2-2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <circle cx="5.5" cy="5.5" r="4.5" stroke="#514fd5" strokeWidth="1.1" />
    <path d="M3.5 5.5l1.5 1.5 2.5-2.5" stroke="#514fd5" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const AlertIcon = () => (
  <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
    <circle cx="5.5" cy="5.5" r="4.5" stroke="#ef4444" strokeWidth="1.1" />
    <path d="M5.5 3v3M5.5 7.5v.5" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

/* ─── Shared components ─── */
const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    className={cn(
      "min-h-screen md:max-w-6xl mx-auto relative",
      "md:border-x border-accent/60",
      className
    )}
  >
    {children}
  </section>
);

const Banner = () => (
  <div className="p-1 bg-accent/50 rounded">
    <div className={cn(
      "py-1.5 px-4 w-fit bg-accent/60 rounded-full",
      "relative text-xs font-medium text-muted-foreground",
      "border border-accent hover:bg-accent transition-colors duration-150 cursor-default",
      "flex items-center gap-2"
    )}>
      <Dots />
      <span className="w-1.5 h-1.5 rounded-full bg-[#514fd5] inline-block flex-shrink-0" />
      Tailark raises $12M series B
    </div>
  </div>
);

const Squares = () => (
  <>
    <div className="h-[5px] w-[5px] bg-accent-foreground/30 absolute -top-[2.5px] -left-[2.5px]" />
    <div className="h-[5px] w-[5px] bg-accent-foreground/30 absolute -bottom-[2.5px] -left-[2.5px]" />
    <div className="h-[5px] w-[5px] bg-accent-foreground/30 absolute -top-[2.5px] -right-[2.5px]" />
    <div className="h-[5px] w-[5px] bg-accent-foreground/30 absolute -bottom-[2.5px] -right-[2.5px]" />
  </>
);

const Dots = () => (
  <>
    <div className="h-px w-px rounded-full bg-accent-foreground/30 absolute top-0 left-0" />
    <div className="h-px w-px rounded-full bg-accent-foreground/30 absolute bottom-0 left-0" />
    <div className="h-px w-px rounded-full bg-accent-foreground/30 absolute top-0 right-0" />
    <div className="h-px w-px rounded-full bg-accent-foreground/30 absolute bottom-0 right-0" />
  </>
);

export default Herosection_01;