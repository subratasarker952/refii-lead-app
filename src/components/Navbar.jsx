import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { supabase } from "../lib/supabaseClient";
import HomeOnlineLogo from "./HomeOnlineLogo";

export default function Navbar() {
  const { user, setUser } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  const getInitial = () => {
    if (user?.email) return user.email[0].toUpperCase();
    return "?";
  };

  return (
    <nav className="bg-blue-600 border-b shadow-sm sticky top-0 z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">
          <HomeOnlineLogo/>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="">Home</Link>
          <Link to="/apply" className="">Apply</Link>
          {user && (
            <Link to="/admin" className="">Admin</Link>
          )}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4 relative">
          {!user ? (
            <>
              <Link to="/login" className="text-gray-600 hover:text-indigo-600 text-sm">Login</Link>
              <Link to="/signup" className="bg-indigo-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-indigo-700">Sign Up</Link>
            </>
          ) : (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 font-bold flex items-center justify-center"
              >
                {getInitial()}
              </button>
              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-fit bg-white border rounded-md shadow-lg py-2 z-50"
                  onMouseLeave={closeDropdown}
                >
                  <div className="px-4 py-2 text-sm text-gray-600 border-b">
                    {user.email}
                  </div>
                  <Link to="/dashboard" className="block px-4 py-2 text-sm hover:bg-gray-100 text-black">Dashboard</Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-700 hover:text-indigo-600">Home</Link>
          <Link to="/apply" className="block text-gray-700 hover:text-indigo-600">Apply</Link>
          {user && (
            <Link to="/admin" className="block text-gray-700 hover:text-indigo-600">Admin</Link>
          )}
          {!user ? (
            <>
              <Link to="/login" className="block text-gray-600 hover:text-indigo-600">Login</Link>
              <Link to="/signup" className="block text-indigo-600 hover:text-indigo-700">Sign Up</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="block text-gray-700 hover:text-indigo-600">Dashboard</Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left text-red-500 hover:text-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
