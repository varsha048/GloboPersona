import React from 'react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts'
import Layout from '../components/layout/Layout'
import { StatCard, Badge } from '../components/ui/index'
import {
  dashboardStats, emailPerformanceData, channelBreakdown, recentCampaigns, statusColors
} from '../data/mockData'
import { ArrowRight, Activity } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-white border border-surface-100 shadow-card rounded-xl p-3 text-xs">
      <p className="font-semibold text-surface-700 mb-2">{label}</p>
      {payload.map(p => (
        <div key={p.name} className="flex items-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color }} />
          <span className="text-surface-500 capitalize">{p.name}:</span>
          <span className="font-semibold text-surface-800">{p.value.toLocaleString()}</span>
        </div>
      ))}
    </div>
  )
}

export default function Dashboard() {
  const navigate = useNavigate()
  return (
    <Layout title="Dashboard" subtitle="Welcome back, Varshu">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {dashboardStats.map((s, i) => (
          <StatCard key={s.id} {...s} delay={i * 60} />
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
        {/* Email performance */}
        <div className="card p-5 lg:col-span-2 animate-fade-in-up stagger-3">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display font-bold text-surface-900">Email Performance</h2>
              <p className="text-xs text-surface-400 mt-0.5">Last 7 months</p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              {[
                { label: 'Sent',    color: '#3355ff' },
                { label: 'Opened',  color: '#06b6d4' },
                { label: 'Clicked', color: '#7b5ea7' },
              ].map(l => (
                <div key={l.label} className="flex items-center gap-1.5 text-surface-500">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ background: l.color }} />
                  {l.label}
                </div>
              ))}
            </div>
          </div>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={emailPerformanceData} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
              <defs>
                {[
                  { id: 'sent',    color: '#3355ff' },
                  { id: 'opened',  color: '#06b6d4' },
                  { id: 'clicked', color: '#7b5ea7' },
                ].map(g => (
                  <linearGradient key={g.id} id={g.id} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%"  stopColor={g.color} stopOpacity={0.15} />
                    <stop offset="95%" stopColor={g.color} stopOpacity={0} />
                  </linearGradient>
                ))}
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f2f8" />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#9ba3c0' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#9ba3c0' }} axisLine={false} tickLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="sent"    stroke="#3355ff" strokeWidth={2} fill="url(#sent)"    name="sent" />
              <Area type="monotone" dataKey="opened"  stroke="#06b6d4" strokeWidth={2} fill="url(#opened)"  name="opened" />
              <Area type="monotone" dataKey="clicked" stroke="#7b5ea7" strokeWidth={2} fill="url(#clicked)" name="clicked" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Channel breakdown */}
        <div className="card p-5 flex flex-col animate-fade-in-up stagger-4">
          <div className="mb-4">
            <h2 className="font-display font-bold text-surface-900">Channels</h2>
            <p className="text-xs text-surface-400 mt-0.5">Send distribution</p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <ResponsiveContainer width="100%" height={160}>
              <PieChart>
                <Pie
                  data={channelBreakdown}
                  cx="50%" cy="50%"
                  innerRadius={45} outerRadius={72}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {channelBreakdown.map(entry => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-2">
            {channelBreakdown.map(c => (
              <div key={c.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: c.color }} />
                  <span className="text-surface-600">{c.name}</span>
                </div>
                <span className="font-semibold text-surface-800">{c.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent campaigns */}
      <div className="card animate-fade-in-up stagger-5">
        <div className="flex items-center justify-between p-5 border-b border-surface-100">
          <div className="flex items-center gap-2">
            <Activity size={16} className="text-brand-500" />
            <h2 className="font-display font-bold text-surface-900">Recent Campaigns</h2>
          </div>
          <button
            onClick={() => navigate('/campaigns')}
            className="btn-ghost btn-sm gap-1"
          >
            View all <ArrowRight size={13} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-100">
                <th className="table-head text-left">Campaign</th>
                <th className="table-head text-left">Status</th>
                <th className="table-head text-right">Sent</th>
                <th className="table-head text-right">Open Rate</th>
                <th className="table-head text-right">Click Rate</th>
                <th className="table-head text-right">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentCampaigns.map(c => (
                <tr key={c.id} className="table-row cursor-pointer" onClick={() => navigate('/campaigns')}>
                  <td className="table-cell font-medium text-surface-800">{c.name}</td>
                  <td className="table-cell">
                    <span className={statusColors[c.status]}>{c.status}</span>
                  </td>
                  <td className="table-cell text-right font-mono text-surface-600">{c.sent > 0 ? c.sent.toLocaleString() : '—'}</td>
                  <td className="table-cell text-right text-surface-600">{c.openRate}</td>
                  <td className="table-cell text-right text-surface-600">{c.clickRate}</td>
                  <td className="table-cell text-right text-surface-400 text-xs">{c.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
