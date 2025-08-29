import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function TiltCard({ children }) {
	const x = useMotionValue(0)
	const y = useMotionValue(0)
	const rotateX = useTransform(y, [-50, 50], [6, -6])
	const rotateY = useTransform(x, [-50, 50], [-6, 6])
	return (
		<motion.div
			style={{ rotateX, rotateY, transformPerspective: 800 }}
			onMouseMove={(e) => {
				const r = e.currentTarget.getBoundingClientRect()
				x.set(e.clientX - (r.left + r.width / 2))
				y.set(e.clientY - (r.top + r.height / 2))
			}}
			onMouseLeave={() => {
				x.set(0)
				y.set(0)
			}}
			className="glow"
		>
			{children}
		</motion.div>
	)
}
