import React, { useState } from 'react'


const Filter = () => {

    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      

 {/* Navigation Toggle */}
 <div className="lg:hidden py-16 text-center">
        <button
          type="button"
          className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-start bg-gray-800 border border-gray-800 text-white text-sm font-medium rounded-lg shadow-sm align-middle hover:bg-gray-950 focus:outline-none focus:bg-gray-900"
          onClick={() => setIsOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          Open
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 start-0 bottom-0 z-[60] w-64 h-full bg-white border-e border-gray-200 transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
        role="dialog"
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full max-h-full">
          {/* Header */}
          <header className="p-4 flex justify-between items-center gap-x-2">
            <a
              className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80"
              href="#"
              aria-label="Brand"
            >
              
            </a>

            <div className="lg:hidden -me-2">
              {/* Close Button */}
              <button
                type="button"
                className="flex justify-center items-center gap-x-3 size-6 bg-white border border-gray-200 text-sm text-gray-600 hover:bg-gray-100 rounded-full focus:outline-none focus:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                <svg className="shrink-0 size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" /><path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Close</span>
              </button>
              {/* End Close Button */}
            </div>
          </header>
          {/* End Header */}

          {/* Body */}
          <nav className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-gray-100 scrollbar-thumb-gray-300">
            <div className="pb-0 px-2 w-full flex flex-col flex-wrap">
              <ul className="space-y-1">
                <li>
                  <a className="flex items-center gap-x-3 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                    Dashboard
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" />
                    </svg>
                    Calendar <span className="ms-auto py-0.5 px-1.5 inline-flex items-center gap-x-1.5 text-xs bg-gray-200 text-gray-800 rounded-full">New</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-x-3 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100" href="#">
                    <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          {/* End Body */}
        </div>
      </div>












      
    </>
  )
}

export default Filter
