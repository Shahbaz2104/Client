'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { User, Settings, LogOut, Shield, ChevronDown, Loader2 } from 'lucide-react';

interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'super_admin';
}

export function ProfileMenu() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch('/api/admin/me');
        if (res.ok) {
          const data = await res.json();
          setUser(data.user);
        } else {
          setUser({
            id: 1,
            name: 'BIOSAF Admin',
            email: 'admin@biosaf.com',
            role: 'super_admin',
          });
        }
      } catch {
        setUser({
          id: 1,
          name: 'BIOSAF Admin',
          email: 'admin@biosaf.com',
          role: 'super_admin',
        });
      }
    }
    fetchUser();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);
      await fetch('/api/admin/logout', { method: 'POST' });
      window.location.href = '/login';
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      setIsLoggingOut(false);
    }
  };

  const initials = user?.name
    ? user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2)
    : 'A';

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
        aria-label="User profile menu"
      >
        <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-brand-dark to-brand-primary dark:from-brand-primary dark:to-brand-accent flex items-center justify-center text-white dark:text-gray-900 font-bold text-sm shadow-sm">
          {initials}
        </div>
        <div className="hidden md:flex flex-col text-left">
          <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 line-clamp-1 leading-tight">
            {user?.name || 'Administrator'}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 capitalize leading-tight">
            {user?.role === 'super_admin' ? 'Super Admin' : 'Admin'}
          </span>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 py-2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          {/* User Info Header */}
          <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-800">
            <p className="text-sm font-bold text-gray-900 dark:text-gray-100">{user?.name || 'Administrator'}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">{user?.email || 'admin@biosaf.com'}</p>
            <div className="mt-2 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium bg-brand-light dark:bg-brand-primary/20 text-brand-dark dark:text-brand-accent">
              <Shield className="w-3 h-3" />
              {user?.role === 'super_admin' ? 'Super Administrator' : 'Administrator'}
            </div>
          </div>

          {/* Action Items */}
          <div className="py-1">
            <Link
              href="/admin/admins"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <User className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span>Profile & Account</span>
            </Link>

            <Link
              href="/admin/settings"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <Settings className="w-4 h-4 text-gray-500 dark:text-gray-400" />
              <span>System Settings</span>
            </Link>
          </div>

          {/* Logout Button */}
          <div className="pt-1 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors font-medium"
            >
              {isLoggingOut ? (
                <Loader2 className="w-4 h-4 animate-spin text-red-600 dark:text-red-400" />
              ) : (
                <LogOut className="w-4 h-4 text-red-600 dark:text-red-400" />
              )}
              <span>Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
