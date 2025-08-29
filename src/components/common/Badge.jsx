import { motion } from 'framer-motion'

export default function Badge({ children }) {
	return (
		<motion.span
			initial={{ y: 12, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ duration: 0.35 }}
			className="inline-flex items-center gap-2 rounded-full border border-slate-800/70 bg-slate-900/60 px-3 py-2 text-sm"
		>
			<span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
			{children}
		</motion.span>
	)
}
