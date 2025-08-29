import { motion } from 'framer-motion'
import TiltCard from '../components/common/TiltCard'
import Icon from '../components/common/Icon'

export default function Offerings() {
	const items = [
		{ title: 'Web Apps', icon: 'laptop', desc: 'High‑performance React/Next.js builds with great UX.' },
		{ title: 'AI Integrations', icon: 'spark', desc: 'Chat, agents, and workflows powered by modern LLMs.' },
		{ title: 'APIs & Backends', icon: 'server', desc: 'Type‑safe Node/Express services and DB modeling.' },
		{ title: 'Design & Motion', icon: 'spark', desc: 'Premium UI kits, GSAP/Framer animations, micro‑interactions.' },
		{ title: '3D & Graphics', icon: 'cube', desc: 'Three.js/WebGL scenes, particles, and shaders.' },
		{ title: 'Deploy & Optimize', icon: 'cloud', desc: 'CI/CD, caching, observability, and Core Web Vitals.' },
	]
	return (
		<section id="offerings" className="section-sep py-16 md:py-24">
			<div className="container">
				<h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">What we do</h2>
				<div className="grid gap-6 md:grid-cols-3">
					{items.map((c, i) => (
						<TiltCard key={c.title}>
							<motion.div
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: i * 0.04, duration: 0.45 }}
								className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-sm transition-transform hover:-translate-y-1"
							>
								<div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-400/20 ring-1 ring-inset ring-slate-800">
									<Icon name={c.icon} className="h-5 w-5 text-indigo-400" />
								</div>
								<h3 className="text-lg font-semibold">{c.title}</h3>
								<p className="mt-1 text-sm text-slate-300">{c.desc}</p>
							</motion.div>
						</TiltCard>
					))}
				</div>
			</div>
		</section>
	)
}
