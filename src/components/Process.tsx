import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Search, TrendingUp, CheckCircle, ArrowRight, Clock, Users, Award } from 'lucide-react'
import Link from "next/link"

export default function Process() {
  const steps = [
    {
      step: "01",
      icon: FileText,
      title: "Quick Application",
      description: "Complete our simple 5-minute application with your basic loan requirements",
      time: "5 minutes",
      color: "bg-blue-50 text-blue-600",
    },
    {
      step: "02",
      icon: Search,
      title: "Banks Review & Bid",
      description: "Our network of 40+ lenders review your application and compete with their best offers",
      time: "24-48 hours",
      color: "bg-green-50 text-green-600",
    },
    {
      step: "03",
      icon: TrendingUp,
      title: "Compare & Choose",
      description: "Review competing offers side-by-side and choose the loan that saves you the most",
      time: "Your choice",
      color: "bg-purple-50 text-purple-600",
    },
    {
      step: "04",
      icon: CheckCircle,
      title: "Settle & Save",
      description: "We handle the paperwork and settlement process. You just enjoy the savings",
      time: "30-45 days",
      color: "bg-orange-50 text-orange-600",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-green-100 text-green-800">
            <Award className="w-3 h-3 mr-1" />
            Simple Process
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our revolutionary reverse auction process puts you in control. Banks compete for your business, not the
            other way around.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-900 text-white font-bold text-lg mb-4">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.color} mb-4`}>
                    <step.icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>

                  {/* Time Badge */}
                  <Badge variant="outline" className="text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    {step.time}
                  </Badge>
                </CardContent>
              </Card>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">40+</div>
            <div className="text-gray-600">Competing Lenders</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">$47K</div>
            <div className="text-gray-600">Average Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">98%</div>
            <div className="text-gray-600">Customer Satisfaction</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/signup">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Start Your Application Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <p className="text-sm text-gray-500 mt-4">
            <Users className="w-4 h-4 inline mr-1" />
            Join 25,000+ Australians who've already saved
          </p>
        </div>
      </div>
    </section>
  )
}
