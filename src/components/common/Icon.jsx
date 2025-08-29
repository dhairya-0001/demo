export default function Icon({ name, className }) {
	const common = {
		fill: 'none',
		stroke: 'currentColor',
		strokeWidth: 1.6,
		strokeLinecap: 'round',
		strokeLinejoin: 'round',
	}
	return name === 'laptop' ? (
		<svg className={className} viewBox="0 0 24 24">
			<rect {...common} x="3" y="4" width="18" height="12" rx="2" />
			<path {...common} d="M2 18h20" />
		</svg>
	) : name === 'spark' ? (
		<svg className={className} viewBox="0 0 24 24">
			<path {...common} d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
		</svg>
	) : name === 'server' ? (
		<svg className={className} viewBox="0 0 24 24">
			<rect {...common} x="3" y="5" width="18" height="6" rx="2" />
			<rect {...common} x="3" y="13" width="18" height="6" rx="2" />
			<path {...common} d="M7 8h0M7 16h0" />
		</svg>
	) : name === 'cube' ? (
		<svg className={className} viewBox="0 0 24 24">
			<path {...common} d="M12 2l8 4v12l-8 4-8-4V6z" />
			<path {...common} d="M12 22V12l8-4" />
			<path {...common} d="M12 12L4 8" />
		</svg>
	) : name === 'cloud' ? (
		<svg className={className} viewBox="0 0 24 24">
			<path {...common} d="M7 18a4 4 0 010-8 5 5 0 019.6-1.4A4 4 0 1117 18H7z" />
		</svg>
	) : (
		<svg className={className} viewBox="0 0 24 24">
			<circle {...common} cx="12" cy="12" r="9" />
		</svg>
	)
}
