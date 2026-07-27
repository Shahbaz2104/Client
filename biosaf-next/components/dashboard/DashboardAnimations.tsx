'use client';

import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface StatCardProps {
  label: string;
  value: number;
  icon: ReactNode;
  color: string;
  index: number;
}

export function StatCard({ label, value, icon, color, index }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider">{label}</p>
          <motion.p
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 + 0.15, type: 'spring' as const, damping: 12, stiffness: 100 }}
            className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mt-2"
          >
            {value}
          </motion.p>
        </div>
        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.1 + 0.2, type: 'spring' as const, damping: 15 }}
          className={`p-3 rounded-2xl border ${color}`}
        >
          {icon}
        </motion.div>
      </div>
    </motion.div>
  );
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="text-lg font-bold text-gray-900 dark:text-gray-100"
    >
      {children}
    </motion.h2>
  );
}

interface ActivityItemProps {
  icon: ReactNode;
  iconBg: string;
  iconColor: string;
  title: string;
  time: string;
  index: number;
}

export function ActivityItem({ icon, iconBg, iconColor, title, time, index }: ActivityItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 + index * 0.08, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-3.5 p-3.5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800/80"
    >
      <motion.div
        whileHover={{ rotate: 5, scale: 1.05 }}
        className={`w-10 h-10 ${iconBg} ${iconColor} rounded-xl flex items-center justify-center flex-shrink-0`}
      >
        {icon}
      </motion.div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">{title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
      </div>
    </motion.div>
  );
}

interface QuickActionCardProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export function QuickActionCard({ href, icon, title, description, index }: QuickActionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 + index * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <a
        href={href}
        className="block p-4 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all text-left group"
      >
        <div className="flex items-center justify-between">
          <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-brand-primary dark:group-hover:text-brand-accent">{title}</p>
          <span className="w-4 h-4 text-gray-400 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">{icon}</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</p>
      </a>
    </motion.div>
  );
}
