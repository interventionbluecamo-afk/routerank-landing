'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Check, Phone } from 'lucide-react';
import toast from 'react-hot-toast';

export function Waitlist() {
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success('You\'re on the list!');
      setPhone('');
    }, 1000);
  };

  return (
    <section id="waitlist" className="py-16 sm:py-24 px-4 bg-black text-white relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-gray-300 text-sm font-semibold mb-4 border border-gray-700">
            <Phone className="w-4 h-4" />
            Early Access
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            Get early access
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-xl mx-auto">
            Join the waitlist and be notified when RouteRank launches.
          </p>

          {!submitted ? (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4"
            >
              <Input
                type="tel"
                placeholder="(555) 123-4567"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="flex-1 h-14 sm:h-16 bg-gray-900 border-2 border-gray-700 text-white placeholder:text-gray-500 text-base focus:border-white focus:bg-gray-800"
              />
              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="h-14 sm:h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 sm:px-10 font-semibold shadow-xl active:scale-95"
              >
                {loading ? 'Joining...' : 'Join Waitlist'}
              </Button>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 bg-gray-900 border-2 border-gray-700 rounded-2xl p-6 max-w-md mx-auto"
            >
              <Check className="w-5 h-5 text-white" />
              <div className="text-left">
                <div className="font-semibold text-white">You're in!</div>
                <div className="text-sm text-gray-400">We'll text you when we launch</div>
              </div>
            </motion.div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 pt-6">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>Free forever</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              <span>No credit card</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
