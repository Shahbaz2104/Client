'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, LayoutDashboard } from 'lucide-react';

const segmentNameMap: Record<string, string> = {
  admin: 'Dashboard',
  admins: 'Admins',
  divisions: 'Divisions',
  services: 'Services',
  categories: 'Categories',
  products: 'Products',
  industries: 'Industries',
  testimonials: 'Testimonials',
  faqs: 'FAQs',
  gallery: 'Gallery',
  blogs: 'Blogs',
  messages: 'Messages',
  quotes: 'Quotes',
  settings: 'Settings',
  create: 'Create',
  edit: 'Edit',
};

function formatSegmentLabel(segment: string): string {
  if (segmentNameMap[segment.toLowerCase()]) {
    return segmentNameMap[segment.toLowerCase()];
  }
  // Format numeric IDs or slugs cleanly
  if (!isNaN(Number(segment))) {
    return `#${segment}`;
  }
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  // If at root /admin, render Home breadcrumb
  if (segments.length <= 1) {
    return (
      <nav aria-label="Breadcrumb" className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1.5 text-gray-800 dark:text-gray-200 font-semibold">
          <LayoutDashboard className="w-4 h-4 text-brand-primary dark:text-brand-accent" />
          Dashboard
        </span>
      </nav>
    );
  }

  const breadcrumbItems = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const isLast = index === segments.length - 1;
    const label = formatSegmentLabel(segment);

    return {
      href,
      label,
      isLast,
    };
  });

  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm font-medium text-gray-500 dark:text-gray-400">
      <ol className="flex items-center gap-1.5 flex-wrap">
        <li>
          <Link
            href="/admin"
            className="flex items-center gap-1 hover:text-brand-primary dark:hover:text-brand-accent transition-colors"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="hidden sm:inline">Admin</span>
          </Link>
        </li>

        {breadcrumbItems.map((item, index) => {
          // Skip redundant first 'admin' item since we have Home link
          if (index === 0 && segments[0] === 'admin') return null;

          return (
            <React.Fragment key={item.href}>
              <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-600 flex-shrink-0" />
              <li>
                {item.isLast ? (
                  <span
                    className="font-semibold text-gray-900 dark:text-gray-100 max-w-[180px] sm:max-w-none truncate inline-block"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-brand-primary dark:hover:text-brand-accent transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
