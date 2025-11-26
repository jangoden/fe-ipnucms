// components/pages/Stats.tsx
"use client";

import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { Users, Building, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { id: 1, name: 'Total Kader', value: 1200, suffix: '+', icon: Users },
  { id: 2, name: 'PAC (Anak Cabang)', value: 27, icon: Building },
  { id: 3, name: 'Ranting', value: 150, suffix: '+', icon: MapPin },
];

export default function Stats() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-emerald-900 py-12 border-y border-emerald-800">
      {/* Background Image Texture (Optional for depth) */}
      <img
        src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-10 mix-blend-overlay"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-emerald-950/50 via-emerald-900/80 to-emerald-900/50" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
              className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 cursor-default"
            >
              <div className="mb-3 rounded-lg bg-emerald-500/20 p-2 ring-1 ring-emerald-400/20">
                <stat.icon className="h-6 w-6 text-emerald-300" />
              </div>
              
              <dd className="text-3xl font-bold tracking-tight text-white mb-1">
                {hasMounted ? (
                  <CountUp start={0} end={stat.value} duration={2.5} separator="." />
                ) : '0'}
                <span className="text-xl text-emerald-400 ml-0.5 align-top">{stat.suffix}</span>
              </dd>
              
              <dt className="text-sm font-medium leading-6 text-emerald-100/80 uppercase tracking-wide">
                {stat.name}
              </dt>
            </motion.div>
          ))}
        </dl>
      </div>
    </div>
  );
}