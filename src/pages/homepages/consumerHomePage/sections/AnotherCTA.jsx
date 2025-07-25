import React from 'react'
import Button from '../../../../components/ui/Button'
import { ArrowRight } from 'lucide-react'

const AnotherCTA = () => {
    const handleGetStarted = () => {
        // router.push("/signup?returnUrl=" + encodeURIComponent("/get-started"))
    }
    return (
        <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
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
        </section>
    )
}

export default AnotherCTA
