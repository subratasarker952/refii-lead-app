import React from 'react'
import { Star, Quote, MapPin } from 'lucide-react'
import Badge from '../../../../components/ui/Badge'
import { Card, CardContent } from '../../../../components/ui/Card'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      location: "Sydney, NSW",
      image: "/images/testimonial-sarah.png",
      rating: 5,
      savings: "$52,000",
      quote:
        "I couldn't believe how easy it was. Instead of spending weeks visiting different banks, they all came to me with their best offers. Saved over $50k on my refinance!",
      loanType: "Refinance",
    },
    {
      name: "Mark Thompson",
      location: "Melbourne, VIC",
      image: "/images/testimonial-mark.png",
      rating: 5,
      savings: "$38,000",
      quote:
        "The reverse auction concept is brilliant. Banks were literally competing for my business. Got a rate I never would have found on my own.",
      loanType: "First Home",
    },
    {
      name: "James Wilson",
      location: "Brisbane, QLD",
      image: "/images/testimonial-james.png",
      rating: 5,
      savings: "$61,000",
      quote:
        "As an investor, I need the best rates possible. Home Online delivered exactly that - multiple banks bidding for my investment property loan.",
      loanType: "Investment",
    },
  ]

  const stats = [
    { value: "4.9★", label: "Average Rating" },
    { value: "98%", label: "Would Recommend" },
    { value: "$47K", label: "Average Savings" },
    { value: "25K+", label: "Happy Customers" },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="warning" className="mb-4 bg-yellow-100 text-yellow-800">
            <Star className="w-3 h-3 mr-1" />
            Customer Stories
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real Australians who've saved thousands with our reverse auction platform.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-blue-200 mb-4" />

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 leading-relaxed mb-6">"{testimonial.quote}"</blockquote>

                {/* Customer Info */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>

                {/* Savings & Loan Type */}
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50">
                    Saved {testimonial.savings}
                  </Badge>
                  <Badge variant="secondary">{testimonial.loanType}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>ASIC Regulated</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Bank-level Security</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>100% Free Service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
