import type React from "react"

const AiInputPill: React.FC = () => {
  return (
    <div className="p-4 w-3xl">
      <div className="relative">
        <div className="relative flex items-center gap-3 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-5 py-3 shadow-sm">
          <button
            className="p-1.5 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Attach file"
            type="button"
          >
            <svg
              className="w-4 h-4"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
          </button>
          <input
            type="text"
            className="flex-1 bg-transparent border-none focus:outline-none focus-visible:ring-0 placeholder:text-neutral-400 text-neutral-900 dark:text-white"
            placeholder="Message AI..."
          />
          <button
            className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
            aria-label="Send message"
            type="button"
          >
            <svg
              className="w-4 h-4"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path d="m5 12 7-7 7 7" />
              <path d="M12 19V5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default AiInputPill
