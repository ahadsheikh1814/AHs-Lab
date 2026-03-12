'use client'

import dynamic from "next/dynamic"
import { useState, useRef } from "react"
import type { OnMount } from "@monaco-editor/react"
import { useSandpack } from "@codesandbox/sandpack-react"
import Link from "next/link"
import type { editor as MonacoEditorType } from "monaco-editor"
import type * as MonacoType from "monaco-editor"

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false })
const SandpackProvider = dynamic(
  () => import("@codesandbox/sandpack-react").then((m) => m.SandpackProvider),
  { ssr: false }
)
const SandpackLayout = dynamic(
  () => import("@codesandbox/sandpack-react").then((m) => m.SandpackLayout),
  { ssr: false }
)
const SandpackPreview = dynamic(
  () => import("@codesandbox/sandpack-react").then((m) => m.SandpackPreview),
  { ssr: false }
)

const THEMES = ["dark", "light"] as const
type Theme = typeof THEMES[number]

const TAILWIND_BOOTSTRAP = `
const s = document.createElement('script')
s.src = 'https://cdn.tailwindcss.com'
document.head.appendChild(s)
`

const COMPONENT_CODE = `import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

const NavLinks = [
  { title: "Home", href: "/" },
  { title: "Projects", href: "/" },
  { title: "Docs", href: "/" },
  { title: "Blogs", href: "/" },
]

const NavFooterLinks = [
  { title: "Facebook", href: "/" },
  { title: "Twitter", href: "/" },
  { title: "Instagram", href: "/" },
  { title: "Github", href: "/" },
]

const PerspectiveText = ({ label }: { label: string }) => (
  <div className="w-full h-full justify-center items-center flex group">
    <p className="transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
      {label}
    </p>
    <p className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out translate-y-full group-hover:translate-y-0">
      {label}
    </p>
  </div>
)

const perspectiveVariants = {
  initial: { opacity: 0, rotateX: 90, y: 80, x: -20 },
  enter: (i: number) => ({
    opacity: 1, rotateX: 0, y: 0, x: 0,
    transition: { delay: 0.5 + i * 0.1, duration: 0.65, ease: [0.215, 0.61, 0.355, 1] },
  }),
  exit: { opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
}

const slideVariants = {
  initial: { opacity: 0, y: 20 },
  enter: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: 0.5 + i * 0.1, duration: 0.75, ease: [0.215, 0.61, 0.355, 1] },
  }),
  exit: { opacity: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
}

const Nav = () => (
  <nav className="h-full flex flex-col justify-between p-10 pb-8 box-border">
    <div className="mt-8">
      {NavLinks.map((item, i) => (
        <div key={i} style={{ perspective: "120px", perspectiveOrigin: "bottom" }}>
          <motion.div custom={i} variants={perspectiveVariants} animate="enter" exit="exit" initial="initial">
            <a href={item.href} className="text-black text-5xl font-semibold hover:opacity-60 transition-opacity block leading-tight">
              {item.title}
            </a>
          </motion.div>
        </div>
      ))}
    </div>
    <div className="flex flex-col gap-1">
      {NavFooterLinks.map((item, i) => (
        <motion.div key={i} custom={i} variants={slideVariants} animate="enter" exit="exit" initial="initial">
          <a href={item.href} className="text-black text-lg font-medium hover:opacity-60 transition-opacity block">
            {item.title}
          </a>
        </motion.div>
      ))}
    </div>
  </nav>
)

const Menu = ({ isActive }: { isActive: boolean }) => (
  <motion.div
    animate={isActive
      ? { width: 480, height: 650, top: -25, right: -25 }
      : { width: 100, height: 40, top: 0, right: 0, transition: { delay: 0.35 } }
    }
    transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
    className="bg-[#C9FD74] rounded-[25px] absolute"
    style={{ top: 0, right: 0 }}
  >
    <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
  </motion.div>
)

export default function Component() {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="min-h-screen bg-gray-950 relative">
      <div className="fixed top-[50px] right-[50px]" style={{ zIndex: 100 }}>
        <div className="relative" style={{ width: 100, height: 40 }}>
          <Menu isActive={isActive} />
          <div
            onClick={() => setIsActive(!isActive)}
            className="h-[40px] w-[100px] rounded-[25px] cursor-pointer absolute top-0 right-0 uppercase font-medium overflow-hidden"
            style={{ zIndex: 10 }}
          >
            <motion.div
              className="h-full w-full absolute top-0 left-0"
              animate={{ top: isActive ? "-100%" : "0%" }}
              transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="h-full w-full bg-[#C9FD74] flex items-center justify-center text-black text-sm font-semibold">
                <PerspectiveText label="Menu" />
              </div>
              <div className="h-full w-full flex items-center justify-center absolute bg-black text-white text-sm font-semibold" style={{ top: "100%" }}>
                <PerspectiveText label="Close" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
`

const APP_CODE = `import "./tailwind-setup"
import "./global.css"
import Component from "./component"

export default function App() {
  return <Component />
}
`

const GLOBAL_CSS = `body {
  margin: 0;
  background: #030712;
  color: white;
}`

const FILE_META: Record<string, { language: string; dot: string }> = {
  "/App.tsx": { language: "typescript", dot: "bg-yellow-400" },
  "/component.tsx": { language: "typescript", dot: "bg-yellow-400" },
  "/global.css": { language: "css", dot: "bg-blue-400" },
}

// ── All type stubs in one place ───────────────────────────────────────────────
const EXTRA_LIBS = [
  {
    // Makes React a global so JSX never complains about it being out of scope
    content: `
      declare global {
        namespace React {
          function createElement(type: any, props?: any, ...children: any[]): any
          const Fragment: any
        }
      }
      declare module "react" {
        export function useState<T>(init: T | (() => T)): [T, (v: T | ((p: T) => T)) => void]
        export function useEffect(fn: () => void | (() => void), deps?: any[]): void
        export function useRef<T = any>(init?: T): { current: T }
        export function useCallback<T extends (...a: any[]) => any>(fn: T, deps: any[]): T
        export function useMemo<T>(fn: () => T, deps: any[]): T
        export function useContext<T>(ctx: any): T
        export function useReducer<S, A>(reducer: (s: S, a: A) => S, init: S): [S, (a: A) => void]
        export function useLayoutEffect(fn: () => void | (() => void), deps?: any[]): void
        export function forwardRef<T, P = {}>(render: (props: P, ref: any) => any): any
        export function createContext<T>(defaultValue: T): any
        export const Fragment: any
        export type ReactNode = any
        export type ReactElement = any
        export type ComponentType<P = {}> = (props: P) => any
        export type FC<P = {}> = (props: P) => any
        export type PropsWithChildren<P = {}> = P & { children?: ReactNode }
        export type CSSProperties = Record<string, any>
        export type MouseEvent<T = Element> = any
        export type KeyboardEvent<T = Element> = any
        export type ChangeEvent<T = Element> = any
        export type FormEvent<T = Element> = any
        export type RefObject<T> = { current: T | null }
        export type MutableRefObject<T> = { current: T }
        export default any
      }
      declare module "react/jsx-runtime" {
        export function jsx(type: any, props: any, key?: any): any
        export function jsxs(type: any, props: any, key?: any): any
        export const Fragment: any
      }
      declare module "react/jsx-dev-runtime" {
        export function jsxDEV(type: any, props: any, key?: any): any
        export const Fragment: any
      }
    `,
    filePath: "file:///node_modules/@types/react/index.d.ts",
  },
  {
    content: `
      declare module "framer-motion" {
        import * as React from "react"
        type MotionProps = {
          animate?: any
          initial?: any
          exit?: any
          transition?: any
          variants?: any
          custom?: any
          whileHover?: any
          whileTap?: any
          whileFocus?: any
          whileDrag?: any
          whileInView?: any
          style?: React.CSSProperties
          className?: string
          onClick?: (e: any) => void
          onHoverStart?: (e: any) => void
          onHoverEnd?: (e: any) => void
          children?: React.ReactNode
          layout?: boolean | string
          layoutId?: string
          [key: string]: any
        }
        type MotionComponents = {
          [K in keyof JSX.IntrinsicElements]: React.ComponentType<MotionProps>
        }
        export const motion: MotionComponents & Record<string, React.ComponentType<MotionProps>>
        export const AnimatePresence: React.ComponentType<{
          children?: React.ReactNode
          mode?: "sync" | "wait" | "popLayout"
          initial?: boolean
          onExitComplete?: () => void
        }>
        export function useAnimation(): {
          start: (def: any) => Promise<any>
          stop: () => void
          set: (def: any) => void
        }
        export function useMotionValue(init: number): any
        export function useTransform(v: any, input: number[], output: any[]): any
        export function useSpring(v: any, config?: any): any
        export function useInView(ref: any, options?: any): boolean
        export function useScroll(options?: any): any
        export function useVelocity(v: any): any
        export function useCycle<T>(...items: T[]): [T, () => void]
      }
    `,
    filePath: "file:///node_modules/framer-motion/index.d.ts",
  },
  {
    // Stub JSX intrinsics so HTML elements don't show "no overload matches" errors
    content: `
      declare namespace JSX {
        interface Element {}
        interface IntrinsicElements {
          [elemName: string]: any
        }
        interface IntrinsicAttributes {
          key?: any
        }
      }
    `,
    filePath: "file:///jsx.d.ts",
  },
]

function EditorBridge({ theme, activeFile, files, onFileChange }: {
  theme: Theme
  activeFile: string
  files: Record<string, string>
  onFileChange: (path: string, value: string) => void
}) {
  const { sandpack } = useSandpack()
  const editorRef = useRef<MonacoEditorType.IStandaloneCodeEditor | null>(null)
  const monacoRef = useRef<typeof MonacoType | null>(null)

  const handleMount: OnMount = (editor, monaco) => {
    editorRef.current = editor
    monacoRef.current = monaco as typeof MonacoType

    // ── Compiler options ────────────────────────────────────────────────────
    monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
      target: monaco.languages.typescript.ScriptTarget.ESNext,
      allowNonTsExtensions: true,
      moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
      module: monaco.languages.typescript.ModuleKind.CommonJS,
      noEmit: true,
      esModuleInterop: true,
      allowSyntheticDefaultImports: true,
      allowJs: true,
      // Preserve: Monaco validates JSX syntax without trying to transform it,
      // so it never checks whether React is in scope → kills error 2874
      jsx: monaco.languages.typescript.JsxEmit.Preserve,
      lib: ["ESNext", "DOM", "DOM.Iterable"],
      strict: false,
      skipLibCheck: true,
    })

    // ── Suppress specific noisy diagnostic codes ────────────────────────────
    monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
      noSemanticValidation: false,
      noSyntaxValidation: false,
      diagnosticCodesToIgnore: [
        2874,  // JSX requires React in scope
        2307,  // Cannot find module 'x'
        2304,  // Cannot find name 'x'
        17004, // Cannot use JSX unless '--jsx' flag is provided
        7006,  // Parameter implicitly has 'any' type
        7031,  // Binding element implicitly has 'any' type
        2339,  // Property does not exist on type
        2345,  // Argument not assignable
      ],
    })

    // ── Register all type stubs ─────────────────────────────────────────────
    // Dispose old libs first to avoid duplicates on hot reload
    monaco.languages.typescript.typescriptDefaults.setExtraLibs(
      EXTRA_LIBS.map(({ content, filePath }) => ({ content, filePath }))
    )

    // ── Register all sandbox files as Monaco models ─────────────────────────
    // This gives cross-file IntelliSense (imports resolve between files)
    Object.entries(files).forEach(([path, code]) => {
      const uri = monaco.Uri.parse(`file://${path}`)
      const lang = path.endsWith(".css") ? "css" : "typescript"
      if (!monaco.editor.getModel(uri)) {
        monaco.editor.createModel(code, lang, uri)
      }
    })

    editor.focus()
  }

  const handleChange = (value: string | undefined) => {
    if (!value === undefined) return
    const v = value ?? ""
    onFileChange(activeFile, v)
    sandpack.updateFile(activeFile, v)

    // Keep the Monaco model for this file in sync so cross-file
    // IntelliSense reflects the latest content
    const m = monacoRef.current as typeof MonacoType
    const uri = m?.Uri.parse(`file://${activeFile}`)
    const model = uri && m?.editor.getModel(uri)
    if (model && model.getValue() !== v) model.setValue(v)
  }

  return (
    <MonacoEditor
      height="100%"
      language={FILE_META[activeFile]?.language ?? "typescript"}
      value={files[activeFile]}
      theme={theme === "dark" ? "vs-dark" : "vs"}
      onChange={handleChange}
      onMount={handleMount}
      path={`file://${activeFile}`}
      options={{
        fontSize: 13,
        fontFamily: "'Fira Code', 'Cascadia Code', 'Consolas', monospace",
        fontLigatures: true,
        minimap: { enabled: true },
        scrollBeyondLastLine: false,
        automaticLayout: true,
        tabSize: 2,
        wordWrap: "on",
        lineNumbers: "on",
        glyphMargin: true,
        folding: true,
        renderLineHighlight: "all",
        suggestOnTriggerCharacters: true,
        acceptSuggestionOnEnter: "on",
        quickSuggestions: { other: true, comments: true, strings: true },
        parameterHints: { enabled: true },
        hover: { enabled: true },
        formatOnPaste: true,
        formatOnType: true,
        snippetSuggestions: "top",
        suggest: {
          preview: true,
          showMethods: true,
          showFunctions: true,
          showConstructors: true,
          showFields: true,
          showVariables: true,
          showClasses: true,
          showModules: true,
          showProperties: true,
          showKeywords: true,
          showSnippets: true,
        },
        bracketPairColorization: { enabled: true },
        guides: { bracketPairs: true, indentation: true },
        smoothScrolling: true,
        cursorBlinking: "smooth",
        cursorSmoothCaretAnimation: "on",
        padding: { top: 16, bottom: 16 },
        scrollbar: {
          verticalScrollbarSize: 6,
          horizontalScrollbarSize: 6,
        },
      }}
    />
  )
}

function PlaygroundInner({ theme, activeFile, fileContents, onFileChange, onTabChange }: {
  theme: Theme
  activeFile: string
  fileContents: Record<string, string>
  onFileChange: (path: string, value: string) => void
  onTabChange: (path: string) => void
}) {
  return (
    <SandpackLayout style={{ flex: 1, height: "calc(100vh - 140px)" }}>
      <div className="flex flex-col" style={{ flex: 1, height: "100%" }}>

        {/* File tabs */}
        <div className="flex items-center border-b border-white/10 bg-[#1e1e1e]">
          {Object.keys(FILE_META).map((path) => {
            const name = path.replace("/", "")
            const isActive = activeFile === path
            return (
              <button
                key={path}
                onClick={() => onTabChange(path)}
                className={`px-4 py-2 text-xs border-r border-white/10 transition-colors flex items-center gap-2 ${isActive
                    ? "bg-[#1e1e1e] text-white border-t-2 border-t-[#00ff88]"
                    : "bg-[#2d2d2d] text-white/40 hover:text-white/70 hover:bg-[#252525]"
                  }`}
              >
                <span className={`w-2 h-2 rounded-full ${FILE_META[path].dot}`} />
                {name}
              </button>
            )
          })}
        </div>

        <div style={{ flex: 1 }}>
          <EditorBridge
            theme={theme}
            activeFile={activeFile}
            files={fileContents}
            onFileChange={onFileChange}
          />
        </div>
      </div>

      <SandpackPreview
        showRefreshButton
        showOpenInCodeSandbox={false}
        style={{ flex: 1, height: "100%" }}
      />
    </SandpackLayout>
  )
}

export default function PlayGround() {
  const [theme, setTheme] = useState<Theme>("dark")
  const [isLive, setIsLive] = useState(true)
  const [activeFile, setActiveFile] = useState("/App.tsx")
  const [fileContents, setFileContents] = useState<Record<string, string>>({
    "/App.tsx": APP_CODE,
    "/component.tsx": COMPONENT_CODE,
    "/global.css": GLOBAL_CSS,
  })

  const handleFileChange = (path: string, value: string) =>
    setFileContents(prev => ({ ...prev, [path]: value }))

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0f]">

      {/* Top Bar */}
      <div className="sticky top-0 z-50 h-[52px] px-6 flex items-center justify-between border-b border-white/10 bg-white/[0.02] backdrop-blur-md">
        <Link href={'/'} className="flex items-center gap-2">
          <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">AHS Lab</span>
          <span className="text-white/20">/</span>
          <span className="text-white/40 text-xs tracking-wider">playground</span>
        </Link>

        <div className="flex items-center gap-3">
          <div onClick={() => setIsLive(!isLive)} className="flex items-center gap-1.5 cursor-pointer group">
            <div className={`w-[7px] h-[7px] rounded-full transition-colors ${isLive ? "bg-emerald-400 animate-pulse" : "bg-red-500"}`} />
            <span className="text-[11px] tracking-widest text-white/40 group-hover:text-white/60 transition-colors">
              {isLive ? "LIVE" : "PAUSED"}
            </span>
          </div>
          <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-md px-1 py-[2px]">
            {THEMES.map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`px-2 py-[2px] text-[10px] rounded capitalize tracking-wider transition ${theme === t ? "bg-white/10 text-white" : "text-white/40 hover:text-white/70"
                  }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Playground */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 overflow-hidden border border-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.6),0_0_60px_rgba(0,255,136,0.03)] flex flex-col">
          <SandpackProvider
            theme={theme}
            template="react-ts"
            customSetup={{ dependencies: { "framer-motion": "latest" } }}
            files={{
              "/tailwind-setup.ts": { code: TAILWIND_BOOTSTRAP, hidden: true },
              "/global.css": { code: fileContents["/global.css"] },
              "/component.tsx": { code: fileContents["/component.tsx"] },
              "/App.tsx": { code: fileContents["/App.tsx"] },
            }}
            options={{
              visibleFiles: ["/App.tsx", "/component.tsx", "/global.css"],
              activeFile,
              autoReload: isLive,
            }}
          >
            <PlaygroundInner
              theme={theme}
              activeFile={activeFile}
              fileContents={fileContents}
              onFileChange={handleFileChange}
              onTabChange={setActiveFile}
            />
          </SandpackProvider>
        </div>
      </div>
    </div>
  )
}