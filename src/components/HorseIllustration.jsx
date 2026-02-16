const HorseIllustration = ({ className = "" }) => {
	return (
		<svg
			className={className}
			viewBox="0 0 400 400"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			{/* Horse silhouette - stylized and elegant */}
			<g opacity="0.15">
				<path
					d="M200 100C180 100 165 115 165 135C165 145 170 154 178 160L175 180C175 180 160 190 160 210C160 230 170 245 185 250L180 280C180 280 170 290 170 310C170 330 185 345 205 345C225 345 240 330 240 310L235 280C250 275 260 260 260 240L255 210C255 190 240 180 240 180L237 160C245 154 250 145 250 135C250 115 235 100 215 100L200 100Z"
					fill="url(#horseGradient)"
					stroke="#E63946"
					strokeWidth="2"
				/>
				{/* Mane */}
				<path
					d="M200 100C200 100 190 95 185 90C180 85 175 80 170 85C165 90 168 100 175 105C182 110 190 108 195 105"
					fill="#F4A460"
					opacity="0.8"
				/>
				<path
					d="M215 100C215 100 225 95 230 90C235 85 240 80 245 85C250 90 247 100 240 105C233 110 225 108 220 105"
					fill="#F4A460"
					opacity="0.8"
				/>
			</g>

			{/* Decorative elements */}
			<defs>
				<linearGradient id="horseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
					<stop offset="0%" stopColor="#E63946" stopOpacity="0.3" />
					<stop offset="50%" stopColor="#F4A460" stopOpacity="0.3" />
					<stop offset="100%" stopColor="#FFB5A7" stopOpacity="0.3" />
				</linearGradient>
			</defs>
		</svg>
	)
}

export default HorseIllustration
