import { Users, Package, MessageSquare, Quote, ArrowUpRight, Plus, Eye } from 'lucide-react';
import Link from 'next/link';

async function getDashboardStats() {
  // We'll use mock data for now, replace with real DB calls later
  return {
    admins: 1,
    products: 10,
    messages: 5,
    quotes: 3,
  };
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  const statCards = [
    { label: 'Total Admins', value: stats.admins, icon: Users, color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50' },
    { label: 'Total Products', value: stats.products, icon: Package, color: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50' },
    { label: 'Messages', value: stats.messages, icon: MessageSquare, color: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/50' },
    { label: 'Quote Requests', value: stats.quotes, icon: Quote, color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-900/50' },
  ];

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gradient-to-r from-brand-dark to-brand-primary dark:from-gray-900 dark:to-gray-800 p-6 rounded-2xl text-white shadow-lg">
        <div>
          <h1 className="text-2xl font-extrabold tracking-tight">Welcome back to BIOSAF</h1>
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
          <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 p-6 transition-all hover:shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider">{card.label}</p>
                <p className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mt-2">{card.value}</p>
              </div>
              <div className={`p-3 rounded-2xl border ${card.color}`}>
                <card.icon className="w-6 h-6" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Activity & Actions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Recent Activity</h2>
            <span className="text-xs text-brand-primary dark:text-brand-accent font-semibold cursor-pointer hover:underline">Live Feed</span>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3.5 p-3.5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800/80">
              <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Package className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">New product added</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">2 minutes ago</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800/80">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">New contact message received</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">1 hour ago</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 p-3.5 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800/80">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Quote className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">New quote request submitted</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">3 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <Link
              href="/admin/products"
              className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all text-left group"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-brand-primary dark:group-hover:text-brand-accent">Add Product</p>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Manage catalog items</p>
            </Link>

            <Link
              href="/admin/services"
              className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all text-left group"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-brand-primary dark:group-hover:text-brand-accent">Add Service</p>
                <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-brand-primary dark:group-hover:text-brand-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Create a new service</p>
            </Link>

            <Link
              href="/admin/messages"
              className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all text-left group"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-brand-primary dark:group-hover:text-brand-accent">View Messages</p>
                <Eye className="w-4 h-4 text-gray-400 group-hover:text-brand-primary dark:group-hover:text-brand-accent" />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Check contact messages</p>
            </Link>

            <Link
              href="/admin/quotes"
              className="p-4 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-all text-left group"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm group-hover:text-brand-primary dark:group-hover:text-brand-accent">View Quotes</p>
                <Eye className="w-4 h-4 text-gray-400 group-hover:text-brand-primary dark:group-hover:text-brand-accent" />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Check quote requests</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
