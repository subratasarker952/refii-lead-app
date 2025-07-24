import React from "react"

const HomeOnlineLogo = ({ className = "h-8 w-auto" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
        Refii
      </div>
    </div>
  )
}

export default HomeOnlineLogo
