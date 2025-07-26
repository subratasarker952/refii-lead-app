import { ArrowRight } from "lucide-react"
import Button from "../../../components/ui/Button"

export default function BrokerHomePage() {

  const handleGetStarted = () => {
    // router.push("/get-started")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-8">
          <h1 className="text-4xl font-bold text-gray-900">Broker Services Currently Unavailable</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're focusing on providing the best direct loan application experience for consumers. If you're looking for
            a home loan, you can apply directly through our platform.
          </p>
          <Button
            onClick={handleGetStarted}
            size="lg"
            className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
          >
            Apply for a Loan
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
