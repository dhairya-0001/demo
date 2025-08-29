import { motion } from 'framer-motion'
import TiltCard from '../components/common/TiltCard'
import { projects } from '../lib/projects-data'

export default function Projects({ onOpen }) {
	return (
		<section id="projects" className="section-sep py-16 md:py-24">
			<div className="container">
				<h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
				<div className="grid gap-6 md:grid-cols-3">
					{projects.map((p, idx) => (
						<TiltCard key={p.title}>
							<motion.button
								onClick={() => onOpen(p)}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.05, duration: 0.5 }}
								className="group w-full text-left overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-sm transition-transform hover:-translate-y-1 focus:outline-none"
							>
								<div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
									<img src={p.image} alt={p.title} className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]" />
								</div>
								<div className="space-y-1 p-5">
									<div className="flex items-center justify-between">
										<span className="text-xs uppercase tracking-widest text-indigo-400">{p.tag}</span>
									</div>
									<h3 className="text-lg font-semibold">{p.title}</h3>
									<p className="text-sm text-slate-300">{p.summary}</p>
									<div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-400">
										{p.tech.map((t) => (
											<span key={t} className="rounded-xl border border-slate-800 px-2 py-1">
												{t}
											</span>
										))}
									</div>
								</div>
							</motion.button>
						</TiltCard>
					))}
				</div>
			</div>
		</section>
	)
}
