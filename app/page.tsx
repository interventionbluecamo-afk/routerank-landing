import { Hero } from '@/components/landing/hero';
import { Waitlist } from '@/components/landing/waitlist';
import { Simplicity } from '@/components/landing/simplicity';
import { LeaderboardShowcase } from '@/components/landing/leaderboard-showcase';
import { BadgesShowcase } from '@/components/landing/badges-showcase';
import { Features } from '@/components/landing/features';
import { HowItWorks } from '@/components/landing/how-it-works';
import { Testimonials } from '@/components/landing/testimonials';
import { CTA } from '@/components/landing/cta';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
            RouteRank
          </Link>
          <Button asChild variant="ghost" size="sm" className="text-sm sm:text-base text-white hover:bg-gray-900">
            <a href="#waitlist">Join Waitlist</a>
          </Button>
        </div>
      </nav>

      <Hero />
      <Waitlist />
      <Simplicity />
      <LeaderboardShowcase />
      <BadgesShowcase />
      <Features />
      <Testimonials />
      <CTA />

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">RouteRank</h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Track your grind. Climb the ranks.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Product</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><Link href="#how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><a href="#waitlist" className="hover:text-white">Waitlist</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white">About</Link></li>
                <li><Link href="#" className="hover:text-white">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-900 text-center text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} RouteRank. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
