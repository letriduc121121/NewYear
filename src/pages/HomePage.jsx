import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import BlossomDecoration from '../components/BlossomDecoration'
import LanternDecoration from '../components/LanternDecoration'
import ImageWithFallback from '../components/ImageWithFallback'

const HomePage = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [isNewYear, setIsNewYear] = useState(false)

    useEffect(() => {
        // Tết Bính Ngọ 2026: February 17, 2026 00:00:00
        const tetDate = new Date('2026-02-17T00:00:00')

        const calculateTimeLeft = () => {
            const now = new Date()
            const difference = tetDate - now

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                })
                setIsNewYear(false)
            } else {
                setIsNewYear(true)
            }
        }

        calculateTimeLeft()
        const timer = setInterval(calculateTimeLeft, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="min-h-screen w-full relative flex items-center justify-center overflow-x-hidden">
            {isNewYear && <Confetti recycle={true} numberOfPieces={200} />}

            {/* Central Focal Image - horse1.png (transparent background) */}
            <motion.div
                className="absolute inset-0 z-5 flex items-center justify-center pointer-events-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
            >
                {/* Background circle for emphasis */}
                <div className="absolute w-[500px] h-[500px] bg-white/40 rounded-full blur-3xl" />

                <ImageWithFallback
                    src="/images/horse1.png"
                    fallbackSrc="/images/horse1.jpg"
                    alt="Year of the Horse"
                    className="relative w-full max-w-md md:max-w-lg h-auto object-contain"
                    style={{
                        filter: 'drop-shadow(0 10px 50px rgba(164, 36, 59, 0.4)) drop-shadow(0 0 30px rgba(244, 164, 96, 0.3))',
                        transform: 'translateZ(0)' // Hardware acceleration
                    }}
                />
            </motion.div>

            {/* Decorative Lanterns - Top Left */}
            <motion.div
                className="absolute top-8 left-8 w-16 md:w-20 z-10 opacity-90"
                animate={{ rotate: [-3, 3, -3], y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
                <LanternDecoration />
            </motion.div>

            {/* Decorative Lanterns - Top Right */}
            <motion.div
                className="absolute top-8 right-8 w-16 md:w-20 z-10 opacity-90"
                animate={{ rotate: [3, -3, 3], y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
                <LanternDecoration />
            </motion.div>

            {/* Decorative Blossoms - Scattered */}
            <motion.div
                className="absolute top-16 left-16 w-12 md:w-16 opacity-40"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
                <BlossomDecoration variant="plum" />
            </motion.div>

            <motion.div
                className="absolute top-32 right-20 w-10 md:w-14 opacity-40"
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            >
                <BlossomDecoration variant="peach" />
            </motion.div>

            <motion.div
                className="absolute bottom-20 left-12 w-8 md:w-12 opacity-30"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
                <BlossomDecoration variant="peach" />
            </motion.div>

            <motion.div
                className="absolute bottom-32 right-16 w-10 md:w-14 opacity-35"
                animate={{ rotate: -360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
            >
                <BlossomDecoration variant="plum" />
            </motion.div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-5xl mx-auto px-6 relative z-20 pt-20 pb-10"
            >
                {/* Hero Section */}
                <div className="text-center mb-6 mt-0">
                    {/* HAPPY NEW YEAR - Larger and moved up */}
                    <motion.h2
                        className="text-4xl md:text-6xl font-roboto font-bold tracking-wide mb-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            color: '#FFFFFF',
                            textShadow: '0 3px 12px rgba(164, 36, 59, 0.7), 0 2px 6px rgba(0, 0, 0, 0.4)',
                            WebkitTextStroke: '0.8px rgba(164, 36, 59, 0.4)',
                            letterSpacing: '0.1em'
                        }}
                    >
                        HAPPY NEW YEAR
                    </motion.h2>

                    {/* Slogan with background */}
                    <motion.div
                        className="inline-block px-8 py-3 rounded-full mb-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        style={{
                            background: 'rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
                        }}
                    >
                        <p
                            className="text-lg md:text-2xl font-roboto font-light italic"
                            style={{
                                color: '#FFFFFF',
                                textShadow: '0 2px 8px rgba(164, 36, 59, 0.6), 0 1px 4px rgba(0, 0, 0, 0.4)',
                                WebkitTextStroke: '0.3px rgba(164, 36, 59, 0.2)'
                            }}
                        >
                            "Mã Đáo Thành Công — Vạn Sự Như Ý"
                        </p>
                    </motion.div>

                    {/* 2026 - HUGE & CENTERED */}
                    <div className="block w-full mb-6 mt-4">
                        <motion.h1
                            className="text-7xl sm:text-8xl md:text-[10rem] font-roboto font-black relative inline-block leading-none"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.6, type: 'spring', stiffness: 100 }}
                        >
                            {/* Background glow */}
                            <span className="absolute inset-0 text-[#FFFFFF] blur-xl opacity-50">2026</span>
                            {/* Main text with stroke */}
                            <span
                                className="relative text-[#FFFFFF]"
                                style={{
                                    textShadow: '0 10px 30px rgba(164, 36, 59, 0.5), 0 4px 10px rgba(0, 0, 0, 0.3)',
                                    WebkitTextStroke: '2px rgba(164, 36, 59, 0.4)'
                                }}
                            >
                                2026
                            </span>
                        </motion.h1>
                    </div>
                </div>

                {/* Countdown Section */}
                {!isNewYear ? (
                    <motion.div
                        className="mb-8 relative z-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        style={{ marginTop: '-10px' }}
                    >
                        <h3
                            className="text-center text-xs md:text-sm font-roboto font-medium tracking-[0.3em] mb-4 md:mb-6 uppercase"
                            style={{
                                color: '#FFFFFF',
                                textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            ĐẾM NGƯỢC ĐẾN GIAO THỪA
                        </h3>

                        <div className="flex justify-center gap-2 sm:gap-4 md:gap-6 max-w-4xl mx-auto mb-8 flex-wrap">
                            {[
                                { value: timeLeft.days, label: 'NGÀY' },
                                { value: timeLeft.hours, label: 'GIỜ' },
                                { value: timeLeft.minutes, label: 'PHÚT' },
                                { value: timeLeft.seconds, label: 'GIÂY' }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
                                    className="relative flex-shrink-0"
                                >
                                    {/* Tall Rectangular Card */}
                                    <div className="w-16 h-24 sm:w-20 sm:h-28 md:w-32 md:h-44 bg-[#FDF5E6] rounded-xl flex flex-col justify-center items-center shadow-lg transform transition-transform hover:-translate-y-1 relative overflow-hidden group border border-[#DEB887]/50">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-[#A4243B]/20"></div>

                                        <div className="text-3xl sm:text-4xl md:text-6xl font-roboto font-bold text-[#A4243B] mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                                            {String(item.value).padStart(2, '0')}
                                        </div>

                                        <div className="w-8 md:w-12 h-px bg-[#A4243B]/20 mb-2 md:mb-3"></div>

                                        <div className="text-[9px] sm:text-[10px] md:text-xs font-bold text-[#8B4513] tracking-widest uppercase">
                                            {item.label}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.p
                            className="text-center text-xs md:text-sm font-vietnamese tracking-wider mt-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.6 }}
                            style={{
                                color: '#FFE4B5',
                                WebkitTextStroke: '0.5px #A4243B',
                                textShadow: '0 1px 2px rgba(164, 36, 59, 0.4)'
                            }}
                        >
                            Mùng 1 Tết Bính Ngọ, Thứ Ba, 17/02/2026
                        </motion.p>
                    </motion.div>
                ) : (
                    <motion.div
                        className="text-center py-12"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 100 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-[#A4243B] mb-4">
                            🎊 CHÚC MỪNG NĂM MỚI! 🎊
                        </h2>
                        <p className="text-xl md:text-2xl font-calligraphy text-[#B8860B]">
                            Mã Đáo Thành Công - Tài Lộc Dồi Dào!
                        </p>
                    </motion.div>
                )}
            </motion.div>

            {/* Decorative Elements - Bottom */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-30">
                <BlossomDecoration variant="peach" className="w-6 h-6" />
                <div className="text-3xl">🐴</div>
                <BlossomDecoration variant="plum" className="w-6 h-6" />
            </div>
        </div>
    )
}

export default HomePage
