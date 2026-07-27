'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Laptop, Check } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options = [
    { value: 'light', label: 'Light', icon: Sun },
    { value: 'dark', label: 'Dark', icon: Moon },
    { value: 'system', label: 'System', icon: Laptop },
  ] as const;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-primary"
        title="Toggle Theme"
        aria-label="Toggle Theme"
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 dark:rotate-0" />
        ) : (
          <Sun className="w-5 h-5 text-amber-500 transition-transform duration-300 rotate-0" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 py-2 bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-800 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
            Appearance
          </div>
          {options.map((option) => {
            const Icon = option.icon;
            const isSelected = theme === option.value;
            return (
              <button
                key={option.value}
                onClick={() => {
                  setTheme(option.value);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium transition-colors ${
                  isSelected
                    ? 'text-brand-primary dark:text-brand-accent bg-gray-50 dark:bg-gray-800/60'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{option.label}</span>
                </div>
                {isSelected && <Check className="w-4 h-4 text-brand-primary dark:text-brand-accent" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
