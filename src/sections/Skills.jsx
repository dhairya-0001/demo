export default function Skills() {
	const skills = [
		'Python','Java','JavaScript','TypeScript','SQL','PostgreSQL','MongoDB','React','Next.js','Node.js','Express','TailwindCSS','GSAP','Framer Motion','Three.js','WebGL','AWS','Docker','GitHub Actions','SEO','UX','UI','Design Systems','Figma','Photoshop',
	]
	return (
		<section id="skills" className="section-sep py-16 md:py-24">
			<div className="container">
				<h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Skills</h2>
				<div className="relative overflow-hidden rounded-2xl border border-slate-800">
					<div className="animate-[marquee_18s_linear_infinite] whitespace-nowrap py-4 text-slate-300">
						{skills
							.flatMap((s) => [s, s])
							.map((s, i) => (
								<span key={'skills-' + i} className="mx-6">{s}</span>
							))}
					</div>
				</div>
			</div>
		</section>
	)
}
