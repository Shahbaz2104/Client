'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, Copy, Trash2, X, Clock, Calendar,
  Search, Inbox, MessageSquare, CheckCircle2,
  ArrowUpDown, AlertCircle, Info, ChevronRight,
} from 'lucide-react';

/* Types */
interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  isRead: boolean;
  readAt: string | null;
  createdAt: string;
}

type FilterKey = 'all' | 'unread' | 'read';
type SortKey = 'newest' | 'oldest';

/* Animation variants */
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring' as const, damping: 25, stiffness: 300 } },
  exit: { opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.15 } },
};

const toastVariants = {
  initial: { opacity: 0, x: 80, scale: 0.95 },
  animate: { opacity: 1, x: 0, scale: 1, transition: { type: 'spring' as const, damping: 20, stiffness: 300 } },
  exit: { opacity: 0, x: 80, scale: 0.95, transition: { duration: 0.15 } },
};

const skeletonRow = (i: number) => (
  <motion.tr
    key={`skeleton-${i}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ delay: i * 0.03 }}
    className="animate-pulse"
  >
    <td className="px-6 py-4">
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-32" />
        <div className="h-3 bg-gray-100 dark:bg-gray-800/60 rounded w-48" />
      </div>
    </td>
    <td className="px-6 py-4">
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-40" />
        <div className="h-3 bg-gray-100 dark:bg-gray-800/60 rounded w-56" />
      </div>
    </td>
    <td className="px-6 py-4">
      <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded-full w-16" />
    </td>
    <td className="px-6 py-4">
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-24" />
    </td>
    <td className="px-6 py-4">
      <div className="flex justify-end gap-2">
        <div className="h-8 w-8 bg-gray-200 dark:bg-gray-800 rounded-lg" />
        <div className="h-8 w-8 bg-gray-200 dark:bg-gray-800 rounded-lg" />
      </div>
    </td>
  </motion.tr>
);

export default function MessagesPage() {
  /* State */
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [sortKey, setSortKey] = useState<SortKey>('newest');
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  /* Fetch */
  useEffect(() => { fetchMessages(); }, []);

  useEffect(() => {
    if (!showModal && previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [showModal]);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape' && showModal) closeModal();
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showModal]);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [showModal]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (toast) timer = setTimeout(() => setToast(null), 3500);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (copiedField) timer = setTimeout(() => setCopiedField(null), 2000);
    return () => clearTimeout(timer);
  }, [copiedField]);

  /* API */
  async function fetchMessages() {
    try {
      const res = await fetch('/api/admin/messages');
      if (res.ok) setMessages(await res.json());
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function markAsRead(message: ContactMessage) {
    if (message.isRead) return;
    try {
      const res = await fetch(`/api/admin/messages/${message.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isRead: true }),
      });
      if (res.ok) {
        fetchMessages();
        showToast('success', 'Marked as read');
      }
    } catch { /* silent */ }
  }

  function openModal(message: ContactMessage) {
    previousFocusRef.current = document.activeElement as HTMLElement;
    setSelectedMessage(message);
    setShowModal(true);
    if (!message.isRead) markAsRead(message);
  }

  function closeModal() {
    setShowModal(false);
    setTimeout(() => setSelectedMessage(null), 200);
  }

  async function handleDelete(id: number) {
    if (!confirm('Are you sure you want to delete this message?')) return;
    try {
      const res = await fetch(`/api/admin/messages/${id}`, { method: 'DELETE' });
      if (res.ok) {
        fetchMessages();
        closeModal();
        showToast('success', 'Message deleted');
      }
    } catch {
      showToast('error', 'Failed to delete');
    }
  }

  async function copyToClipboard(text: string, label: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(label);
    } catch {
      showToast('error', 'Failed to copy');
    }
  }

  function showToast(type: 'success' | 'error' | 'info', message: string) {
    setToast({ type, message });
  }

  /* Derived data */
  const stats = useMemo(() => ({
    total: messages.length,
    unread: messages.filter(m => !m.isRead).length,
    read: messages.filter(m => m.isRead).length,
  }), [messages]);

  const filteredMessages = useMemo(() => {
    let result = [...messages];
    if (activeFilter === 'unread') result = result.filter(m => !m.isRead);
    else if (activeFilter === 'read') result = result.filter(m => m.isRead);

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(m =>
        m.name.toLowerCase().includes(q) ||
        m.email.toLowerCase().includes(q) ||
        (m.subject && m.subject.toLowerCase().includes(q)) ||
        m.message.toLowerCase().includes(q) ||
        (m.phone && m.phone.includes(q))
      );
    }

    result.sort((a, b) =>
      sortKey === 'newest'
        ? new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        : new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    );

    return result;
  }, [messages, activeFilter, sortKey, searchQuery]);

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric',
      hour: '2-digit', minute: '2-digit',
    });
  }

  function formatShortDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('en-US', {
      month: 'short', day: 'numeric', year: 'numeric',
    });
  }

  function messagePreview(text: string, max = 80) {
    return text.length > max ? text.slice(0, max) + '...' : text;
  }

  function relativeTime(dateStr: string) {
    const diff = Date.now() - new Date(dateStr).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 7) return `${days}d ago`;
    return formatShortDate(dateStr);
  }

  const filters: { key: FilterKey; label: string }[] = [
    { key: 'all', label: 'All' },
    { key: 'unread', label: 'Unread' },
    { key: 'read', label: 'Read' },
  ];

  const toastIcon = {
    success: CheckCircle2,
    error: AlertCircle,
    info: Info,
  };

  const toastColors = {
    success: 'bg-emerald-50 dark:bg-emerald-950/90 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/60',
    error: 'bg-red-50 dark:bg-red-950/90 text-red-700 dark:text-red-300 border-red-200 dark:border-red-900/60',
    info: 'bg-blue-50 dark:bg-blue-950/90 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-900/60',
  };

  return (
    <div className="space-y-6">
      {/* Header with Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">
            Contact Messages
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Manage inbound customer inquiries and submissions
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-3 gap-3 sm:gap-4"
      >
        {[
          { label: 'Total', value: stats.total, color: 'text-gray-900 dark:text-gray-100', bg: 'bg-white dark:bg-gray-900', border: 'border-gray-200 dark:border-gray-800', icon: Inbox },
          { label: 'Unread', value: stats.unread, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50/60 dark:bg-blue-950/30', border: 'border-blue-200 dark:border-blue-900/50', icon: MessageSquare },
          { label: 'Read', value: stats.read, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50/60 dark:bg-emerald-950/30', border: 'border-emerald-200 dark:border-emerald-900/50', icon: CheckCircle2 },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.3 }}
            className={`${stat.bg} ${stat.border} border rounded-xl p-4 shadow-xs`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{stat.label}</p>
                <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
              </div>
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center bg-white dark:bg-gray-800 shadow-xs border ${stat.border}`}>
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Search + Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search by name, email, subject, or message..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-9 py-2.5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 dark:focus:ring-brand-accent/20 focus:border-brand-primary dark:focus:border-brand-accent transition-all"
            aria-label="Search messages"
          />
          {searchQuery && (
            <button
              onClick={() => { setSearchQuery(''); searchInputRef.current?.focus(); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* Filter Chips */}
          <div className="flex gap-1 p-0.5 bg-gray-100 dark:bg-gray-800 rounded-xl" role="tablist" aria-label="Filter messages">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                role="tab"
                aria-selected={activeFilter === f.key}
                className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === f.key
                    ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-xs'
                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {f.label}
                {f.key === 'unread' && stats.unread > 0 && (
                  <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold rounded-full bg-blue-500 text-white">
                    {stats.unread}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Sort */}
          <button
            onClick={() => setSortKey(sortKey === 'newest' ? 'oldest' : 'newest')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            aria-label={`Sort by ${sortKey === 'newest' ? 'oldest' : 'newest'} first`}
          >
            <ArrowUpDown className="w-3.5 h-3.5" />
            {sortKey === 'newest' ? 'Newest' : 'Oldest'}
          </button>
        </div>
      </div>

      {/* Messages Table / Card View */}
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
                <tr>
                  {['Sender', 'Subject', 'Status', 'Date', 'Actions'].map(h => (
                    <th key={h} className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {Array.from({ length: 5 }, (_, i) => skeletonRow(i))}
              </tbody>
            </table>
          </motion.div>
        ) : filteredMessages.length === 0 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 p-12 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
              <Inbox className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-1">
              {searchQuery || activeFilter !== 'all' ? 'No matching messages' : 'No messages yet'}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
              {searchQuery || activeFilter !== 'all'
                ? 'Try adjusting your search or filter to find what you\'re looking for.'
                : 'Inbound customer inquiries and contact form submissions will appear here.'}
            </p>
            {(searchQuery || activeFilter !== 'all') && (
              <button
                onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-brand-primary dark:text-brand-accent bg-brand-light/50 dark:bg-brand-dark/50 rounded-xl hover:bg-brand-light dark:hover:bg-brand-dark transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Clear filters
              </button>
            )}
          </motion.div>
        ) : (
          <motion.div
            key="table"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xs border border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            {/* Desktop Table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Sender</th>
                    <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3.5 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800/80">
                  <AnimatePresence mode="popLayout">
                    {filteredMessages.map((item, index) => (
                      <motion.tr
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, delay: index * 0.015 }}
                        className={`group cursor-pointer transition-colors ${
                          !item.isRead
                            ? 'bg-blue-50/40 dark:bg-blue-950/15 hover:bg-blue-50/70 dark:hover:bg-blue-950/25'
                            : 'hover:bg-gray-50/80 dark:hover:bg-gray-800/40'
                        }`}
                        onClick={() => openModal(item)}
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter') openModal(item); }}
                        role="button"
                        aria-label={`View message from ${item.name}`}
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {!item.isRead && (
                              <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2 h-2 rounded-full bg-blue-500 shrink-0"
                                aria-label="Unread"
                              />
                            )}
                            <div className={!item.isRead ? '' : 'ml-5'}>
                              <p className={`text-sm ${!item.isRead ? 'font-bold' : 'font-semibold'} text-gray-900 dark:text-gray-100`}>
                                {item.name}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 max-w-xs">
                          <p className={`text-sm truncate ${!item.isRead ? 'font-semibold text-gray-900 dark:text-gray-100' : 'text-gray-700 dark:text-gray-300'}`}>
                            {item.subject || 'General Inquiry'}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 truncate mt-0.5">
                            {messagePreview(item.message)}
                          </p>
                        </td>
                        <td className="px-6 py-4">
                          {!item.isRead ? (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50">
                              <motion.span
                                animate={{ opacity: [1, 0.3, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                className="w-1.5 h-1.5 rounded-full bg-blue-500"
                              />
                              Unread
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                              Read
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex flex-col">
                            <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">
                              {formatShortDate(item.createdAt)}
                            </span>
                            <span className="text-[11px] text-gray-400 dark:text-gray-500">
                              {relativeTime(item.createdAt)}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-1" onClick={(e) => e.stopPropagation()}>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.92 }}
                              onClick={() => openModal(item)}
                              className="p-2 text-gray-400 hover:text-brand-primary dark:hover:text-brand-accent hover:bg-brand-light/50 dark:hover:bg-brand-dark/50 rounded-lg transition-colors"
                              title="View message"
                              aria-label={`View message from ${item.name}`}
                            >
                              <ChevronRight className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.92 }}
                              onClick={() => handleDelete(item.id)}
                              className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg transition-colors"
                              title="Delete message"
                              aria-label={`Delete message from ${item.name}`}
                            >
                              <Trash2 className="w-4 h-4" />
                            </motion.button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>

            {/* Mobile Card View */}
            <div className="sm:hidden divide-y divide-gray-100 dark:divide-gray-800/80">
              <AnimatePresence mode="popLayout">
                {filteredMessages.map((item, index) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, delay: index * 0.015 }}
                    className={`p-4 cursor-pointer transition-colors ${
                      !item.isRead
                        ? 'bg-blue-50/40 dark:bg-blue-950/15 hover:bg-blue-50/70 dark:hover:bg-blue-950/25'
                        : 'hover:bg-gray-50/80 dark:hover:bg-gray-800/40'
                    }`}
                    onClick={() => openModal(item)}
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter') openModal(item); }}
                    role="button"
                    aria-label={`View message from ${item.name}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3 min-w-0">
                        {!item.isRead && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5"
                          />
                        )}
                        <div className={!item.isRead ? '' : 'ml-5'}>
                          <p className={`text-sm ${!item.isRead ? 'font-bold' : 'font-semibold'} text-gray-900 dark:text-gray-100`}>
                            {item.name}
                          </p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{item.email}</p>
                          <p className={`text-sm mt-2 truncate ${!item.isRead ? 'font-semibold' : ''} text-gray-700 dark:text-gray-300`}>
                            {item.subject || 'General Inquiry'}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 line-clamp-2">
                            {item.message}
                          </p>
                          <div className="flex items-center gap-3 mt-3">
                            {!item.isRead ? (
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-semibold rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/50">
                                <motion.span
                                  animate={{ opacity: [1, 0.3, 1] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                  className="w-1.5 h-1.5 rounded-full bg-blue-500"
                                />
                                Unread
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-[11px] font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                Read
                              </span>
                            )}
                            <span className="text-[11px] text-gray-400 dark:text-gray-500">{relativeTime(item.createdAt)}</span>
                          </div>
                        </div>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => { e.stopPropagation(); handleDelete(item.id); }}
                        className="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 rounded-lg shrink-0"
                        aria-label={`Delete message from ${item.name}`}
                      >
                        <Trash2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Footer Count */}
            <div className="px-6 py-3 border-t border-gray-100 dark:border-gray-800/80 bg-gray-50/50 dark:bg-gray-800/20">
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Showing <span className="font-semibold text-gray-600 dark:text-gray-400">{filteredMessages.length}</span> of{' '}
                <span className="font-semibold text-gray-600 dark:text-gray-400">{messages.length}</span> messages
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View Message Modal */}
      <AnimatePresence>
        {showModal && selectedMessage && (
          <motion.div
            key="modal-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
            role="dialog"
            aria-modal="true"
            aria-label={`Message from ${selectedMessage.name}`}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" aria-hidden="true" />

            {/* Modal */}
            <motion.div
              key="modal-content"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-800"
            >
              {/* Header */}
              <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-6 py-4 flex items-center justify-between rounded-t-2xl z-10">
                <div className="flex items-center gap-3">
                  <motion.div
                    initial={{ rotate: -10, scale: 0.9 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                    className="w-10 h-10 rounded-xl bg-brand-primary/10 dark:bg-brand-accent/10 flex items-center justify-center text-brand-primary dark:text-brand-accent"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">Message Details</h2>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Viewing full customer inquiry</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  aria-label="Close message viewer"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Body */}
              <div className="p-6 space-y-6">
                {/* Customer Info Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800"
                  >
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Customer Information</h3>
                    <div className="space-y-2.5">
                      <div>
                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Name</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{selectedMessage.name}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Email</p>
                        <p className="text-sm text-brand-primary dark:text-brand-accent break-all">{selectedMessage.email}</p>
                      </div>
                      {selectedMessage.phone && (
                        <div>
                          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Phone</p>
                          <p className="text-sm text-gray-900 dark:text-gray-100">{selectedMessage.phone}</p>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="space-y-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800"
                  >
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Details</h3>
                    <div className="space-y-2.5">
                      <div>
                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Subject</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                          {selectedMessage.subject || 'General Inquiry'}
                        </p>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Submitted</p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                          {formatDate(selectedMessage.createdAt)}
                        </p>
                      </div>
                      {selectedMessage.readAt && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ delay: 0.2 }}
                        >
                          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Read</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                            {formatDate(selectedMessage.readAt)}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Full Message */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-3"
                >
                  <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">Message Content</h3>
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800 p-5">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap break-words">
                      {selectedMessage.message}
                    </p>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="flex flex-wrap gap-2 pt-2 border-t border-gray-100 dark:border-gray-800"
                >
                  <motion.a
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject || 'Your Inquiry'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-primary dark:bg-brand-accent dark:text-gray-950 text-white rounded-xl hover:bg-brand-dark transition-colors text-xs font-semibold shadow-xs"
                  >
                    <Mail className="w-4 h-4" />
                    Reply via Email
                  </motion.a>

                  {selectedMessage.phone && (
                    <motion.a
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      href={`tel:${selectedMessage.phone}`}
                      className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-xs font-semibold"
                    >
                      <Phone className="w-4 h-4" />
                      Call Customer
                    </motion.a>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => copyToClipboard(selectedMessage.email, 'email')}
                    className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-xs font-semibold"
                    aria-label="Copy email address"
                  >
                    {copiedField === 'email' ? (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        Copied!
                      </motion.span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Copy className="w-4 h-4" />
                        Copy Email
                      </span>
                    )}
                  </motion.button>

                  {selectedMessage.phone && (
                    <motion.button
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => copyToClipboard(selectedMessage.phone!, 'phone')}
                      className="inline-flex items-center gap-2 px-4 py-2.5 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-xs font-semibold"
                      aria-label="Copy phone number"
                    >
                      {copiedField === 'phone' ? (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                          Copied!
                        </motion.span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Copy className="w-4 h-4" />
                          Copy Phone
                        </span>
                      )}
                    </motion.button>
                  )}

                  {/* Spacer + Delete */}
                  <div className="flex-1" />
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => handleDelete(selectedMessage.id)}
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 rounded-xl hover:bg-red-100 dark:hover:bg-red-950/60 transition-colors text-xs font-semibold"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            key="toast"
            variants={toastVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed bottom-6 right-6 z-[60] max-w-sm w-full"
          >
            <div className={`px-5 py-3.5 rounded-xl shadow-lg border text-sm font-semibold flex items-center gap-3 ${toastColors[toast.type]}`}>
              {(() => {
                const Icon = toastIcon[toast.type];
                return (
                  <motion.span
                    initial={{ rotate: -20, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: 'spring', damping: 15 }}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                  </motion.span>
                );
              })()}
              <span className="flex-1">{toast.message}</span>
              <button
                onClick={() => setToast(null)}
                className="p-0.5 opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Dismiss notification"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            {/* Progress bar */}
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: 3.5, ease: 'linear' }}
              className={`h-0.5 rounded-b-xl origin-left ${
                toast.type === 'success'
                  ? 'bg-emerald-400 dark:bg-emerald-600'
                  : toast.type === 'error'
                  ? 'bg-red-400 dark:bg-red-600'
                  : 'bg-blue-400 dark:bg-blue-600'
              }`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
