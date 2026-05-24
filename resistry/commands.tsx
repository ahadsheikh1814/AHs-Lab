import { cn } from '@/lib/utils';
import { Check, Copy, Terminal } from 'lucide-react';
import React, { useState } from 'react';

export const Command = ({ INSTALL_COMMAND , className }: { INSTALL_COMMAND: string ,className?:string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(INSTALL_COMMAND);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={cn(className,"flex items-center gap-3 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 px-3 py-2.5")}>
      <Terminal className="h-3.5 w-3.5 shrink-0 text-neutral-400 dark:text-neutral-500" />
      <code className="flex-1 text-xs text-neutral-600 dark:text-neutral-300 font-mono truncate">
        {INSTALL_COMMAND}
      </code>
      <button
        onClick={handleCopy}
        aria-label="Copy command"
        className={cn(
          "shrink-0 rounded p-1 transition-colors duration-150 cursor-pointer",
          copied
            ? "text-green-500"
            : "text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200"
        )}
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      </button>
    </div>
  );
};

type PackageManager = 'npm' | 'pnpm' | 'yarn' | 'bun';

const DEFAULT_COMMANDS: Record<PackageManager, (pkg: string) => string> = {
  npm:  (pkg) => `npm install ${pkg}`,
  pnpm: (pkg) => `pnpm add ${pkg}`,
  yarn: (pkg) => `yarn add ${pkg}`,
  bun:  (pkg) => `bun add ${pkg}`,
};

const TABS: PackageManager[] = ['npm', 'pnpm', 'yarn', 'bun'];

type MultiChoiceCommandProps =
  | { packageName: string; commands?: never }          // auto-generate from packageName
  | { commands: Record<PackageManager, string>; packageName?: never }; // explicit per-tab

export const MultiChoiceCommand = ({ packageName, commands }: MultiChoiceCommandProps) => {
  const [active, setActive] = useState<PackageManager>('npm');

  const getCommand = (pm: PackageManager) =>
    commands ? commands[pm] : DEFAULT_COMMANDS[pm](packageName!);

  return (
    <div className="mt-4 w-fit min-w-64 rounded-md border border-neutral-200 dark:border-neutral-800 overflow-hidden">
      <div className="flex border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-1">
        {TABS.map((pm) => (
          <button
            key={pm}
            onClick={() => setActive(pm)}
            className={cn(
              "px-3 py-1.5 text-xs font-mono transition-colors duration-150 border-b-2 -mb-px cursor-pointer",
              active === pm
                ? "border-neutral-800 dark:border-neutral-200 text-neutral-900 dark:text-neutral-100"
                : "border-transparent text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300"
            )}
          >
            {pm}
          </button>
        ))}
      </div>
      <div className="bg-neutral-50 dark:bg-neutral-900">
        <Command INSTALL_COMMAND={getCommand(active)} className="border-none" />
      </div>
    </div>
  );
};