import { motion } from 'framer-motion'

const FloatingElements = () => {
    const flowers = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 5,
        emoji: Math.random() > 0.5 ? '🌸' : '🌺'
    }))

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Falling flowers */}
            {flowers.map((flower) => (
                <motion.div
                    key={flower.id}
                    className="absolute text-4xl opacity-60"
                    style={{ left: flower.left, top: '-50px' }}
                    animate={{
                        y: ['0vh', '110vh'],
                        rotate: [0, 360],
                        opacity: [0, 1, 1, 0]
                    }}
                    transition={{
                        duration: flower.duration,
                        delay: flower.delay,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                >
                    {flower.emoji}
                </motion.div>
            ))}

            {/* Lanterns */}
            <motion.div
                className="absolute top-10 left-10 text-6xl origin-top"
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
                🏮
            </motion.div>

            <motion.div
                className="absolute top-10 right-10 text-6xl origin-top"
                animate={{ rotate: [3, -3, 3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
                🏮
            </motion.div>
        </div>
    )
}

export default FloatingElements
