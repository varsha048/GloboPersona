import React, { useState } from 'react'
import { Search, Bell, Plus, ChevronDown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Topbar({ title, subtitle }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  return (
    <header className="h-16 bg-white border-b border-surface-100 flex items-center justify-between px-6 shrink-0">
      {/* Left: Page title */}
      <div>
        <h1 className="font-display font-bold text-surface-900 text-lg leading-tight">{title}</h1>
        {subtitle && <p className="text-xs text-surface-400 mt-0.5">{subtitle}</p>}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-surface-400" />
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search anything..."
            className="input pl-9 py-2 w-52 text-sm"
          />
        </div>

        {/* Notifications */}
        <button className="relative btn-ghost p-2 rounded-xl">
          <Bell size={17} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-brand-500 ring-2 ring-white" />
        </button>

        {/* New Campaign CTA */}
        <button
          onClick={() => navigate('/campaigns/create')}
          className="btn-primary btn-sm gap-1.5"
        >
          <Plus size={14} />
          New Campaign
        </button>
      </div>
    </header>
  )
}
