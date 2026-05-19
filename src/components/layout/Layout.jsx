import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout({ children, title, subtitle }) {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <div className="flex h-screen overflow-hidden bg-surface-50">
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
        <Topbar title={title} subtitle={subtitle} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
