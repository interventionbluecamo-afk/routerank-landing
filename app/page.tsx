import { Hero } from '@/components/landing/hero';
import { ProblemSolution } from '@/components/landing/problem-solution';
import { LeaderboardShowcase } from '@/components/landing/leaderboard-showcase';
import { BadgesShowcase } from '@/components/landing/badges-showcase';
import { MVPDetails } from '@/components/landing/mvp-details';
import { Testimonials } from '@/components/landing/testimonials';
import { Waitlist } from '@/components/landing/waitlist';
import { Navigation } from '@/components/landing/navigation';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Shows after scrolling past Hero, Liquid Glass */}
      <Navigation />

      {/* Optimized Flow with Better Separation */}
      <Hero />
      <ProblemSolution />
      <LeaderboardShowcase />
      <BadgesShowcase />
      <MVPDetails />
      <Testimonials />
      <Waitlist />

      {/* Footer - Minimal */}
      <footer className="bg-gray-900 text-white border-t border-gray-800 py-8 sm:py-12 px-4">
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
                <li><a href="#waitlist" className="hover:text-white transition-colors">Waitlist</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 text-center text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} RouteRank. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
