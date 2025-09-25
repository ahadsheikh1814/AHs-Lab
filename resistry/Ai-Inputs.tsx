import React from 'react';

const AiInput: React.FC = () => {
  return (
    <div className="p-4 min-w-full">
      <div className="relative">
        <div className="relative flex flex-col border border-white/10 rounded-xl bg-sidebar-primary-foreground dark:bg-black">
          <div className="overflow-y-auto">
            <textarea
              rows={3}
              style={{ overflow: "hidden", outline: "none" }}
              className="w-full px-4 py-3 resize-none bg-transparent border-none focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-white/50 align-top leading-normal min-h-[80px] text-white"
              placeholder="Ask me anything..."
            />
          </div>
          <div className="h-14">
            <div className="absolute left-3 right-3 bottom-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  className="p-2 text-white/50 hover:text-white transition-colors rounded-lg border border-white/10 hover:border-white/20"
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
                <button
                  className="p-2 text-white/50 hover:text-white transition-colors rounded-lg border border-white/10 hover:border-white/20"
                  aria-label="Attach web link"
                  type="button"
                >
                  <svg
                    className="w-4 h-4 text-blue-500"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle r="10" cy="12" cx="12" />
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                    <path d="M2 12h20" />
                  </svg>
                </button>
                <button
                  className="p-2 text-white/50 hover:text-white transition-colors rounded-lg border border-white/10 hover:border-white/20"
                  aria-label="Attach Figma link"
                  type="button"
                >
                  <svg
                    className="w-4 h-4 text-pink-500"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                  </svg>
                </button>
              </div>
              <button
                className="p-2 transition-colors text-blue-500"
                aria-label="Send message"
                type="button"
              >
                <svg
                  className="w-6 h-6"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle r="10" cy="12" cx="12" />
                  <path d="m16 12-4-4-4 4" />
                  <path d="M12 16V8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiInput;