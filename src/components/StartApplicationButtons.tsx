"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calculator, FileText } from "lucide-react"
import { useRouter } from "next/navigation"

interface StartApplicationButtonsProps {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "default" | "lg"
  showCalculator?: boolean
  className?: string
}

export default function StartApplicationButtons({
  variant = "primary",
  size = "default",
  showCalculator = true,
  className = "",
}: StartApplicationButtonsProps) {
  const router = useRouter()

  const handleGetStarted = () => {
    router.push("/signup?returnUrl=" + encodeURIComponent("/get-started"))
  }

  const handleCalculator = () => {
    router.push("/signup?returnUrl=" + encodeURIComponent("/loan-calculator"))
  }

  const primaryButtonClass =
    variant === "primary"
      ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
      : variant === "secondary"
        ? "bg-yellow-400 hover:bg-yellow-500 text-gray-900"
        : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"

  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Button
        onClick={handleGetStarted}
        size={size}
        className={`${primaryButtonClass} font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
      >
        <FileText className="w-4 h-4 mr-2" />
        Start Application
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>

      {showCalculator && (
        <Button
          onClick={handleCalculator}
          variant="outline"
          size={size}
          className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
        >
          <Calculator className="w-4 h-4 mr-2" />
          Calculate Savings
        </Button>
      )}
    </div>
  )
}
