// ─── Dashboard Stats ────────────────────────────────────────────────────────
export const dashboardStats = [
  { id: 1, label: 'Total Contacts',    value: '48,392', change: '+12.4%', up: true,  icon: 'Users' },
  { id: 2, label: 'Emails Sent',       value: '1.2M',   change: '+8.1%',  up: true,  icon: 'Send' },
  { id: 3, label: 'Avg. Open Rate',    value: '34.7%',  change: '+2.3%',  up: true,  icon: 'MailOpen' },
  { id: 4, label: 'Unsubscribes',      value: '1,024',  change: '-0.5%',  up: false, icon: 'UserMinus' },
];

export const emailPerformanceData = [
  { month: 'Jan', sent: 85000,  opened: 29000, clicked: 9800 },
  { month: 'Feb', sent: 92000,  opened: 31500, clicked: 10200 },
  { month: 'Mar', sent: 110000, opened: 39000, clicked: 14500 },
  { month: 'Apr', sent: 98000,  opened: 35000, clicked: 12000 },
  { month: 'May', sent: 125000, opened: 46000, clicked: 17800 },
  { month: 'Jun', sent: 140000, opened: 52000, clicked: 21000 },
  { month: 'Jul', sent: 135000, opened: 49000, clicked: 19500 },
];

export const channelBreakdown = [
  { name: 'Email',     value: 62, color: '#3355ff' },
  { name: 'LinkedIn',  value: 28, color: '#7b5ea7' },
  { name: 'SMS',       value: 10, color: '#06b6d4' },
];

export const recentCampaigns = [
  { id: 1, name: 'Summer Product Launch',    status: 'Active',    sent: 24500, openRate: '38.2%', clickRate: '12.4%', date: 'Jun 28, 2025' },
  { id: 2, name: 'Re-engagement Series',     status: 'Completed', sent: 8200,  openRate: '21.5%', clickRate: '6.1%',  date: 'Jun 22, 2025' },
  { id: 3, name: 'Welcome Automation',       status: 'Active',    sent: 1800,  openRate: '58.4%', clickRate: '24.3%', date: 'Ongoing' },
  { id: 4, name: 'Q2 Newsletter',            status: 'Draft',     sent: 0,     openRate: '—',     clickRate: '—',     date: 'Scheduled Jul 5' },
  { id: 5, name: 'LinkedIn Outreach Wave 3', status: 'Paused',    sent: 3400,  openRate: '44.1%', clickRate: '18.7%', date: 'Jun 15, 2025' },
];

// ─── Campaigns ───────────────────────────────────────────────────────────────
export const campaigns = [
  { id: 1,  name: 'Summer Product Launch',        type: 'Email',    status: 'Active',    audience: 'All Subscribers',      sent: 24500, openRate: '38.2%', clickRate: '12.4%', created: 'Jun 28, 2025', tags: ['Product'] },
  { id: 2,  name: 'Re-engagement Series',         type: 'Email',    status: 'Completed', audience: 'Inactive 90d',         sent: 8200,  openRate: '21.5%', clickRate: '6.1%',  created: 'Jun 22, 2025', tags: ['Automation'] },
  { id: 3,  name: 'Welcome Automation',           type: 'Email',    status: 'Active',    audience: 'New Signups',          sent: 1800,  openRate: '58.4%', clickRate: '24.3%', created: 'May 01, 2025', tags: ['Onboarding', 'Automation'] },
  { id: 4,  name: 'Q2 Newsletter',                type: 'Email',    status: 'Draft',     audience: 'Newsletter List',      sent: 0,     openRate: '—',     clickRate: '—',     created: 'Jun 30, 2025', tags: ['Newsletter'] },
  { id: 5,  name: 'LinkedIn Outreach Wave 3',     type: 'LinkedIn', status: 'Paused',    audience: 'Enterprise Leads',     sent: 3400,  openRate: '44.1%', clickRate: '18.7%', created: 'Jun 15, 2025', tags: ['Outreach'] },
  { id: 6,  name: 'Black Friday Teaser',          type: 'Email',    status: 'Draft',     audience: 'E-commerce Segment',   sent: 0,     openRate: '—',     clickRate: '—',     created: 'Jul 01, 2025', tags: ['Promotion'] },
  { id: 7,  name: 'Webinar Invite — AI Summit',   type: 'Email',    status: 'Completed', audience: 'Tech Professionals',   sent: 12800, openRate: '41.0%', clickRate: '22.1%', created: 'May 20, 2025', tags: ['Event'] },
  { id: 8,  name: 'Cold Outreach Batch #5',       type: 'LinkedIn', status: 'Active',    audience: 'SMB Decision Makers',  sent: 6700,  openRate: '36.5%', clickRate: '14.3%', created: 'Jun 25, 2025', tags: ['Outreach'] },
  { id: 9,  name: 'Upsell — Pro Plan',            type: 'Email',    status: 'Completed', audience: 'Free Plan Users',      sent: 5400,  openRate: '29.8%', clickRate: '9.5%',  created: 'Jun 10, 2025', tags: ['Upsell'] },
  { id: 10, name: 'Product Update v2.4',          type: 'Email',    status: 'Completed', audience: 'All Users',            sent: 31000, openRate: '55.2%', clickRate: '31.0%', created: 'Jun 05, 2025', tags: ['Product'] },
];

// ─── Contacts ────────────────────────────────────────────────────────────────
export const contacts = [
  { id: 1,  name: 'Priya Sharma',     email: 'priya.sharma@techwave.in',      company: 'TechWave',      status: 'Subscribed',   tags: ['Enterprise', 'Hot Lead'], lastActivity: '2 hours ago',    location: 'Mumbai' },
  { id: 2,  name: 'Arjun Mehta',      email: 'arjun.m@growfast.co',           company: 'GrowFast',      status: 'Subscribed',   tags: ['SMB'],                    lastActivity: 'Yesterday',      location: 'Bengaluru' },
  { id: 3,  name: 'Sunita Rao',       email: 'sunita@nexgenio.com',           company: 'NexGen IO',     status: 'Unsubscribed', tags: ['Churned'],                lastActivity: '3 days ago',     location: 'Hyderabad' },
  { id: 4,  name: 'Vikram Desai',     email: 'vikram.desai@cloudminds.io',    company: 'CloudMinds',    status: 'Subscribed',   tags: ['Enterprise'],             lastActivity: '5 hours ago',    location: 'Pune' },
  { id: 5,  name: 'Ananya Krishnan',  email: 'ananya.k@futurestack.dev',      company: 'FutureStack',   status: 'Bounced',      tags: ['Invalid'],                lastActivity: '1 week ago',     location: 'Chennai' },
  { id: 6,  name: 'Rohan Patel',      email: 'rohan@scalex.io',               company: 'ScaleX',        status: 'Subscribed',   tags: ['Hot Lead', 'SMB'],        lastActivity: 'Just now',       location: 'Ahmedabad' },
  { id: 7,  name: 'Deepa Nair',       email: 'deepa.nair@insightlab.ai',      company: 'InsightLab AI', status: 'Subscribed',   tags: ['Prospect'],               lastActivity: '4 hours ago',    location: 'Kochi' },
  { id: 8,  name: 'Karan Singhania',  email: 'karan.s@hyperlaunch.in',        company: 'HyperLaunch',   status: 'Subscribed',   tags: ['Enterprise', 'Upsell'],   lastActivity: 'Yesterday',      location: 'Delhi' },
  { id: 9,  name: 'Meera Iyer',       email: 'meera.iyer@datapilot.co',       company: 'DataPilot',     status: 'Subscribed',   tags: ['Newsletter'],             lastActivity: '2 days ago',     location: 'Bengaluru' },
  { id: 10, name: 'Aditya Bansal',    email: 'aditya.b@quantumleap.io',       company: 'QuantumLeap',   status: 'Unsubscribed', tags: ['Churned'],                lastActivity: '2 weeks ago',    location: 'Jaipur' },
  { id: 11, name: 'Sneha Kulkarni',   email: 'sneha.k@launchpad.tech',        company: 'LaunchPad',     status: 'Subscribed',   tags: ['Hot Lead'],               lastActivity: '1 hour ago',     location: 'Pune' },
  { id: 12, name: 'Rahul Gupta',      email: 'rahul.gupta@orbitmedia.co',     company: 'OrbitMedia',    status: 'Subscribed',   tags: ['SMB', 'Prospect'],        lastActivity: '3 hours ago',    location: 'Mumbai' },
];

// ─── Segments ────────────────────────────────────────────────────────────────
export const segments = [
  { id: 1, name: 'All Subscribers',    count: 48392, description: 'All active subscribed contacts' },
  { id: 2, name: 'New Signups',        count: 1240,  description: 'Joined in the last 7 days' },
  { id: 3, name: 'Inactive 90d',       count: 8200,  description: 'No opens in 90 days' },
  { id: 4, name: 'Enterprise Leads',   count: 3400,  description: 'Company size > 500 employees' },
  { id: 5, name: 'Free Plan Users',    count: 5400,  description: 'Currently on free tier' },
  { id: 6, name: 'Hot Leads',          count: 780,   description: 'Opened 3+ campaigns in 30 days' },
  { id: 7, name: 'Newsletter List',    count: 22000, description: 'Opted into newsletter' },
  { id: 8, name: 'SMB Decision Makers',count: 6700,  description: 'Company size 10–200, C-level' },
];

export const statusColors = {
  Active:    'badge-green',
  Completed: 'badge-blue',
  Draft:     'badge-gray',
  Paused:    'badge-orange',
  Scheduled: 'badge-purple',
};

export const contactStatusColors = {
  Subscribed:   'badge-green',
  Unsubscribed: 'badge-gray',
  Bounced:      'badge-red',
};
