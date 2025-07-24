import React, { useState } from "react"
import { ArrowRight, Star, Shield, Clock, DollarSign, Calculator } from "lucide-react"
import Badge from "./ui/Badge"
import Button from "./ui/Button"
import Input from "./ui/Input"

export default function Hero() {
  const [loanAmount, setLoanAmount] = useState("")

  const handleGetStarted = () => {
    // router.push("/signup?returnUrl=" + encodeURIComponent("/get-started"))
  }

  const handleCalculator = () => {
    // router.push("/signup?returnUrl=" + encodeURIComponent("/loan-calculator"))
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/hero-pattern.svg')] opacity-10"></div>

      <div className="container mx-auto px-4 py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Star className="w-3 h-3 mr-1" />
              4.9★ Rated • 25,000+ Happy Customers
            </Badge>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Banks Compete.
                <br />
                <span className="text-yellow-300">You Save.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Australia's simplest home loan platform. Get multiple offers in 5 minutes and save
                <span className="font-semibold text-yellow-300"> $47,000 on average</span>.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <Clock className="w-6 h-6 text-yellow-300" />
                <div>
                  <div className="font-semibold">5 Minutes</div>
                  <div className="text-sm text-blue-200">Application</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <DollarSign className="w-6 h-6 text-yellow-300" />
                <div>
                  <div className="font-semibold">$0 Fees</div>
                  <div className="text-sm text-blue-200">Completely Free</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <Shield className="w-6 h-6 text-yellow-300" />
                <div>
                  <div className="font-semibold">100% Secure</div>
                  <div className="text-sm text-blue-200">Bank-level Security</div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="number"
                    placeholder="Enter your loan amount (e.g. 600000)"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="h-14 text-lg bg-white/95 border-white/30 text-gray-900 placeholder:text-gray-500"
                  />
                </div>
                <Button
                  onClick={handleGetStarted}
                  size="lg"
                  className="h-14 px-8 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get My Offers
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>

              {/* Secondary CTA Button */}
              <div className="flex justify-center">
                <Button
                  onClick={handleCalculator}
                  variant="outline"
                  size="lg"
                  className="h-12 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Try Calculator
                </Button>
              </div>

              <p className="text-sm text-blue-200 text-center">
                ✓ No impact on credit score • ✓ Instant pre-approval • ✓ Compare 40+ lenders
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold">25K+</div>
                <div className="text-sm text-blue-200">Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">$2.1B+</div>
                <div className="text-sm text-blue-200">Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">40+</div>
                <div className="text-sm text-blue-200">Lenders</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative z-10 w-full max-w-lg">
              <img
                src="/images/hero-celebrating-woman.jpg"
                alt="Happy family celebrating home loan savings"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 bg-green-500 text-white p-4 rounded-xl shadow-lg z-20">
              <div className="text-2xl font-bold">$47K</div>
              <div className="text-sm">Average Savings</div>
            </div>

            <div className="absolute bottom-4 left-4 bg-white text-gray-900 p-4 rounded-xl shadow-lg z-20">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <div>
                  <div className="font-bold">4.9/5 Rating</div>
                  <div className="text-sm text-gray-600">Trustpilot</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12">
          <path d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
