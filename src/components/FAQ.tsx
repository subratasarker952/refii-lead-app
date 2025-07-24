"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, HelpCircle, Shield, Clock, DollarSign, Users, Phone } from "lucide-react"
import Link from "next/link"

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([0])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "How does the reverse auction process work?",
      answer:
        "Instead of you applying to multiple banks, you submit one application to us. We then share your details with our network of 40+ lenders who compete by submitting their best offers. You review all offers side-by-side and choose the one that works best for you.",
    },
    {
      question: "Is Home Online really free? Are there any hidden costs?",
      answer:
        "Yes, our service is completely free for borrowers. We're paid a commission by the lender you choose, similar to a traditional mortgage broker. There are no application fees, no setup costs, and no hidden charges for you.",
    },
    {
      question: "How much can I actually save on my home loan?",
      answer:
        "Our customers save an average of $47,000 over the life of their loan. The exact amount depends on your loan size, current rate, and the offers we receive. Most customers see rate improvements of 0.3% or more.",
    },
    {
      question: "Which lenders are part of your network?",
      answer:
        "We work with 40+ lenders including all major Australian banks (CBA, Westpac, ANZ, NAB), regional banks, credit unions, and specialist lenders. This gives you access to a wide range of loan products and competitive rates.",
    },
    {
      question: "How long does the process take?",
      answer:
        "The application takes just 5 minutes. Banks typically respond with offers within 24-48 hours. Once you choose a lender, the settlement process usually takes 30-45 days, similar to any home loan.",
    },
    {
      question: "Is my personal information secure?",
      answer:
        "Absolutely. We use bank-level encryption and security measures. We're ASIC regulated and only share your information with lenders in our approved network. Your data is never sold or shared with third parties.",
    },
    {
      question: "What types of loans do you handle?",
      answer:
        "We handle all types of home loans including refinancing, first home purchases, investment properties, construction loans, and commercial properties. Whether you're an owner-occupier or investor, we can help.",
    },
    {
      question: "Do I have to accept any of the offers?",
      answer:
        "No, you're under no obligation to accept any offer. If none of the offers meet your expectations or beat your current rate, you can simply walk away. We'll tell you upfront if we can't help you save money.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 bg-blue-100 text-blue-800">
            <HelpCircle className="w-3 h-3 mr-1" />
            Frequently Asked Questions
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Got Questions? We've Got Answers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about our reverse auction process and how we help you save on your home loan.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="border border-gray-200 hover:border-blue-200 transition-colors">
                  <CardContent className="p-0">
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      {openItems.includes(index) ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {openItems.includes(index) && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">100% Secure</div>
                      <div className="text-sm text-gray-600">ASIC regulated</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-semibold text-gray-900">5 Minutes</div>
                      <div className="text-sm text-gray-600">Application time</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-semibold text-gray-900">$47K Average</div>
                      <div className="text-sm text-gray-600">Customer savings</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-semibold text-gray-900">25,000+</div>
                      <div className="text-sm text-gray-600">Happy customers</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Still Have Questions?</h3>
                <p className="text-gray-600 mb-4">Speak with one of our loan specialists</p>
                <div className="space-y-3">
                  <Link href="tel:1300466366">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Call 1300 HOME ON</Button>
                  </Link>
                  <Link href="/support">
                    <Button variant="outline" className="w-full bg-transparent">
                      Live Chat Support
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Trust Badges */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>ASIC Regulated</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Bank-level Security</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>100% Free Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
