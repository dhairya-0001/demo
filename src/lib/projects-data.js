import cDriveThumb from '../assets/images/C Drive Locker/OIP.webp'
import chatThumb from '../assets/images/Chat App/Chat.jpg'
import mds550 from '../assets/images/MDS/Screenshot 2025-08-28 144550.jpg'
import mds610 from '../assets/images/MDS/Screenshot 2025-08-28 144610.jpg'
import mds646 from '../assets/images/MDS/Screenshot 2025-08-28 144646.jpg'
import lmsThumb from '../assets/images/LMS/xfsdafdsafsaf.png'

export const projects = [
	{
		title: 'C Drive Locker',
		tag: 'Security',
		summary: 'Secure local drive access with encryption and quick unlock.',
		tech: ['Java', 'Security', 'Desktop'],
		image: cDriveThumb,
		details:
			'Encrypts and password-protects sensitive folders with recovery and audit logging.',
		images: [cDriveThumb],
	},
	{
		title: 'Chat Application',
		tag: 'Realtime',
		summary: 'Messaging with typing indicators and media sharing.',
		tech: ['Node', 'WebSockets', 'MongoDB'],
		image: chatThumb,
		details:
			'Realtime sockets, presence, read receipts, and file uploads with CDN.',
		images: [chatThumb],
	},
	{
		title: 'EOD Report Analyzer',
		tag: 'Analytics',
		summary: 'Automates end‑of‑day data parsing, visualization, and insights.',
		tech: ['Python', 'SQL', 'Charts'],
		image: mds610,
		details:
			'Parses CSV/Excel EOD reports, aggregates KPIs, and renders trend charts with exportable insights.',
		images: [mds646, mds550, mds610],
	},
	{
		title: 'MDS Solutions',
		tag: 'Web',
		summary: 'Corporate website and product showcase with premium motion.',
		tech: ['React', 'Tailwind', 'GSAP'],
		image: mds646,
		details:
			'Built a fast, responsive site for MDS Solutions with scroll-driven sections, product highlights, and lead capture.',
		images: [mds646, mds610, mds550],
	},
	{
		title: 'Library Management System',
		tag: 'CRUD',
		summary: 'Lending workflows and reports for collections.',
		tech: ['PostgreSQL', 'Express', 'React'],
		image: lmsThumb,
		details:
			'Manages books, borrowers, lending policies, and analytics dashboards.',
		images: [lmsThumb],
	},
]
