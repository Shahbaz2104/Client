'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ThemeProvider } from '@/components/dashboard/ThemeProvider';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Navbar } from '@/components/dashboard/Navbar';
import { ScrollToTop } from '@/components/ui/ScrollToTop';

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <ThemeProvider defaultTheme="system">
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
        <Sidebar
          mobileOpen={mobileOpen}
          onMobileClose={() => setMobileOpen(false)}
          collapsed={collapsed}
          onToggleCollapse={() => setCollapsed(!collapsed)}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <Navbar
            onMobileToggle={() => setMobileOpen(true)}
            collapsed={collapsed}
            onToggleCollapse={() => setCollapsed(!collapsed)}
          />

          <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
            <div className="max-w-7xl mx-auto space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={pathname}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] } }}
                  exit={{ opacity: 0, y: -8, transition: { duration: 0.12 } }}
                >
                  {children}
                </motion.div>
              </AnimatePresence>
            </div>
          </main>
        </div>
      </div>
      <ScrollToTop />
    </ThemeProvider>
  );
}
