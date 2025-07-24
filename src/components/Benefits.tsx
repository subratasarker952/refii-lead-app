import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign, Clock, Shield, TrendingUp, CheckCircle, Award } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Save $47,000 on Average",
      description:
        "Our customers save an average of $47,000 over the life of their loan compared to their previous rate",
      stat: "$47K",
      statLabel: "Average Savings",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Clock,
      title: "5x Faster Than Traditional",
      description: "Complete your application in 5 minutes instead of hours of paperwork and multiple bank visits",
      stat: "5min",
      statLabel: "Application Time",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: TrendingUp,
      title: "Better Rates Guaranteed",
      description:
        "Banks compete to offer you their best rates. If we can't beat your current rate, we'll tell you upfront",
      stat: "0.3%",
      statLabel: "Lower on Average",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Shield,
      title: "100% Secure & Free",
      description: "Bank-level security, ASIC regulation, and no hidden fees. Your information is always protected",
      stat: "100%",
      statLabel: "Secure & Free",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const features = [
    "No hidden fees or charges",
    "ASIC regulated and compliant",
    "Bank-level security encryption",
    "Dedicated loan specialist support",
    "All major Australian lenders",
    "Investment and owner-occupied loans",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
            <Award className="w-3 h-3 mr-1" />
            Your Benefits
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why 25,000+ Australians Choose Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We don't just find you a better rate - we revolutionize how you get a home loan. Here's what makes us
            different.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div
                    className={`p-4 rounded-2xl ${benefit.bgColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{benefit.description}</p>
                    <div className="flex items-center gap-2">
                      <div className={`text-3xl font-bold ${benefit.color}`}>{benefit.stat}</div>
                      <div className="text-sm text-gray-500">{benefit.statLabel}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Features Checklist */}
        <Card className="border-0 shadow-lg bg-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Everything You Need, Nothing You Don't</h3>
              <p className="text-gray-600">Complete home loan service with full transparency</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9★</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-600 mb-2">25K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-600 mb-2">$2.1B+</div>
            <div className="text-gray-600">Total Savings</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-600 mb-2">40+</div>
            <div className="text-gray-600">Partner Lenders</div>
          </div>
        </div>
      </div>
    </section>
  )
}
