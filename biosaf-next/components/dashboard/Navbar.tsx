'use client';

import React from 'react';
import { Menu, PanelLeftClose, PanelLeftOpen, Search } from 'lucide-react';
import { Breadcrumbs } from './Breadcrumbs';
import { ThemeToggle } from './ThemeToggle';
import { ProfileMenu } from './ProfileMenu';

interface NavbarProps {
  onMobileToggle: () => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
}

export function Navbar({
  onMobileToggle,
  collapsed,
  onToggleCollapse,
}: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-4 sm:px-6 flex items-center justify-between transition-colors">
      {/* Left Section: Menu Toggles & Breadcrumbs */}
      <div className="flex items-center gap-3">
        {/* Mobile Hamburger Button */}
        <button
          onClick={onMobileToggle}
          className="lg:hidden p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
          aria-label="Toggle Mobile Drawer"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Desktop Collapse Toggle */}
        <button
          onClick={onToggleCollapse}
          className="hidden lg:flex p-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
          title={collapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
          aria-label="Toggle Sidebar Collapse"
        >
          {collapsed ? (
            <PanelLeftOpen className="w-5 h-5" />
          ) : (
            <PanelLeftClose className="w-5 h-5" />
          )}
        </button>

        {/* Divider */}
        <div className="hidden sm:block h-5 w-px bg-gray-200 dark:bg-gray-800 mx-1" />

        {/* Dynamic Breadcrumbs */}
        <Breadcrumbs />
      </div>

      {/* Right Section: Utilities & Profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Quick Search Shortcut Placeholder / Input */}
        <div className="hidden md:flex items-center relative">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search dashboard..."
            className="w-44 lg:w-60 pl-9 pr-4 py-1.5 text-xs bg-gray-100 dark:bg-gray-800/80 text-gray-800 dark:text-gray-200 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-brand-primary/50 transition-all placeholder:text-gray-400"
          />
        </div>

        {/* Theme Toggle Button */}
        <ThemeToggle />

        {/* Divider */}
        <div className="h-5 w-px bg-gray-200 dark:bg-gray-800" />

        {/* Profile Menu Dropdown */}
        <ProfileMenu />
      </div>
    </header>
  );
}
