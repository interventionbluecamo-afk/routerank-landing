import { Hero } from '@/components/landing/hero';
import { ProblemSolution } from '@/components/landing/problem-solution';
import { Testimonials } from '@/components/landing/testimonials';
import { MVPDetails } from '@/components/landing/mvp-details';
import { LeaderboardShowcase } from '@/components/landing/leaderboard-showcase';
import { BadgesShowcase } from '@/components/landing/badges-showcase';
import { Waitlist } from '@/components/landing/waitlist';
import { Navigation } from '@/components/landing/navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Shows after scrolling past Hero, Liquid Glass */}
      <Navigation />

      {/* Optimized Flow */}
      <Hero />
      <ProblemSolution />
      <Testimonials />
      <MVPDetails />
      <LeaderboardShowcase />
      <BadgesShowcase />
      <Waitlist />

      {/* Footer - Minimal */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 sm:py-12 px-4">
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
                <li><a href="#waitlist" className="hover:text-black">Waitlist</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-black mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
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
