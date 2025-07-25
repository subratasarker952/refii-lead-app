import React from "react"
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Shield, Award, Users } from "lucide-react"
import { Link } from "react-router-dom"
import HomeOnlineLogo from "../HomeOnlineLogo"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <HomeOnlineLogo />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Australia's first reverse auction platform for home loans. Banks compete for your business, you save
              thousands.
            </p>

            {/* Trust Badges */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">ASIC Regulated</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300">4.9★ Customer Rating</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Users className="w-4 h-4 text-purple-400" />
                <span className="text-gray-300">25,000+ Customers</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/loan-application/refinance" className="text-gray-300 hover:text-white transition-colors">
                  Refinancing
                </Link>
              </li>
              <li>
                <Link to="/loan-application/first-time-buyer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  First Home Buyer
                </Link>
              </li>
              <li>
                <Link to="/loan-application/new-purchase"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home Purchase
                </Link>
              </li>
              <li>
                <Link to="/loan-application/investment" className="text-gray-300 hover:text-white transition-colors">
                  Investment Property
                </Link>
              </li>
              <li>
                <Link to="/loan-calculator" className="text-gray-300 hover:text-white transition-colors">
                  Loan Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/how-it-works" className="text-gray-300 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/loan-guides" className="text-gray-300 hover:text-white transition-colors">
                  Loan Guides
                </Link>
              </li>
              <li>
                <Link to="/first-home-buyer-guide" className="text-gray-300 hover:text-white transition-colors">
                  First Home Buyer Guide
                </Link>
              </li>
              <li>
                <Link to="/refinancing-guide" className="text-gray-300 hover:text-white transition-colors">
                  Refinancing Guide
                </Link>
              </li>
              <li>
                <Link to="/investment-property-guide" className="text-gray-300 hover:text-white transition-colors">
                  Investment Guide
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="font-semibold">1300 HOME ON</div>
                  <div className="text-sm text-gray-300">Mon-Fri 8am-8pm AEST</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-green-400" />
                <div>
                  <Link to="mailto:hello@homeonline.com.au" className="hover:text-white transition-colors">
                    hello@homeonline.com.au
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5" />
                <div className="text-gray-300">
                  <div>Level 15, 1 Collins Street</div>
                  <div>Melbourne VIC 3000</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <Link to="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link to="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link to="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link to="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                  <Instagram className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Home Online Pty Ltd. All rights reserved.
              <span className="ml-2">ABN: 12 345 678 901</span>
            </div>

            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/responsible-lending" className="text-gray-400 hover:text-white transition-colors">
                Responsible Lending
              </Link>
              <Link to="/complaints" className="text-gray-400 hover:text-white transition-colors">
                Complaints
              </Link>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-500">
            <p>
              Home Online Pty Ltd is a credit representative (Credit Representative Number 123456) of XYZ Finance Group
              Pty Ltd (Australian Credit Licence 987654). This website contains general information only and does not
              take into account your objectives, financial situation or needs. Consider whether this information is
              appropriate for you. A Target Market Determination is available for our credit products.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
