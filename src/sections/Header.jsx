import { motion, useScroll, useSpring } from 'framer-motion'
import logo from '../assets/Logo.jpg'

export default function Header() {
	const { scrollYProgress } = useScroll()
	const progressX = useSpring(scrollYProgress, {
		stiffness: 120,
		damping: 30,
		mass: 0.2,
	})
	return (
		<header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
			<motion.div
				style={{ scaleX: progressX }}
				className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-indigo-500 to-cyan-400"
			/>
			<div className="container flex items-center justify-between py-4">
				<a href="/" className="flex items-center gap-3" aria-label="WORXELITE Home">
					<img src={logo} alt="WORXELITE logo" className="h-8 w-auto shrink-0 object-contain sm:h-9" />
					<span className="font-semibold tracking-tight">WORXELITE</span>
				</a>
				<nav className="hidden gap-6 text-sm md:flex">
					{['projects', 'skills', 'about', 'contact'].map((id) => (
						<a key={id} href={`#${id}`} className="text-slate-400 transition-colors hover:text-white">
							{id.charAt(0).toUpperCase() + id.slice(1)}
						</a>
					))}
				</nav>
			</div>
		</header>
	)
}
