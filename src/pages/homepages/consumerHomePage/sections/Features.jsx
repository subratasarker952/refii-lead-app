import React from 'react'
import { TrendingUp, Clock, Shield, Users, Calculator, FileText, CheckCircle, Zap } from 'lucide-react'
import Badge from '../../../../components/ui/Badge'
import { Card, CardContent } from '../../../../components/ui/Card'

export default function Features() {
  const features = [
    {
      icon: TrendingUp,
      title: "Banks Compete For You",
      description: "Instead of shopping around, banks bid for your business with their best rates",
      badge: "Reverse Auction",
      color: "text-green-600",
    },
    {
      icon: Clock,
      title: "5-Minute Application",
      description: "Quick and simple application process. No lengthy paperwork or multiple meetings",
      badge: "Fast Process",
      color: "text-blue-600",
    },
    {
      icon: Shield,
      title: "100% Secure & Free",
      description: "Bank-level security with no hidden fees. Your information is always protected",
      badge: "ASIC Regulated",
      color: "text-purple-600",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated loan specialists guide you through every step of the process",
      badge: "Personal Service",
      color: "text-orange-600",
    },
    {
      icon: Calculator,
      title: "Transparent Savings",
      description: "See exactly how much you'll save with clear comparisons and no surprises",
      badge: "Clear Pricing",
      color: "text-teal-600",
    },
    {
      icon: FileText,
      title: "All Loan Types",
      description: "Home purchase, refinancing, investment properties - we handle it all",
      badge: "Complete Service",
      color: "text-red-600",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="success" className="mb-4 bg-blue-100 text-blue-800">
            <Zap className="w-3 h-3 mr-1" />
            Why Choose Home Online
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">The Smarter Way to Get a Home Loan</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've revolutionized the home loan process. Instead of you doing all the work, banks compete to offer you
            their best deals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl bg-gray-50 group-hover:bg-white transition-colors ${feature.color}`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {feature.badge}
                      </Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-green-600 font-semibold">
            <CheckCircle className="w-5 h-5" />
            <span>Join 25,000+ Australians who've already saved with Home Online</span>
          </div>
        </div>
      </div>
    </section>
  )
}
