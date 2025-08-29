export default function About() {
	const stats = [
		['6+ yrs', 'Experience'],
		['30+', 'Projects'],
		['12', 'Awards'],
		['100ms', 'Perf Target'],
	]
	return (
		<section id="about" className="section-sep py-16 md:py-24">
			<div className="container grid gap-10 md:grid-cols-2">
				<div>
					<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">About</h2>
					<p className="text-slate-300">
						We design and build interactive interfaces with a focus on motion and performance. We enjoy turning complex problems into elegant, tactile experiences.
					</p>
					<div className="mt-6 grid grid-cols-2 gap-4 text-sm">
						{stats.map(([a, b]) => (
							<div key={a} className="rounded-2xl border border-slate-800 p-4">
								<div className="text-2xl font-semibold">{a}</div>
								<div className="text-slate-400">{b}</div>
							</div>
						))}
					</div>
				</div>
				<div className="space-y-4">
					<div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
						<h3 className="mb-2 text-lg font-semibold">Core Skills</h3>
						<div className="flex flex-wrap gap-2 text-sm text-slate-300">
							{['React', 'Next.js', 'GSAP', 'Three.js', 'Design Systems', 'SEO'].map((s) => (
								<span key={s} className="rounded-xl border border-slate-800 px-3 py-1">{s}</span>
							))}
						</div>
					</div>
					<div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
						<h3 className="mb-2 text-lg font-semibold">Certifications</h3>
						<ul className="list-disc pl-5 text-sm text-slate-300">
							<li>AWS Certified Developer – Associate</li>
							<li>Microsoft Certified: Azure Developer Associate</li>
							<li>Google Cloud Certified – Professional Cloud Architect</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
