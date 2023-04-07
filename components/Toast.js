import React from "react";

const style = {
  success: "bg-green-50 text-green-800",
  error: "bg-red-50 text-red-800",
};

export default function Toast({ variant, onClick, msg }) {
  return (
    <div className="animate-fade mb-4">
      {/* success-alert-message  */}
      <div className={`rounded-md bg-green-50 p-4 max-w-xl mx-auto ${style[variant]}`}>
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm font-medium ">{msg}</p>
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                onClick={onClick}
                type="button"
                className={`inline-flex rounded-md  p-1.5  outline-0 hover:opacity-50`}
              >
                <span className="sr-only">Dismiss</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
