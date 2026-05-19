import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Dashboard      from './pages/Dashboard'
import Campaigns      from './pages/Campaigns'
import CreateCampaign from './pages/CreateCampaign'
import Contacts       from './pages/Contacts'
import Login          from './pages/Login'
import Register       from './pages/Register'
import {
  AutomationPage, AnalyticsPage, SegmentsPage,
  InboxPage, SettingsPage, HelpPage
} from './pages/Placeholders'

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem('loggedIn') === 'true'
  return isAuthenticated ? children : <Navigate to="/login" replace />
}

export default function App() {
  const isAuthenticated = localStorage.getItem('loggedIn') === 'true'

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/campaigns" element={<PrivateRoute><Campaigns /></PrivateRoute>} />
      <Route path="/campaigns/create" element={<PrivateRoute><CreateCampaign /></PrivateRoute>} />
      <Route path="/campaigns/:id" element={<PrivateRoute><Campaigns /></PrivateRoute>} />
      <Route path="/contacts" element={<PrivateRoute><Contacts /></PrivateRoute>} />
      <Route path="/automation" element={<PrivateRoute><AutomationPage /></PrivateRoute>} />
      <Route path="/analytics" element={<PrivateRoute><AnalyticsPage /></PrivateRoute>} />
      <Route path="/segments" element={<PrivateRoute><SegmentsPage /></PrivateRoute>} />
      <Route path="/inbox" element={<PrivateRoute><InboxPage /></PrivateRoute>} />
      <Route path="/settings" element={<PrivateRoute><SettingsPage /></PrivateRoute>} />
      <Route path="/help" element={<PrivateRoute><HelpPage /></PrivateRoute>} />
    </Routes>
  )
}
