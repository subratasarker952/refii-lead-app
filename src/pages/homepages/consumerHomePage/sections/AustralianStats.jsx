import React from 'react'
import { TrendingUp, DollarSign, Home, Users, MapPin, Calendar } from 'lucide-react'
import Badge from '../../../../components/ui/Badge'
import { Card, CardContent } from '../../../../components/ui/Card'


export default function AustralianStats() {
  const stats = [
    {
      icon: DollarSign,
      value: "$2.1B+",
      label: "Total Savings",
      description: "Saved by our customers",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Home,
      value: "25,000+",
      label: "Loans Processed",
      description: "Successful applications",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: TrendingUp,
      value: "0.3%",
      label: "Rate Reduction",
      description: "Average improvement",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Users,
      value: "98%",
      label: "Satisfaction",
      description: "Customer approval rating",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
  ]

  const locations = [
    { city: "Sydney", loans: "8,500+" },
    { city: "Melbourne", loans: "7,200+" },
    { city: "Brisbane", loans: "4,100+" },
    { city: "Perth", loans: "2,800+" },
    { city: "Adelaide", loans: "1,900+" },
    { city: "Canberra", loans: "500+" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="default" className="mb-4 bg-blue-100 text-blue-800">
            <MapPin className="w-3 h-3 mr-1" />
            Australia Wide
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Trusted Across Australia</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Sydney to Perth, Australians are saving thousands on their home loans with our revolutionary reverse
            auction platform.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${stat.bgColor} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Location Stats */}
        <Card className="border-0 shadow-lg bg-white">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Helping Australians Nationwide</h3>
              <p className="text-gray-600">Loans processed by major Australian cities</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {locations.map((location, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-gray-900">{location.city}</span>
                  </div>
                  <Badge variant="default" className="bg-blue-100 text-blue-800">
                    {location.loans}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Timeline */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-gray-600">
            <Calendar className="w-5 h-5" />
            <span>Serving Australian homeowners since 2019</span>
          </div>
        </div>
      </div>
    </section>
  )
}
