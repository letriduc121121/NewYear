import { motion } from 'framer-motion'

const GoldenParticles = () => {
	const particles = Array.from({ length: 15 }, (_, i) => ({
		id: i,
		size: Math.random() * 4 + 2,
		left: `${Math.random() * 100}%`,
		delay: Math.random() * 5,
		duration: Math.random() * 10 + 15
	}))

	return (
		<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
			{particles.map((particle) => (
				<motion.div
					key={particle.id}
					className="absolute rounded-full bg-gold-fortune"
					style={{
						width: particle.size,
						height: particle.size,
						left: particle.left,
						top: '-10px',
						boxShadow: '0 0 10px rgba(244, 164, 96, 0.5)'
					}}
					animate={{
						y: ['0vh', '110vh'],
						x: [0, Math.sin(particle.id) * 50, 0],
						opacity: [0, 0.6, 0.8, 0.6, 0]
					}}
					transition={{
						duration: particle.duration,
						delay: particle.delay,
						repeat: Infinity,
						ease: 'linear'
					}}
				/>
			))}
		</div>
	)
}

export default GoldenParticles
