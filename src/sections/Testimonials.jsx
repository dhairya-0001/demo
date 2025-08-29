import { motion } from 'framer-motion'

export default function Testimonials() {
	const testimonials = [
		{ name: 'Ananya Gupta', quote: 'Professional, fast and data-driven. We hit profitability in month two.' },
		{ name: 'Rahul Verma', quote: 'The new landing doubled trials. Clear copy + clean design.' },
		{ name: 'Priya Shah', quote: 'Loved the brand kit. Everything feels consistent and premium.' },
	]
	return (
		<section id="testimonials" className="section-sep py-16 md:py-24">
			<div className="container">
				<h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">What clients say</h2>
				<div className="grid gap-6 md:grid-cols-3">
					{testimonials.map((t, i) => (
						<motion.div
							key={t.name}
							initial={{ opacity: 0, y: 16 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: i * 0.05, duration: 0.45 }}
							className="rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-sm"
						>
							<p className="mb-4 text-slate-300">“{t.quote}”</p>
							<div className="text-sm font-medium">{t.name}</div>
							<div className="text-xs text-slate-400">{t.role}</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
