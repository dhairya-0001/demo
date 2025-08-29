import { motion } from 'framer-motion'
import logo from '../assets/Logo.jpg'

export default function Hero() {
	return (
		<section id="home" className="section-sep relative">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.14),transparent_70%)]" />
			<div className="container grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="space-y-6"
				>
					<p className="text-sm font-medium uppercase tracking-widest text-indigo-400">Creative Engineering</p>
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl">We Craft Your Imagination Into Reality.</h1>
					<p className="text-slate-300">WORXELITE blends software engineering, AI, and design to ship polished web apps, sites, and tools.</p>
					<div className="flex flex-wrap gap-3">
						<a href="#projects" className="rounded-2xl bg-indigo-600 px-5 py-3 text-white shadow transition-colors hover:bg-indigo-500">See work</a>
						<a href="#contact" className="rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3 shadow transition-shadow hover:shadow-md">Get in touch</a>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.1, duration: 0.6 }}
					className="relative"
				>
					<div className="mx-auto h-48 w-48 overflow-hidden rounded-3xl border border-slate-800 shadow-2xl sm:h-56 sm:w-56">
						<img src={logo} alt="Brand" className="h-full w-full object-contain" />
					</div>
					<div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-3xl bg-indigo-500/10 blur-2xl" />
				</motion.div>
			</div>
		</section>
	)
}
