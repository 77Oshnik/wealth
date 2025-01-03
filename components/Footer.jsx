import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-blue-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">WealthWise</h2>
            <p className="text-gray-600">
              Empowering your financial future since 2023. We provide innovative solutions for wealth management and financial planning.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-700">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/dashboard" className="hover:text-blue-600 transition-colors">Dashboard</Link></li>
              <li><Link href="/investments" className="hover:text-blue-600 transition-colors">Investments</Link></li>
              <li><Link href="/planning" className="hover:text-blue-600 transition-colors">Financial Planning</Link></li>
              <li><Link href="/support" className="hover:text-blue-600 transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-700">Legal & Compliance</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/security" className="hover:text-blue-600 transition-colors">Security</Link></li>
              <li><Link href="/compliance" className="hover:text-blue-600 transition-colors">Compliance</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} WealthWise. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@wealthwise.com" className="text-blue-600 hover:text-blue-800 transition-colors" aria-label="Email us">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
