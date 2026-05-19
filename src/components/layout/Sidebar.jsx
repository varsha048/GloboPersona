import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Send, Users, Zap, BarChart2,
  Settings, ChevronLeft, ChevronRight, Bell,
  Globe, Inbox, Tag, HelpCircle, LogOut
} from 'lucide-react'

const NAV = [
  { group: 'Main', items: [
    { to: '/dashboard',  icon: LayoutDashboard, label: 'Dashboard' },
    { to: '/campaigns',  icon: Send,            label: 'Campaigns' },
    { to: '/contacts',   icon: Users,           label: 'Contacts' },
    { to: '/automation', icon: Zap,             label: 'Automation' },
    { to: '/inbox',      icon: Inbox,           label: 'Inbox' },
  ]},
  { group: 'Insights', items: [
    { to: '/analytics',  icon: BarChart2,       label: 'Analytics' },
    { to: '/segments',   icon: Tag,             label: 'Segments' },
  ]},
  { group: 'Account', items: [
    { to: '/settings',   icon: Settings,        label: 'Settings' },
    { to: '/help',       icon: HelpCircle,      label: 'Help & Docs' },
  ]},
]

export default function Sidebar({ collapsed, setCollapsed }) {
  return (
    <aside className={`
      relative flex flex-col bg-white border-r border-surface-100 h-screen
      transition-all duration-300 ease-in-out shrink-0
      ${collapsed ? 'w-16' : 'w-60'}
    `}>
      {/* Logo */}
      <div className={`flex items-center gap-2.5 px-4 py-5 border-b border-surface-100 ${collapsed ? 'justify-center px-2' : ''}`}>
        <div className="w-8 h-8 rounded-xl bg-brand-500 flex items-center justify-center shrink-0">
          <Globe size={16} className="text-white" />
        </div>
        {!collapsed && (
          <span className="font-display font-bold text-surface-900 text-base tracking-tight">
            GloboPersona
          </span>
        )}
      </div>

        {/* Navigation*/}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-5">
        {NAV.map(group => (
          <div key={group.group}>
            {!collapsed && (
              <p className="px-3 mb-1.5 text-[10px] font-bold uppercase tracking-widest text-surface-300">
                {group.group}
              </p>
            )}
            <ul className="space-y-0.5">
              {group.items.map(({ to, icon: Icon, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `sidebar-item ${isActive ? 'sidebar-item-active' : ''} ${collapsed ? 'justify-center' : ''}`
                    }
                    title={collapsed ? label : undefined}
                  >
                    <Icon size={17} className="shrink-0" />
                    {!collapsed && <span>{label}</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* User */}
      <div className={`border-t border-surface-100 p-3 ${collapsed ? 'flex justify-center' : ''}`}>
        {collapsed ? (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
            AK
          </div>
        ) : (
          <div className="flex items-center gap-3 px-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
              VP
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-surface-800 truncate">Varshu</p>
              <p className="text-xs text-surface-400 truncate">Pro Plan</p>
            </div>
            <button className="btn-ghost btn-sm p-1.5">
              <LogOut size={14} />
            </button>
          </div>
        )}
      </div>

      {/* Collapse toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 w-6 h-6 rounded-full bg-white border border-surface-200 shadow-soft flex items-center justify-center text-surface-400 hover:text-surface-700 hover:border-surface-300 transition-all z-10"
      >
        {collapsed ? <ChevronRight size={12} /> : <ChevronLeft size={12} />}
      </button>
    </aside>
  )
}
