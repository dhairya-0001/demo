export default function Footer() {
	return (
		<footer className="border-t border-slate-800 py-10 text-sm">
			<div className="container flex flex-col items-center justify-between gap-4 sm:flex-row">
				<div>© {new Date().getFullYear()} WORXELITE. All rights reserved.</div>
				<div className="flex items-center gap-4">
					<a href="mailto:worxelite@gmail.com" className="hover:underline">Email</a>
					<a href="#" className="hover:underline">LinkedIn</a>
				</div>
			</div>
		</footer>
	)
}
