import { Hero } from '@/components/landing/hero';
import { Waitlist } from '@/components/landing/waitlist';
import { Simplicity } from '@/components/landing/simplicity';
import { LeaderboardShowcase } from '@/components/landing/leaderboard-showcase';
import { BadgesShowcase } from '@/components/landing/badges-showcase';
import { Features } from '@/components/landing/features';
import { Testimonials } from '@/components/landing/testimonials';
import { CTA } from '@/components/landing/cta';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Apple Style */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-black">
            RouteRank
          </Link>
          <Button asChild variant="ghost" size="sm" className="text-gray-700 hover:text-black">
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

      {/* Footer - Minimal */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-lg font-semibold text-black mb-3">RouteRank</h3>
              <p className="text-sm text-gray-600">
                Track your grind. Climb the ranks.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-3 text-sm">Product</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#waitlist" className="hover:text-black">Waitlist</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-3 text-sm">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="#" className="hover:text-black">Privacy</Link></li>
                <li><Link href="#" className="hover:text-black">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} RouteRank. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
