"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Star,
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  ArrowLeft,
  CheckCircle,
  MessageSquare,
  Globe,
  Award,
  Loader2,
} from "lucide-react"
import {
  getBrokerReviews,
  getBrokerAvailableSlots,
  type Broker,
  type BrokerReview,
  type AvailableSlot,
} from "@/lib/broker-api"
import { useErrorHandler } from "@/hooks/use-error-handler"
import { useToast } from "@/hooks/use-toast"

interface BrokerDetailsProps {
  broker: Broker
  onBack: () => void
}

export default function BrokerDetails({ broker, onBack }: BrokerDetailsProps) {
  const [reviews, setReviews] = useState<BrokerReview[]>([])
  const [availableSlots, setAvailableSlots] = useState<AvailableSlot[]>([])
  const [isLoadingReviews, setIsLoadingReviews] = useState(false)
  const [isLoadingSlots, setIsLoadingSlots] = useState(false)
  const [selectedSlot, setSelectedSlot] = useState<AvailableSlot | null>(null)
  const { handleAsyncError } = useErrorHandler()
  const { toast } = useToast()

  useEffect(() => {
    loadReviews()
    loadAvailableSlots()
  }, [broker.id])

  const loadReviews = async () => {
    setIsLoadingReviews(true)
    const result = await handleAsyncError(() => getBrokerReviews(broker.id), {
      showToast: false,
      context: { action: "loadReviews", brokerId: broker.id },
    })

    if (result) {
      setReviews(result)
    }
    setIsLoadingReviews(false)
  }

  const loadAvailableSlots = async () => {
    setIsLoadingSlots(true)
    const startDate = new Date().toISOString().split("T")[0]
    const endDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0]

    const result = await handleAsyncError(() => getBrokerAvailableSlots(broker.id, startDate, endDate), {
      showToast: false,
      context: { action: "loadAvailableSlots", brokerId: broker.id },
    })

    if (result) {
      setAvailableSlots(result)
    }
    setIsLoadingSlots(false)
  }

  const handleBookSlot = (slot: AvailableSlot) => {
    setSelectedSlot(slot)
    toast({
      title: "Booking Confirmed!",
      description: `Your ${slot.type} is scheduled for ${new Date(slot.date).toLocaleDateString()} at ${slot.startTime}`,
    })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-AU", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString("en-AU", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Search
        </Button>
      </div>

      {/* Broker Profile Card */}
      <Card>
        <CardHeader>
          <div className="flex items-start gap-6">
            <Avatar className="w-20 h-20">
              <AvatarImage src={broker.profileImage || "/placeholder.svg"} alt={broker.name} />
              <AvatarFallback className="text-2xl">
                {broker.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-2xl">{broker.name}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold text-lg">{broker.rating}</span>
                      <span className="text-gray-500">({broker.reviewCount} reviews)</span>
                    </div>
                    <Badge
                      variant={broker.availability === "available" ? "default" : "secondary"}
                      className={broker.availability === "available" ? "bg-green-100 text-green-800" : ""}
                    >
                      {broker.availability}
                    </Badge>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button onClick={() => window.open(`tel:${broker.phone}`, "_self")}>
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" onClick={() => window.open(`mailto:${broker.email}`, "_self")}>
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{broker.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{broker.experience} years experience</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Globe className="w-4 h-4" />
                  <span>{broker.languages.join(", ")}</span>
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">About</h4>
              <p className="text-gray-600">{broker.description}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Specialties</h4>
              <div className="flex flex-wrap gap-2">
                {broker.specialties.map((specialty) => (
                  <Badge key={specialty} variant="outline">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="reviews">Reviews ({reviews.length})</TabsTrigger>
          <TabsTrigger value="booking">Book Appointment</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Professional Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span>{broker.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-500" />
                      <span>{broker.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span>{broker.location}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Languages Spoken</h4>
                  <div className="flex flex-wrap gap-1">
                    {broker.languages.map((language) => (
                      <Badge key={language} variant="secondary">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="space-y-4">
          {isLoadingReviews ? (
            <Card>
              <CardContent className="flex items-center justify-center py-12">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                <span>Loading reviews...</span>
              </CardContent>
            </Card>
          ) : reviews.length > 0 ? (
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>
                            {review.clientName
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold">{review.clientName}</div>
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                                  }`}
                                />
                              ))}
                            </div>
                            {review.verified && (
                              <Badge variant="outline" className="text-xs">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString()}</span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">No reviews yet</h3>
                <p className="text-gray-500">Be the first to leave a review for this broker</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="booking" className="space-y-4">
          {isLoadingSlots ? (
            <Card>
              <CardContent className="flex items-center justify-center py-12">
                <Loader2 className="w-6 h-6 animate-spin mr-2" />
                <span>Loading available appointments...</span>
              </CardContent>
            </Card>
          ) : availableSlots.length > 0 ? (
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Available Appointments
                  </CardTitle>
                  <CardDescription>Select a time slot that works best for you</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {availableSlots.map((slot) => (
                      <div
                        key={slot.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div>
                          <div className="font-medium">{formatDate(slot.date)}</div>
                          <div className="text-sm text-gray-600">
                            {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                          </div>
                          <Badge variant="outline" className="mt-1">
                            {slot.type.replace("-", " ")}
                          </Badge>
                        </div>
                        <Button onClick={() => handleBookSlot(slot)} disabled={selectedSlot?.id === slot.id}>
                          {selectedSlot?.id === slot.id ? "Booked" : "Book Now"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-medium mb-2">No appointments available</h3>
                <p className="text-gray-500 mb-4">
                  This broker doesn't have any available appointments in the next 30 days
                </p>
                <Button onClick={() => window.open(`tel:${broker.phone}`, "_self")}>Call to Schedule</Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
