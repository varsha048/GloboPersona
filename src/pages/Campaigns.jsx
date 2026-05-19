import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { Badge, SearchBar, TabBar, Pagination, TagChip } from '../components/ui/index'
import { campaigns, statusColors } from '../data/mockData'
import {
  Plus, MoreHorizontal, Mail, Linkedin, Copy, Trash2,
  Eye, Pause, Play, ArrowUpDown
} from 'lucide-react'

const TYPE_ICON = { Email: Mail, LinkedIn: Linkedin }

const TABS = [
  { label: 'All',       value: 'all',       count: campaigns.length },
  { label: 'Active',    value: 'Active',    count: campaigns.filter(c => c.status === 'Active').length },
  { label: 'Draft',     value: 'Draft',     count: campaigns.filter(c => c.status === 'Draft').length },
  { label: 'Completed', value: 'Completed', count: campaigns.filter(c => c.status === 'Completed').length },
  { label: 'Paused',    value: 'Paused',    count: campaigns.filter(c => c.status === 'Paused').length },
]

export default function Campaigns() {
  const navigate = useNavigate()
  const [tab,   setTab]   = useState('all')
  const [query, setQuery] = useState('')
  const [page,  setPage]  = useState(1)
  const [openMenu, setOpenMenu] = useState(null)
  const PER_PAGE = 8

  const filtered = useMemo(() => campaigns.filter(c => {
    const matchTab = tab === 'all' || c.status === tab
    const matchQ   = !query || c.name.toLowerCase().includes(query.toLowerCase())
    return matchTab && matchQ
  }), [tab, query])

  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const handleTabChange = (v) => { setTab(v); setPage(1) }
  const handleQuery     = (v) => { setQuery(v); setPage(1) }

  return (
    <Layout title="Campaigns" subtitle="Manage all your email and LinkedIn campaigns">
      <div className="card animate-fade-in-up">
        {/* Toolbar */}
        <div className="p-4 border-b border-surface-100 flex flex-wrap items-center justify-between gap-3">
          <TabBar tabs={TABS} active={tab} onChange={handleTabChange} />
          <div className="flex items-center gap-2">
            <SearchBar value={query} onChange={handleQuery} placeholder="Search campaigns…" />
            <button
              onClick={() => navigate('/campaigns/create')}
              className="btn-primary btn-sm"
            >
              <Plus size={14} /> New Campaign
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-100">
                <th className="table-head text-left">
                  <input type="checkbox" className="rounded border-surface-300" />
                </th>
                <th className="table-head text-left">
                  <button className="flex items-center gap-1 hover:text-surface-600">
                    Campaign <ArrowUpDown size={11} />
                  </button>
                </th>
                <th className="table-head text-left">Status</th>
                <th className="table-head text-left">Type</th>
                <th className="table-head text-left">Audience</th>
                <th className="table-head text-right">Sent</th>
                <th className="table-head text-right">Open Rate</th>
                <th className="table-head text-right">Click Rate</th>
                <th className="table-head text-left">Tags</th>
                <th className="table-head text-right">Created</th>
                <th className="table-head text-right"></th>
              </tr>
            </thead>
            <tbody>
              {paged.map((c, i) => {
                const TypeIcon = TYPE_ICON[c.type] || Mail
                return (
                  <tr
                    key={c.id}
                    className="table-row cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${i * 40}ms` }}
                    onClick={() => navigate(`/campaigns/${c.id}`)}
                  >
                    <td className="table-cell" onClick={e => e.stopPropagation()}>
                      <input type="checkbox" className="rounded border-surface-300" />
                    </td>
                    <td className="table-cell">
                      <p className="font-semibold text-surface-800 hover:text-brand-600 transition-colors">{c.name}</p>
                    </td>
                    <td className="table-cell">
                      <span className={statusColors[c.status]}>{c.status}</span>
                    </td>
                    <td className="table-cell">
                      <div className="flex items-center gap-1.5 text-surface-500 text-xs">
                        <TypeIcon size={13} />
                        {c.type}
                      </div>
                    </td>
                    <td className="table-cell text-surface-500 text-xs max-w-[140px] truncate">{c.audience}</td>
                    <td className="table-cell text-right font-mono text-surface-600 text-xs">
                      {c.sent > 0 ? c.sent.toLocaleString() : <span className="text-surface-300">—</span>}
                    </td>
                    <td className="table-cell text-right text-surface-600 text-xs">
                      {c.openRate !== '—' ? (
                        <span className={parseFloat(c.openRate) > 40 ? 'text-emerald-600 font-semibold' : ''}>
                          {c.openRate}
                        </span>
                      ) : <span className="text-surface-300">—</span>}
                    </td>
                    <td className="table-cell text-right text-surface-600 text-xs">{c.clickRate}</td>
                    <td className="table-cell">
                      <div className="flex flex-wrap gap-1">
                        {c.tags.map(t => <TagChip key={t} label={t} />)}
                      </div>
                    </td>
                    <td className="table-cell text-right text-surface-400 text-xs whitespace-nowrap">{c.created}</td>
                    <td className="table-cell text-right" onClick={e => e.stopPropagation()}>
                      <div className="relative">
                        <button
                          className="btn-ghost p-1.5 rounded-lg"
                          onClick={() => setOpenMenu(openMenu === c.id ? null : c.id)}
                        >
                          <MoreHorizontal size={15} />
                        </button>
                        {openMenu === c.id && (
                          <div className="absolute right-0 top-8 bg-white border border-surface-100 shadow-card rounded-xl py-1 z-10 w-44 animate-fade-in">
                            <button className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-surface-600 hover:bg-surface-50">
                              <Eye size={13} /> View Details
                            </button>
                            <button className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-surface-600 hover:bg-surface-50">
                              {c.status === 'Active' ? <Pause size={13} /> : <Play size={13} />}
                              {c.status === 'Active' ? 'Pause' : 'Resume'}
                            </button>
                            <button className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-surface-600 hover:bg-surface-50">
                              <Copy size={13} /> Duplicate
                            </button>
                            <div className="border-t border-surface-100 my-1" />
                            <button className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-red-500 hover:bg-red-50">
                              <Trash2 size={13} /> Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <p className="text-surface-400 text-sm">No campaigns match your search.</p>
            </div>
          )}
        </div>

        <Pagination page={page} total={filtered.length} perPage={PER_PAGE} onChange={setPage} />
      </div>
    </Layout>
  )
}
