
import React from 'react'
import { Building2, TrendingUp, Users, Award, ArrowRight, CheckCircle, Link } from 'lucide-react'
import Badge from '../../../../components/ui/Badge'
import { Card, CardContent } from '../../../../components/ui/Card'
import Button from '../../../../components/ui/Button'


export default function CompareLendersSection() {
  const lenders = [
    { name: "Westpac", logo: "W", color: "bg-red-500" },
    { name: "Commonwealth Bank", logo: "C", color: "bg-yellow-500" },
    { name: "ANZ", logo: "A", color: "bg-blue-500" },
    { name: "NAB", logo: "N", color: "bg-red-600" },
    { name: "Macquarie", logo: "M", color: "bg-green-600" },
    { name: "ING", logo: "I", color: "bg-orange-500" },
    { name: "Suncorp", logo: "S", color: "bg-yellow-600" },
    { name: "Bendigo", logo: "B", color: "bg-purple-600" },
  ]

  const stats = [
    {
      icon: Building2,
      value: "40+",
      label: "Partner Lenders",
      description: "Major banks and specialist lenders",
    },
    {
      icon: TrendingUp,
      value: "0.3%",
      label: "Lower Rates",
      description: "Average rate improvement",
    },
    {
      icon: Users,
      value: "25K+",
      label: "Customers",
      description: "Australians who've saved",
    },
    {
      icon: Award,
      value: "4.9★",
      label: "Rating",
      description: "Customer satisfaction score",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="success" className="mb-4 bg-green-100 text-green-800">
            <Building2 className="w-3 h-3 mr-1" />
            Lender Network
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">40+ Lenders Compete For Your Business</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with Australia's major banks and specialist lenders. They compete to offer you their best rates and
            terms.
          </p>
        </div>

        {/* Lender Logos */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            {lenders.map((lender, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-gray-50 rounded-lg px-4 py-3 hover:bg-gray-100 transition-colors"
              >
                <div
                  className={`w-10 h-10 rounded-full ${lender.color} flex items-center justify-center text-white font-bold`}
                >
                  {lender.logo}
                </div>
                <span className="font-medium text-gray-700">{lender.name}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Badge variant="success" className="text-sm">
              + 32 more specialist lenders
            </Badge>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg text-center">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-50 text-blue-600 mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="font-semibold text-gray-700 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-green-50">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">How Our Reverse Auction Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">You Apply Once</div>
                      <div className="text-gray-600">
                        Complete one simple application instead of visiting multiple banks
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">Banks Compete</div>
                      <div className="text-gray-600">
                        Lenders review your application and bid with their best offers
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900">You Choose</div>
                      <div className="text-gray-600">Compare offers side-by-side and select the best deal for you</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center lg:text-right">
                <div className="inline-block bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">$47,000</div>
                  <div className="text-gray-600 mb-4">Average customer savings</div>
                  <Link to="/signup">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Start Saving Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
