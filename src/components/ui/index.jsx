import React from 'react'
import { TrendingUp, TrendingDown, Users, Send, MailOpen, UserMinus, ChevronLeft, ChevronRight, SearchX } from 'lucide-react'

// ─── Stat Card ───────────────────────────────────────────────────────────────
const ICONS = { Users, Send, MailOpen, UserMinus }

export function StatCard({ label, value, change, up, icon, delay = 0 }) {
  const Icon = ICONS[icon] || Users
  return (
    <div className={`stat-card animate-fade-in-up`} style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-center justify-between">
        <p className="text-sm text-surface-500 font-medium">{label}</p>
        <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center">
          <Icon size={16} className="text-brand-500" />
        </div>
      </div>
      <div>
        <p className="text-2xl font-display font-bold text-surface-900">{value}</p>
        <div className={`flex items-center gap-1 mt-1 text-xs font-semibold ${up ? 'text-emerald-600' : 'text-red-500'}`}>
          {up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          <span>{change} vs last month</span>
        </div>
      </div>
    </div>
  )
}

// ─── Badge ───────────────────────────────────────────────────────────────────
export function Badge({ children, variant = 'badge-gray' }) {
  return <span className={variant}>{children}</span>
}

// ─── Empty State ─────────────────────────────────────────────────────────────
export function EmptyState({ icon: Icon = SearchX, title, description, action }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-14 h-14 rounded-2xl bg-surface-100 flex items-center justify-center mb-4">
        <Icon size={24} className="text-surface-300" />
      </div>
      <p className="font-semibold text-surface-700 mb-1">{title}</p>
      <p className="text-sm text-surface-400 mb-5 max-w-xs">{description}</p>
      {action}
    </div>
  )
}

// ─── Pagination ──────────────────────────────────────────────────────────────
export function Pagination({ page, total, perPage, onChange }) {
  const totalPages = Math.ceil(total / perPage)
  const from = (page - 1) * perPage + 1
  const to = Math.min(page * perPage, total)

  return (
    <div className="flex items-center justify-between px-4 py-3 border-t border-surface-100">
      <p className="text-sm text-surface-400">
        Showing <span className="font-medium text-surface-600">{from}–{to}</span> of{' '}
        <span className="font-medium text-surface-600">{total.toLocaleString()}</span>
      </p>
      <div className="flex items-center gap-1">
        <button
          onClick={() => onChange(page - 1)}
          disabled={page === 1}
          className="btn-ghost btn-sm p-1.5 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={15} />
        </button>
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
          const p = i + 1
          return (
            <button
              key={p}
              onClick={() => onChange(p)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition-all ${
                p === page
                  ? 'bg-brand-500 text-white shadow-sm'
                  : 'text-surface-500 hover:bg-surface-100'
              }`}
            >
              {p}
            </button>
          )
        })}
        <button
          onClick={() => onChange(page + 1)}
          disabled={page === totalPages}
          className="btn-ghost btn-sm p-1.5 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={15} />
        </button>
      </div>
    </div>
  )
}

// ─── Tab Bar ─────────────────────────────────────────────────────────────────
export function TabBar({ tabs, active, onChange }) {
  return (
    <div className="flex items-center gap-1 bg-surface-100 rounded-xl p-1">
      {tabs.map(tab => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-150 ${
            active === tab.value
              ? 'bg-white text-surface-900 shadow-soft'
              : 'text-surface-500 hover:text-surface-700'
          }`}
        >
          {tab.label}
          {tab.count != null && (
            <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
              active === tab.value ? 'bg-brand-100 text-brand-600' : 'bg-surface-200 text-surface-500'
            }`}>
              {tab.count}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

// ─── Filter + Search Bar ─────────────────────────────────────────────────────
import { Search, Filter } from 'lucide-react'
export function SearchBar({ value, onChange, placeholder = 'Search...' }) {
  return (
    <div className="relative">
      <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-surface-400" />
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        className="input pl-9 w-64"
      />
    </div>
  )
}

// ─── Skeleton ────────────────────────────────────────────────────────────────
export function Skeleton({ className = '' }) {
  return <div className={`bg-surface-100 rounded-lg animate-pulse ${className}`} />
}

// ─── Tag Chip ────────────────────────────────────────────────────────────────
export function TagChip({ label }) {
  return (
    <span className="inline-block px-2 py-0.5 bg-surface-100 text-surface-500 text-xs rounded-md font-medium">
      {label}
    </span>
  )
}
