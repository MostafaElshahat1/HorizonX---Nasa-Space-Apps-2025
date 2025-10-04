import * as React from "react";


export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`rounded-xl border border-gray-800 bg-gray-900 shadow-lg overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}


export function CardHeader({ className = "", children }) {
  return (
    <div className={`p-4 border-b border-gray-800 ${className}`}>
      {children}
    </div>
  );
}


export function CardTitle({ className = "", children }) {
  return (
    <h3 className={`text-xl font-semibold text-white ${className}`}>
      {children}
    </h3>
  );
}


export function CardContent({ className = "", children }) {
  return (
    <div className={`p-4 text-gray-300 ${className}`}>{children}</div>
  );
}
