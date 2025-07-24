"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import HomeOnlineLogo from "./HomeOnlineLogo"
import { supabase } from "../lib/supabaseClient"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
    }
    fetchUser()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = "/login"
  }

  return (
    <header className="bg-blue-600 sticky top-0 z-50 border-b border-blue-700">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <HomeOnlineLogo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          {user ? (
            <div className="relative">
              <Button
                variant="ghost"
                className="text-white"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {user.email}
              </Button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</Link>
                  <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
                  <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" className="text-white">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-white text-blue-600 hover:bg-blue-100">Get Started</Button>
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-600 text-white">
          {user ? (
            <>
              <Link href="/dashboard" className="block px-2 py-1">Dashboard</Link>
              <Link href="/profile" className="block px-2 py-1">Profile</Link>
              <button onClick={handleLogout} className="block w-full text-left px-2 py-1">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" className="block px-2 py-1">Sign In</Link>
              <Link href="/signup" className="block px-2 py-1">Get Started</Link>
            </>
          )}
        </div>
      )}
    </header>
  )
}
