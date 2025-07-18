// Navbar.jsx
import React from "react";

export default function Navbar({ setIsAddNewUserClicked }) {
  return (
    <nav className="bg-gray-100  shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left spacer to center title */}
        <div className="w-10" />

        <h1 className="text-lg font-semibold text-gray-800 text-center flex-1">
          3W Business Assignment
        </h1>

        {/* Avatar */}
        <button
          className="bg-red-300 py-2 px-3"
          onClick={(e) => {
        
          
            setIsAddNewUserClicked(true);
          }}
        >
          Add User
        </button>
      </div>
    </nav>
  );
}
