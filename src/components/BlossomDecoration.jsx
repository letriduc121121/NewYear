const BlossomDecoration = ({ className = "", variant = "peach" }) => {
	const colors = {
		peach: { primary: "#FFB5A7", secondary: "#FF6B35", center: "#F4A460" },
		plum: { primary: "#FFD6E8", secondary: "#E63946", center: "#A4243B" }
	}

	const color = colors[variant] || colors.peach

	return (
		<svg
			className={className}
			viewBox="0 0 100 100"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* Flower petals */}
			<g>
				{/* Top petal */}
				<ellipse cx="50" cy="30" rx="12" ry="18" fill={color.primary} opacity="0.9" />

				{/* Right petal */}
				<ellipse cx="70" cy="50" rx="18" ry="12" fill={color.primary} opacity="0.9" />

				{/* Bottom petal */}
				<ellipse cx="50" cy="70" rx="12" ry="18" fill={color.primary} opacity="0.9" />

				{/* Left petal */}
				<ellipse cx="30" cy="50" rx="18" ry="12" fill={color.primary} opacity="0.9" />

				{/* Top-right petal */}
				<ellipse cx="62" cy="38" rx="14" ry="14" fill={color.secondary} opacity="0.8" />

				{/* Bottom-right petal */}
				<ellipse cx="62" cy="62" rx="14" ry="14" fill={color.secondary} opacity="0.8" />

				{/* Bottom-left petal */}
				<ellipse cx="38" cy="62" rx="14" ry="14" fill={color.secondary} opacity="0.8" />

				{/* Top-left petal */}
				<ellipse cx="38" cy="38" rx="14" ry="14" fill={color.secondary} opacity="0.8" />

				{/* Center */}
				<circle cx="50" cy="50" r="8" fill={color.center} />
				<circle cx="50" cy="50" r="5" fill="#FFD700" opacity="0.8" />
			</g>
		</svg>
	)
}

export default BlossomDecoration
