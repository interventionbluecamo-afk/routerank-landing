'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navigation() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        // Show nav when Hero section is completely out of view (scrolled past)
        setIsVisible(heroBottom < 100);
      } else {
        // Fallback: show after scrolling 100vh
        setIsVisible(window.scrollY > window.innerHeight);
      }
    };

    // Use requestAnimationFrame for smoother scroll detection
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Check on mount

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 left-0 right-0 z-50"
          style={{
            background: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
          }}
        >
          <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-black hover:opacity-80 transition-opacity">
              RouteRank
            </Link>
            <Button asChild variant="ghost" size="sm" className="text-gray-700 hover:text-black text-sm sm:text-base">
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
