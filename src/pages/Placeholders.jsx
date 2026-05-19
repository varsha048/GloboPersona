import React from 'react'
import Layout from '../components/layout/Layout'
import { Zap, BarChart2, Tag, Inbox, Settings, HelpCircle, Construction } from 'lucide-react'

function Placeholder({ title, subtitle, icon: Icon }) {
  return (
    <Layout title={title} subtitle={subtitle}>
      <div className="flex flex-col items-center justify-center h-96 text-center animate-fade-in-up">
        <div className="w-16 h-16 rounded-2xl bg-surface-100 flex items-center justify-center mb-4">
          <Icon size={28} className="text-surface-300" />
        </div>
        <h2 className="font-display text-xl font-bold text-surface-700 mb-2">{title}</h2>
        <p className="text-surface-400 text-sm max-w-xs">
          This section is part of the full build. Coming soon in the complete implementation.
        </p>
        <span className="mt-4 badge badge-orange gap-1.5">
          <Construction size={11} /> In Development
        </span>
      </div>
    </Layout>
  )
}

export const AutomationPage = () => <Placeholder title="Automation" subtitle="Build automated workflows and sequences" icon={Zap} />
export const AnalyticsPage  = () => <Placeholder title="Analytics"  subtitle="Deep insights into campaign performance" icon={BarChart2} />
export const SegmentsPage   = () => <Placeholder title="Segments"   subtitle="Create and manage audience segments" icon={Tag} />
export const InboxPage      = () => <Placeholder title="Inbox"      subtitle="Replies and conversations" icon={Inbox} />
export const SettingsPage   = () => <Placeholder title="Settings"   subtitle="Account, integrations, and preferences" icon={Settings} />
export const HelpPage       = () => <Placeholder title="Help & Docs" subtitle="Documentation and support" icon={HelpCircle} />
