import { motion } from 'framer-motion'

export default function ProjectModal({ active, galleryIndex, setGalleryIndex, onClose }) {
	if (!active) return null
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 z-[70] grid place-items-center bg-slate-950/70 p-4 backdrop-blur"
		>
			<div className="max-h-[85vh] w-full max-w-3xl overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
				<div className="flex items-center justify-between border-b border-slate-800 p-4">
					<div>
						<div className="text-sm uppercase tracking-widest text-indigo-400">{active.tag}</div>
						<h3 className="text-xl font-semibold">{active.title}</h3>
					</div>
					<button onClick={onClose} className="rounded-xl border border-slate-700 px-3 py-1 text-sm text-slate-300 hover:bg-slate-800">Close</button>
				</div>
				<div className="grid gap-4 p-4 md:grid-cols-2">
					<div className="flex flex-col">
						<div className="relative mb-3 aspect-[4/3] overflow-hidden rounded-xl">
							<img loading="lazy" src={active.images[galleryIndex]} alt={`Preview ${galleryIndex + 1}`} className="absolute inset-0 h-full w-full object-cover" />
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent" />
						</div>
						<div className="flex gap-2 overflow-x-auto pb-1">
							{active.images.map((src, i) => (
								<button
									key={src}
									onClick={() => setGalleryIndex(i)}
									className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border ${i === galleryIndex ? 'border-indigo-500' : 'border-slate-800'}`}
								>
									<img src={src} alt={`thumb ${i + 1}`} className="h-full w-full object-cover" />
								</button>
							))}
						</div>
					</div>
					<div className="flex flex-col">
						<p className="text-slate-300">{active.details}</p>
						<div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
							{active.tech.map((t) => (
								<span key={t} className="rounded-xl border border-slate-800 px-2 py-1">{t}</span>
							))}
						</div>
						<a href="#contact" className="mt-5 inline-block self-start rounded-2xl bg-indigo-600 px-5 py-3 text-white shadow transition-colors hover:bg-indigo-500">Request demo</a>
					</div>
				</div>
			</div>
		</motion.div>
	)
}
