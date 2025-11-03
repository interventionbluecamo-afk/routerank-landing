import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { HowItWorks } from '@/components/landing/how-it-works';
import { EarlyAccess } from '@/components/landing/early-access';
import { Testimonials } from '@/components/landing/testimonials';
import { CTA } from '@/components/landing/cta';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation - Mobile First */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-black">
            RouteRank
          </Link>
          <Button asChild variant="ghost" size="sm" className="text-sm sm:text-base">
            <a href="#early-access">Early Access</a>
          </Button>
        </div>
      </nav>

      <Hero />
      <EarlyAccess />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />

      {/* Footer - Mobile Optimized */}
      <footer className="bg-white border-t border-gray-200 py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-base sm:text-lg font-bold text-black mb-3 sm:mb-4">RouteRank</h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Track your grind. Climb the ranks.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li><Link href="#how-it-works" className="hover:text-black">How It Works</Link></li>
                <li><a href="#early-access" className="hover:text-black">Early Access</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
                <li><Link href="#" className="hover:text-black">About</Link></li>
                <li><Link href="#" className="hover:text-black">Privacy</Link></li>
                <li><Link href="#" className="hover:text-black">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 text-center text-xs sm:text-sm text-gray-600">
            © {new Date().getFullYear()} RouteRank. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
