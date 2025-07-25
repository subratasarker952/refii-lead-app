import React from 'react'
import Button from '../../../../components/ui/Button'
import { ArrowRight } from 'lucide-react'

const FinalCTA = () => {
    const handleGetStarted = () => {
        // router.push("/signup?returnUrl=" + encodeURIComponent("/get-started"))
    }

    return (
        <section className="bg-gray-900 text-white py-16">
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
        </section>
    )
}

export default FinalCTA
