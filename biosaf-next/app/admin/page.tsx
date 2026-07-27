import { Users, Package, MessageSquare, Quote, ArrowUpRight, Plus, Eye } from 'lucide-react';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import { StatCard, SectionTitle, ActivityItem, QuickActionCard } from '@/components/dashboard/DashboardAnimations';

async function getDashboardStats() {
  try {
    const [admins, products, messages, quotes] = await Promise.all([
      prisma.admin.count(),
      prisma.product.count(),
      prisma.contactMessage.count(),
      prisma.quoteRequest.count(),
    ]);

    return { admins, products, messages, quotes };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return { admins: 0, products: 0, messages: 0, quotes: 0 };
  }
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  const statCards = [
    { label: 'Total Admins', value: stats.admins, icon: <Users className="w-6 h-6" />, color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50' },
    { label: 'Total Products', value: stats.products, icon: <Package className="w-6 h-6" />, color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50' },
    { label: 'Messages', value: stats.messages, icon: <MessageSquare className="w-6 h-6" />, color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50' },
    { label: 'Quote Requests', value: stats.quotes, icon: <Quote className="w-6 h-6" />, color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/50' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-brand-dark to-brand-primary dark:from-gray-900 dark:to-gray-800 p-6 rounded-2xl text-white shadow-lg">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">Welcome back to BIOSAF Enterprises</h1>
          <p className="text-sm text-emerald-100 dark:text-gray-300 mt-1">Here is a quick summary of system operations and activity.</p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/admin/products"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-accent text-gray-950 font-bold text-xs hover:bg-lime-400 transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4" /> Add Product
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((card, idx) => (
          <StatCard key={card.label} {...card} index={idx} />
        ))}
      </div>

      {/* Activity & Actions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <SectionTitle>Recent Activity</SectionTitle>
            <span className="text-xs text-brand-primary dark:text-brand-accent font-semibold cursor-pointer hover:underline">Live Feed</span>
          </div>
          <div className="space-y-3">
            <ActivityItem
              icon={<Package className="w-5 h-5" />}
              iconBg="bg-emerald-100 dark:bg-emerald-950/50"
              iconColor="text-emerald-600 dark:text-emerald-400"
              title="New product added"
              time="2 minutes ago"
              index={0}
            />
            <ActivityItem
              icon={<MessageSquare className="w-5 h-5" />}
              iconBg="bg-blue-100 dark:bg-blue-950/50"
              iconColor="text-blue-600 dark:text-blue-400"
              title="New contact message received"
              time="1 hour ago"
              index={1}
            />
            <ActivityItem
              icon={<Quote className="w-5 h-5" />}
              iconBg="bg-purple-100 dark:bg-purple-950/50"
              iconColor="text-purple-600 dark:text-purple-400"
              title="New quote request submitted"
              time="3 hours ago"
              index={2}
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 p-6">
          <SectionTitle>Quick Actions</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">
            <QuickActionCard
              href="/admin/products"
              icon={<ArrowUpRight className="w-4 h-4" />}
              title="Add Product"
              description="Manage catalog items"
              index={0}
            />
            <QuickActionCard
              href="/admin/services"
              icon={<ArrowUpRight className="w-4 h-4" />}
              title="Add Service"
              description="Create a new service"
              index={1}
            />
            <QuickActionCard
              href="/admin/messages"
              icon={<Eye className="w-4 h-4" />}
              title="View Messages"
              description="Check contact messages"
              index={2}
            />
            <QuickActionCard
              href="/admin/quotes"
              icon={<Eye className="w-4 h-4" />}
              title="View Quotes"
              description="Check quote requests"
              index={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
