import React, { useState } from "react";
import { useProduct } from "../contexts/ProductContext";
import { Link, NavLink, Outlet } from "react-router-dom";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data = [], setShowCategory , showCategory} = useProduct();
  const categories = [...new Set(data.map((p) => p.category))];

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

          {/* End Header */}

          {/* Body */}
          <nav className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-gray-100 scrollbar-thumb-gray-300">
            <div className="pb-0 px-2 w-full flex flex-col flex-wrap">
              <ul className="space-y-1">
                {categories.map((category) => (
                  <NavLink to={`/category/${category}`}>
                    <div
                      className="flex items-center gap-x-3 py-2 px-2.5 bg-gray-100 text-sm text-gray-700 rounded-lg hover:bg-gray-100"
                      key={category}
                      onClick={() => setShowCategory(true)}
                    >
                  
                      <svg
                        className="size-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      {category}
                    </div>
                  </NavLink>
                ))}
              </ul>
            </div>
          </nav>
          {/* End Body */}
        </div>
      </div>
    </>
  );
};

export default SideBar;
