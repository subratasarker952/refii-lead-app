"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Calculator, TrendingUp, DollarSign, ArrowRight, Home, Percent } from 'lucide-react'
import Link from "next/link"

export default function SavingsCalculator() {
  const [loanAmount, setLoanAmount] = useState([500000])
  const [currentRate, setCurrentRate] = useState([6.5])
  const [newRate, setNewRate] = useState([5.8])
  const [loanTerm, setLoanTerm] = useState([30])

  // Calculate monthly payments
  const calculateMonthlyPayment = (principal: number, rate: number, years: number) => {
    const monthlyRate = rate / 100 / 12
    const numPayments = years * 12
    return (
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1)
    )
  }

  const currentPayment = calculateMonthlyPayment(loanAmount[0], currentRate[0], loanTerm[0])
  const newPayment = calculateMonthlyPayment(loanAmount[0], newRate[0], loanTerm[0])
  const monthlySavings = currentPayment - newPayment
  const yearlySavings = monthlySavings * 12
  const totalSavings = monthlySavings * loanTerm[0] * 12

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
            <Calculator className="w-3 h-3 mr-1" />
            Savings Calculator
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">See How Much You Could Save</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Use our calculator to estimate your potential savings. Most customers save 0.3% or more on their interest
            rate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Calculator */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-blue-600" />
                Loan Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Loan Amount */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Home className="w-4 h-4" />
                    Loan Amount
                  </label>
                  <span className="text-lg font-semibold text-gray-900">${loanAmount[0].toLocaleString()}</span>
                </div>
                <Slider
                  value={loanAmount}
                  onValueChange={setLoanAmount}
                  max={2000000}
                  min={100000}
                  step={10000}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>$100K</span>
                  <span>$2M</span>
                </div>
              </div>

              {/* Current Rate */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Percent className="w-4 h-4" />
                    Current Rate
                  </label>
                  <span className="text-lg font-semibold text-gray-900">{currentRate[0].toFixed(2)}%</span>
                </div>
                <Slider
                  value={currentRate}
                  onValueChange={setCurrentRate}
                  max={8}
                  min={4}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>4.0%</span>
                  <span>8.0%</span>
                </div>
              </div>

              {/* New Rate */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Potential New Rate
                  </label>
                  <span className="text-lg font-semibold text-green-600">{newRate[0].toFixed(2)}%</span>
                </div>
                <Slider
                  value={newRate}
                  onValueChange={setNewRate}
                  max={currentRate[0]}
                  min={3}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>3.0%</span>
                  <span>{currentRate[0].toFixed(1)}%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-medium text-gray-700">Loan Term</label>
                  <span className="text-lg font-semibold text-gray-900">{loanTerm[0]} years</span>
                </div>
                <Slider value={loanTerm} onValueChange={setLoanTerm} max={30} min={10} step={5} className="w-full" />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>10 years</span>
                  <span>30 years</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            {/* Monthly Savings */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-green-100">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Monthly Savings</h3>
                    <p className="text-gray-600">Lower monthly repayments</p>
                  </div>
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">
                  ${Math.round(monthlySavings).toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">
                  ${Math.round(currentPayment).toLocaleString()} → ${Math.round(newPayment).toLocaleString()} per month
                </div>
              </CardContent>
            </Card>

            {/* Yearly Savings */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-blue-100">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Yearly Savings</h3>
                    <p className="text-gray-600">Annual interest savings</p>
                  </div>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  ${Math.round(yearlySavings).toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Save this much every year</div>
              </CardContent>
            </Card>

            {/* Total Savings */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-50 to-pink-50">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-purple-100">
                    <Calculator className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Total Savings</h3>
                    <p className="text-gray-600">Over {loanTerm[0]} year loan term</p>
                  </div>
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-4">
                  ${Math.round(totalSavings).toLocaleString()}
                </div>
                <Link href="/signup">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Start Your Application
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Disclaimer */}
            <div className="text-xs text-gray-500 bg-gray-50 p-4 rounded-lg">
              * This calculator provides estimates only. Actual savings may vary based on your individual circumstances,
              loan features, and lender criteria. All rates are subject to lender approval.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
