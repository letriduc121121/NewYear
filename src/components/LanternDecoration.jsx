const LanternDecoration = ({ className = "" }) => {
	return (
		<svg
			className={className}
			viewBox="0 0 80 120"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* Hanging string */}
			<line x1="40" y1="0" x2="40" y2="15" stroke="#D4AF37" strokeWidth="2" />

			{/* Top ornament */}
			<circle cx="40" cy="15" r="3" fill="#FFD700" />

			{/* Lantern body - top */}
			<ellipse cx="40" cy="25" rx="20" ry="8" fill="#E63946" />

			{/* Main lantern body */}
			<rect x="20" y="25" width="40" height="50" rx="5" fill="url(#lanternGradient)" />

			{/* Decorative lines */}
			<line x1="20" y1="35" x2="60" y2="35" stroke="#FFD700" strokeWidth="1.5" opacity="0.8" />
			<line x1="20" y1="50" x2="60" y2="50" stroke="#FFD700" strokeWidth="1.5" opacity="0.8" />
			<line x1="20" y1="65" x2="60" y2="65" stroke="#FFD700" strokeWidth="1.5" opacity="0.8" />

			{/* Chinese character effect (福 - Fortune) */}
			<text x="40" y="55" fontSize="20" fill="#FFD700" textAnchor="middle" fontWeight="bold" opacity="0.9">
				福
			</text>

			{/* Lantern body - bottom */}
			<ellipse cx="40" cy="75" rx="20" ry="8" fill="#A4243B" />

			{/* Bottom tassels */}
			<g>
				<line x1="35" y1="75" x2="33" y2="95" stroke="#FFD700" strokeWidth="2" />
				<line x1="40" y1="75" x2="40" y2="100" stroke="#FFD700" strokeWidth="2" />
				<line x1="45" y1="75" x2="47" y2="95" stroke="#FFD700" strokeWidth="2" />

				{/* Tassel ends */}
				<circle cx="33" cy="95" r="3" fill="#F4A460" />
				<circle cx="40" cy="100" r="3" fill="#F4A460" />
				<circle cx="47" cy="95" r="3" fill="#F4A460" />
			</g>

			{/* Glow effect */}
			<ellipse cx="40" cy="50" rx="18" ry="22" fill="#FFD700" opacity="0.1" />

			<defs>
				<linearGradient id="lanternGradient" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stopColor="#E63946" />
					<stop offset="50%" stopColor="#B23A48" />
					<stop offset="100%" stopColor="#A4243B" />
				</linearGradient>
			</defs>
		</svg>
	)
}

export default LanternDecoration
