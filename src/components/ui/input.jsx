import React from 'react'

export function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full rounded-lg border border-gray-700 bg-gray-900/60 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
      {...props}
    />
  )
}
