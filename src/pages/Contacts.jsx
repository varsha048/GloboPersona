import React, { useState, useMemo } from 'react'
import Layout from '../components/layout/Layout'
import { SearchBar, TabBar, Pagination, TagChip } from '../components/ui/index'
import { contacts, contactStatusColors } from '../data/mockData'
import {
  UserPlus, Upload, Download, MoreHorizontal, Mail, Linkedin,
  Trash2, Tag, ArrowUpDown, MapPin
} from 'lucide-react'

const TABS = [
  { label: 'All',           value: 'all',           count: contacts.length },
  { label: 'Subscribed',    value: 'Subscribed',    count: contacts.filter(c => c.status === 'Subscribed').length },
  { label: 'Unsubscribed',  value: 'Unsubscribed',  count: contacts.filter(c => c.status === 'Unsubscribed').length },
  { label: 'Bounced',       value: 'Bounced',       count: contacts.filter(c => c.status === 'Bounced').length },
]

function Avatar({ name }) {
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('')
  const colors = [
    'from-brand-400 to-blue-500',
    'from-purple-400 to-pink-500',
    'from-emerald-400 to-teal-500',
    'from-orange-400 to-red-500',
    'from-cyan-400 to-blue-500',
  ]
  const color = colors[name.charCodeAt(0) % colors.length]
  return (
    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white text-xs font-bold shrink-0`}>
      {initials}
    </div>
  )
}

export default function Contacts() {
  const [tab,      setTab]      = useState('all')
  const [query,    setQuery]    = useState('')
  const [page,     setPage]     = useState(1)
  const [selected, setSelected] = useState([])
  const [openMenu, setOpenMenu] = useState(null)
  const PER_PAGE = 10

  const filtered = useMemo(() => contacts.filter(c => {
    const matchTab = tab === 'all' || c.status === tab
    const matchQ   = !query || c.name.toLowerCase().includes(query.toLowerCase()) || c.email.toLowerCase().includes(query.toLowerCase()) || c.company.toLowerCase().includes(query.toLowerCase())
    return matchTab && matchQ
  }), [tab, query])

  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  const toggleSelect = (id) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id])
  const toggleAll    = () => setSelected(s => s.length === paged.length ? [] : paged.map(c => c.id))

  return (
    <Layout title="Contacts" subtitle={`${contacts.length.toLocaleString()} total contacts`}>
      <div className="card animate-fade-in-up">
        {/* Toolbar */}
        <div className="p-4 border-b border-surface-100 flex flex-wrap items-center justify-between gap-3">
          <TabBar tabs={TABS} active={tab} onChange={v => { setTab(v); setPage(1) }} />
          <div className="flex items-center gap-2">
            <SearchBar value={query} onChange={v => { setQuery(v); setPage(1) }} placeholder="Search contacts…" />
            <button className="btn-secondary btn-sm gap-1.5">
              <Upload size={13} /> Import
            </button>
            <button className="btn-secondary btn-sm gap-1.5">
              <Download size={13} /> Export
            </button>
            <button className="btn-primary btn-sm gap-1.5">
              <UserPlus size={13} /> Add Contact
            </button>
          </div>
        </div>

        {/* Bulk action bar */}
        {selected.length > 0 && (
          <div className="bg-brand-50 border-b border-brand-100 px-4 py-2.5 flex items-center gap-3 animate-fade-in">
            <span className="text-sm font-semibold text-brand-700">{selected.length} selected</span>
            <div className="flex items-center gap-2 ml-auto">
              <button className="btn-secondary btn-sm gap-1"><Mail size={12} /> Send Email</button>
              <button className="btn-secondary btn-sm gap-1"><Tag size={12} /> Add Tag</button>
              <button className="btn-danger btn-sm gap-1"><Trash2 size={12} /> Delete</button>
            </div>
          </div>
        )}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-100">
                <th className="table-head w-10">
                  <input
                    type="checkbox"
                    className="rounded border-surface-300"
                    checked={selected.length === paged.length && paged.length > 0}
                    onChange={toggleAll}
                  />
                </th>
                <th className="table-head text-left">
                  <button className="flex items-center gap-1 hover:text-surface-600">
                    Contact <ArrowUpDown size={11} />
                  </button>
                </th>
                <th className="table-head text-left">Company</th>
                <th className="table-head text-left">Status</th>
                <th className="table-head text-left">Tags</th>
                <th className="table-head text-left">Location</th>
                <th className="table-head text-left">Last Activity</th>
                <th className="table-head text-right"></th>
              </tr>
            </thead>
            <tbody>
              {paged.map((c, i) => (
                <tr
                  key={c.id}
                  className={`table-row animate-fade-in-up ${selected.includes(c.id) ? 'bg-brand-50' : ''}`}
                  style={{ animationDelay: `${i * 35}ms` }}
                >
                  <td className="table-cell" onClick={e => e.stopPropagation()}>
                    <input
                      type="checkbox"
                      className="rounded border-surface-300"
                      checked={selected.includes(c.id)}
                      onChange={() => toggleSelect(c.id)}
                    />
                  </td>
                  <td className="table-cell">
                    <div className="flex items-center gap-3">
                      <Avatar name={c.name} />
                      <div>
                        <p className="font-semibold text-surface-800 text-sm hover:text-brand-600 cursor-pointer">{c.name}</p>
                        <p className="text-xs text-surface-400">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="table-cell text-surface-600 text-sm">{c.company}</td>
                  <td className="table-cell">
                    <span className={contactStatusColors[c.status]}>{c.status}</span>
                  </td>
                  <td className="table-cell">
                    <div className="flex flex-wrap gap-1">
                      {c.tags.slice(0, 2).map(t => <TagChip key={t} label={t} />)}
                      {c.tags.length > 2 && <TagChip label={`+${c.tags.length - 2}`} />}
                    </div>
                  </td>
                  <td className="table-cell">
                    <div className="flex items-center gap-1 text-surface-400 text-xs">
                      <MapPin size={11} />
                      {c.location}
                    </div>
                  </td>
                  <td className="table-cell text-surface-400 text-xs">{c.lastActivity}</td>
                  <td className="table-cell text-right" onClick={e => e.stopPropagation()}>
                    <div className="flex items-center justify-end gap-1">
                      <button className="btn-ghost p-1.5 rounded-lg" title="Send email">
                        <Mail size={13} className="text-surface-400 hover:text-brand-500" />
                      </button>
                      <button className="btn-ghost p-1.5 rounded-lg" title="LinkedIn">
                        <Linkedin size={13} className="text-surface-400 hover:text-blue-600" />
                      </button>
                      <div className="relative">
                        <button
                          className="btn-ghost p-1.5 rounded-lg"
                          onClick={() => setOpenMenu(openMenu === c.id ? null : c.id)}
                        >
                          <MoreHorizontal size={14} />
                        </button>
                        {openMenu === c.id && (
                          <div className="absolute right-0 top-8 bg-white border border-surface-100 shadow-card rounded-xl py-1 z-10 w-40 animate-fade-in">
                            <button className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-surface-600 hover:bg-surface-50">
                              <Tag size={13} /> Edit Tags
                            </button>
                            <button className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-surface-600 hover:bg-surface-50">
                              <Download size={13} /> Export
                            </button>
                            <div className="border-t border-surface-100 my-1" />
                            <button className="w-full flex items-center gap-2.5 px-3.5 py-2 text-sm text-red-500 hover:bg-red-50">
                              <Trash2 size={13} /> Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="py-14 text-center text-surface-400 text-sm">
              No contacts found matching your search.
            </div>
          )}
        </div>

        <Pagination page={page} total={filtered.length} perPage={PER_PAGE} onChange={setPage} />
      </div>
    </Layout>
  )
}
