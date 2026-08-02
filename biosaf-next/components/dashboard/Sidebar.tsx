'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  Users,
  Building2,
  Briefcase,
  Package,
  Factory,
  Star,
  HelpCircle,
  Image,
  FolderOpen,
  BookOpen,
  MessageSquare,
  Quote,
  Settings,
  ChevronLeft,
  ChevronRight,
  X,
} from 'lucide-react';

interface SidebarProps {
  mobileOpen: boolean;
  onMobileClose: () => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export interface NavGroup {
  title: string;
  items: {
    label: string;
    href: string;
    icon: React.ElementType;
    badge?: string;
  }[];
}

export const navGroups: NavGroup[] = [
  {
    title: 'Overview',
    items: [
      { label: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Management',
    items: [
      { label: 'Admins', href: '/admin/admins', icon: Users },
      { label: 'Divisions', href: '/admin/divisions', icon: Building2 },
      { label: 'Services', href: '/admin/services', icon: Briefcase },
      { label: 'Categories', href: '/admin/categories', icon: Package },
      { label: 'Products', href: '/admin/products', icon: Package },
      { label: 'Industries', href: '/admin/industries', icon: Factory },
    ],
  },
  {
    title: 'Content & Media',
    items: [
      { label: 'Testimonials', href: '/admin/testimonials', icon: Star },
      { label: 'FAQs', href: '/admin/faqs', icon: HelpCircle },
      { label: 'Gallery', href: '/admin/gallery', icon: Image },
      { label: 'Projects', href: '/admin/projects', icon: FolderOpen },
      { label: 'Blogs', href: '/admin/blogs', icon: BookOpen },
    ],
  },
  {
    title: 'Inquiries & Config',
    items: [
      { label: 'Messages', href: '/admin/messages', icon: MessageSquare },
      { label: 'Quotes', href: '/admin/quotes', icon: Quote },
      { label: 'Settings', href: '/admin/settings', icon: Settings },
    ],
  },
];

export function Sidebar({
  mobileOpen,
  onMobileClose,
  collapsed,
  onToggleCollapse,
}: SidebarProps) {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === '/admin') {
      return pathname === '/admin';
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 flex flex-col bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 transition-all duration-300 ease-in-out ${
          collapsed ? 'lg:w-20' : 'lg:w-64'
        } ${mobileOpen ? 'translate-x-0 w-72' : '-translate-x-full lg:translate-x-0'} shadow-xl lg:shadow-none`}
      >
        {/* Brand Header */}
        <div className="h-16 flex items-center justify-between px-5 border-b border-gray-200 dark:border-gray-800">
          <Link
            href="/admin"
            className="flex items-center gap-3 overflow-hidden group focus:outline-none"
            onClick={onMobileClose}
          >
            <div className="w-10 h-10 rounded-xl bg-brand-primary dark:bg-brand-accent text-white dark:text-gray-950 flex items-center justify-center font-extrabold text-lg flex-shrink-0 shadow-md group-hover:scale-105 transition-transform">
              B
            </div>
            {(!collapsed || mobileOpen) && (
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-gray-900 dark:text-white leading-tight">
                  BIOSAF Enterprises
                </span>
                <span className="text-[10px] uppercase tracking-wider font-semibold text-brand-primary dark:text-brand-accent">
                  Admin Panel
                </span>
              </div>
            )}
          </Link>

          {/* Mobile Close Button */}
          <button
            onClick={onMobileClose}
            className="lg:hidden p-1.5 rounded-lg text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close Mobile Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Area */}
        <div className="flex-1 overflow-y-auto px-3 py-4 space-y-6 scrollbar-thin">
          {navGroups.map((group, groupIdx) => (
            <motion.div
              key={groupIdx}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: groupIdx * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-1"
            >
              {(!collapsed || mobileOpen) && (
                <div className="px-3 mb-2 text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  {group.title}
                </div>
              )}
              {group.items.map((item) => {
                const active = isLinkActive(item.href);
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onMobileClose}
                    title={collapsed && !mobileOpen ? item.label : undefined}
                    className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 ${
                      active
                        ? 'bg-brand-primary text-white shadow-md shadow-brand-primary/20 dark:bg-brand-accent dark:text-gray-950 dark:shadow-brand-accent/20'
                        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/70 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 ${
                        active ? 'text-white dark:text-gray-950' : 'text-gray-500 dark:text-gray-400 group-hover:text-brand-primary dark:group-hover:text-brand-accent'
                      }`}
                    />

                    {(!collapsed || mobileOpen) && (
                      <span className="truncate">{item.label}</span>
                    )}

                    {/* Active Pill Indicator */}
                    {active && (!collapsed || mobileOpen) && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' as const, damping: 15 }}
                        className="ml-auto w-1.5 h-1.5 rounded-full bg-white dark:bg-gray-950"
                      />
                    )}

                    {/* Tooltip for collapsed desktop mode */}
                    {collapsed && !mobileOpen && (
                      <div className="absolute left-full ml-3 px-2.5 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-semibold rounded-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-lg">
                        {item.label}
                      </div>
                    )}
                  </Link>
                );
              })}
            </motion.div>
          ))}
        </div>

        {/* Footer Collapse Toggle (Desktop only) */}
        <div className="hidden lg:flex items-center justify-between p-3 border-t border-gray-200 dark:border-gray-800">
          <button
            onClick={onToggleCollapse}
            className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
            title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          >
            {collapsed ? (
              <ChevronRight className="w-5 h-5" />
            ) : (
              <>
                <ChevronLeft className="w-5 h-5" />
                <span className="text-xs font-semibold">Collapse sidebar</span>
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
