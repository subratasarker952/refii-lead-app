import React from "react"
import { ArrowRight, CheckCircle, Star, TrendingUp } from "lucide-react"
import Hero from "./Hero"
// import Features from "./Features"
// import Process from "./Process"
// import Benefits from "./Benefits"
// import CompareLendersSection from "./CompareLendersSection"
// import AustralianStats from "./AustralianStats"
// import SavingsCalculator from "./SavingsCalculator"
// import Testimonials from "./Testimonials"
// import FAQ from "./FAQ"
import Button from "./ui/Button"

export default function ConsumerHomePage() {
  // const router = useRouter()

  const handleGetStarted = () => {
    // router.push("/signup?returnUrl=" + encodeURIComponent("/get-started"))
  }

  const handleCalculator = () => {
    // router.push("/signup?returnUrl=" + encodeURIComponent("/loan-calculator"))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Quick CTA Bar */}
      <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">Ready to save thousands on your home loan?</span>
            </div>
            <Button onClick={handleGetStarted} className="bg-white text-green-600 hover:bg-gray-100 font-semibold px-6">
              Start Application
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <Features /> */}

      {/* Process Section */}
      {/* <Process /> */}

      {/* Mid-page CTA Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Join 25,000+ Australians Who've Already Saved
            </h2>
            <p className="text-xl text-gray-600">
              Our customers save an average of $47,000 over the life of their loan. See what you could save in just 5
              minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
              >
                Get My Loan Offers
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                onClick={handleCalculator}
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg bg-transparent"
              >
                Calculate Savings
              </Button>
            </div>
            <div className="flex items-center justify-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-gray-600">4.9/5 on Trustpilot</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">$2.1B+ saved by customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      {/* <Benefits /> */}

      {/* Compare Lenders Section */}
      {/* <CompareLendersSection /> */}

      {/* Australian Stats */}
      {/* <AustralianStats /> */}

      {/* Savings Calculator */}
      {/* <SavingsCalculator /> */}

      {/* Another CTA Section */}
      {/* <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Ready to Start Saving?</h2>
            <p className="text-xl text-purple-100">
              It takes just 5 minutes to see how much you could save. No fees, no obligations, just better rates.
            </p>
            <div className="space-y-4">
              <Button
                onClick={handleGetStarted}
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 text-lg"
              >
                Start My Application
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-purple-200">
                ✓ 5-minute application • ✓ Instant pre-approval • ✓ No credit score impact
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <Testimonials /> */}

      {/* FAQ */}
      {/* <FAQ /> */}

      {/* Final CTA Section */}
      {/* <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">Don't Wait. Start Saving Today.</h2>
            <p className="text-xl text-gray-300">
              Every day you wait is money you're losing. Join thousands of Australians who've already switched to better
              rates.
            </p>
            <Button
              onClick={handleGetStarted}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section> */}

    </div>
  )
}
