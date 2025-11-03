'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowDown, Send, Check, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const deliveryEmojis = ['🚗', '🚚', '🏆', '👀', '🎉'];

interface EmojiBurst {
  id: number;
  emoji: string;
  x: number;
  y: number;
}

export function Hero() {
  const [showForm, setShowForm] = useState(false);
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emojiBursts, setEmojiBursts] = useState<EmojiBurst[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const emojiIdCounter = useRef(0);
  const activeEmojis = useRef(0);
  const MAX_ACTIVE_EMOJIS = 30; // Prevent overload

  // Triple shot images - replace with your actual images
  const tripleShotImages = [
    { src: '/triple-shot-1.jpg', alt: 'RouteRank leaderboard' },
    { src: '/triple-shot-2.jpg', alt: 'RouteRank badges' },
    { src: '/triple-shot-3.jpg', alt: 'RouteRank stats' },
  ];

  // Auto-advance images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % tripleShotImages.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, [tripleShotImages.length]);

  // Handle click/touch on white space for emoji burst
  const handleWhiteSpaceClick = (e: React.MouseEvent | React.TouchEvent) => {
    // Don't trigger on buttons, inputs, or video
    const target = e.target as HTMLElement;
    if (
      target.closest('button') ||
      target.closest('input') ||
      target.closest('a') ||
      target.closest('[class*="video"]') ||
      activeEmojis.current >= MAX_ACTIVE_EMOJIS
    ) {
      return;
    }

    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;

    // Get coordinates from mouse or touch
    const clientX = 'clientX' in e ? e.clientX : e.touches[0]?.clientX;
    const clientY = 'clientY' in e ? e.clientY : e.touches[0]?.clientY;
    
    if (!clientX || !clientY) return;

    // Calculate position relative to section (accounting for scroll)
    const x = clientX - rect.left + window.scrollX;
    const y = clientY - rect.top + window.scrollY;

    // Spawn 5 emojis per click (mobile-optimized)
    const count = 5;
    const newBursts: EmojiBurst[] = [];

    for (let i = 0; i < count && activeEmojis.current < MAX_ACTIVE_EMOJIS; i++) {
      emojiIdCounter.current++;
      activeEmojis.current++;
      newBursts.push({
        id: emojiIdCounter.current,
        emoji: deliveryEmojis[Math.floor(Math.random() * deliveryEmojis.length)],
        x: x + (Math.random() - 0.5) * 40,
        y: y + (Math.random() - 0.5) * 40,
      });
    }

    setEmojiBursts((prev) => [...prev, ...newBursts]);

    // Clean up emojis after animation
    setTimeout(() => {
      setEmojiBursts((prev) => prev.filter((b) => !newBursts.some((nb) => nb.id === b.id)));
      activeEmojis.current -= newBursts.length;
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setPhone('');
      // Success state stays - no auto-reset
    }, 1000);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  
  // Auto-focus input when form opens
  useEffect(() => {
    if (showForm && inputRef.current && !isSubmitted) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [showForm, isSubmitted]);

  return (
    <section 
      id="hero-section"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center px-4 py-12 overflow-hidden bg-white sm:py-16 lg:py-20 cursor-pointer"
      onClick={handleWhiteSpaceClick}
      onTouchStart={handleWhiteSpaceClick}
    >
      {/* Emoji Bursts */}
      <AnimatePresence>
        {emojiBursts.map((burst) => (
          <motion.div
            key={burst.id}
            initial={{ 
              opacity: 0, 
              scale: 0,
            }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              scale: [0, 1.2, 1, 0.8],
              y: -100,
              rotate: [0, Math.random() * 360 - 180],
            }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 2,
              ease: 'easeOut',
            }}
            className="absolute pointer-events-none text-3xl select-none z-50"
            style={{ 
              left: `${burst.x}px`, 
              top: `${burst.y}px`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {burst.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Subtle background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gray-100/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gray-100/15 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col items-center gap-6 sm:gap-8 lg:gap-10">
          {/* Title - Clean spacing and alignment */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center w-full max-w-3xl mx-auto px-4"
          >
            <h1 className="text-4xl font-bold tracking-tight text-black leading-tight sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight lg:text-7xl lg:leading-tight mb-4 sm:mb-5 md:mb-6">
              Compete with delivery drivers
            </h1>
            <p className="text-base text-gray-600 font-normal sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              🚚 Track routes • 👀 See rankings • 🏆 Earn badges
            </p>
          </motion.div>

          {/* Triple Shot Presentation - Vertical Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
            className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] group"
          >
            {/* Vertical card container */}
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-black aspect-[9/16] max-h-[580px] sm:max-h-[640px] lg:max-h-[720px] shadow-xl">
              {/* Triple shot images - one at a time with smooth transitions */}
              <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                  {tripleShotImages.map((image, index) => (
                    index === currentImageIndex && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute inset-0 w-full h-full"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback gradient if image doesn't load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            if (target.parentElement) {
                              const gradientClass = index === 0 ? 'from-blue-600 to-purple-600' :
                                index === 1 ? 'from-purple-600 to-pink-600' :
                                'from-yellow-500 to-orange-500';
                              target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br ${gradientClass}"></div>`;
                            }
                          }}
                        />
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
              </div>

              {/* Navigation dots - bottom indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                {tripleShotImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'w-8 bg-white shadow-lg'
                        : 'w-1.5 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Slide counter - subtle */}
              <motion.div
                animate={{ opacity: [0.5, 0.7, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 right-4 px-2.5 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-medium text-white border border-white/10 pointer-events-none"
              >
                {currentImageIndex + 1}/{tripleShotImages.length}
              </motion.div>
            </div>
          </motion.div>

          {/* Content Below Triple Shot - Matches card width */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
            className="text-center space-y-4 sm:space-y-5 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] mx-auto"
          >
            {/* Animated Form Reveal - Airbnb Style with Success State */}
            <AnimatePresence mode="wait">
              {!showForm && !isSubmitted ? (
                <motion.div
                  key="button"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowForm(true);
                    }}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 h-14 w-full px-8 text-lg font-semibold shadow-lg active:scale-95 transition-all border-0 sm:h-16 sm:text-xl"
                  >
                    Join Waitlist →
                  </Button>
                </motion.div>
              ) : !isSubmitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  onSubmit={handleSubmit}
                  className="flex gap-2 w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Input
                    ref={inputRef}
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="flex-1 h-14 sm:h-16 text-base sm:text-lg border-2 border-gray-300 focus:border-blue-600 focus:ring-blue-600 disabled:opacity-50"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 h-14 w-14 flex-shrink-0 p-0 shadow-lg active:scale-95 transition-all border-0 sm:h-16 sm:w-16 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                    )}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-5 sm:p-6 text-white shadow-lg">
                    <div className="flex items-center justify-center gap-3">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                      >
                        <Check className="w-6 h-6" />
                      </motion.div>
                      <div className="text-left">
                        <div className="font-bold text-lg sm:text-xl">You're in!</div>
                        <div className="text-sm text-white/90">We'll text you when we launch</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Secondary CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                variant="ghost"
                size="lg"
                className="h-12 w-full px-8 text-base font-medium border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 active:scale-95 transition-all sm:h-14 sm:text-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  // Smooth scroll to next section
                  const nextSection = document.getElementById('problem-solution');
                  if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
                <span className="flex items-center justify-center gap-2">
                  Show me more
                  <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5" />
                </span>
              </Button>
            </motion.div>

            {/* Company Logos */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-4 sm:pt-6"
            >
              <p className="text-xs text-gray-400 mb-4 font-medium tracking-wide uppercase sm:text-sm sm:mb-5">
                Used by drivers at
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
                {[
                  { name: 'FedEx', logo: 'FedEx' },
                  { name: 'Amazon DSP', logo: 'Amazon' },
                  { name: 'UPS', logo: 'UPS' },
                  { name: 'DHL', logo: 'DHL' },
                ].map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <div className="text-base font-bold opacity-40 hover:opacity-60 sm:text-lg">
                      {company.logo}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
