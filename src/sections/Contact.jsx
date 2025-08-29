export default function Contact() {
	return (
		<section id="contact" className="relative py-16 md:py-24">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(99,102,241,0.12),transparent_70%)]" />
			<div className="container">
				<div className="mb-8 text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let's build something</h2>
					<p className="mx-auto mt-2 max-w-2xl text-slate-300">Tell us about your goals. We'll reply within 24 hours with next steps and a rough quote.</p>
				</div>
				<div className="grid gap-8 md:grid-cols-3">
					<div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
						<div className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-400">Contact</div>
						<a href="mailto:worxelite@gmail.com" className="mb-2 flex items-center gap-2 text-slate-200 hover:underline">worxelite@gmail.com</a>
						<a href="tel:+917252992003" className="mb-6 flex items-center gap-2 text-slate-200 hover:underline">+91- 7252992003, +91- 7017320729</a>
					</div>
					<form className="relative md:col-span-2 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 shadow-xl">
						<div className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
						<div className="grid gap-4 sm:grid-cols-2">
							<div className="flex flex-col gap-2">
								<label className="text-sm">Name</label>
								<input placeholder="Your full name" name="WORXELITE" required className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none ring-indigo-500 focus:ring-2" />
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-sm">Email</label>
								<input placeholder="you@domain.com" type="email" name="email" required className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none ring-indigo-500 focus:ring-2" />
							</div>
							<div className="flex flex-col gap-2">
								<label className="text-sm">Phone</label>
								<input placeholder="+91-" type="tel" name="phone" className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none ring-indigo-500 focus:ring-2" />
							</div>
						</div>
						<div className="mt-4 flex flex-col gap-2">
							<label className="text-sm">Project Details</label>
							<textarea placeholder="Tell us about the goals, timeline, and any links" name="message" rows="6" required className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3 outline-none ring-indigo-500 focus:ring-2" />
						</div>
						<div className="mt-6 flex items-center justify-between">
							<p className="text-xs text-slate-400">By sending, you agree to be contacted about this inquiry.</p>
							<button type="submit" className="rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 text-white shadow transition-transform hover:translate-y-[-1px]">Send inquiry</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	)
}
