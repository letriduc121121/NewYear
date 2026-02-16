import { NavLink } from 'react-router-dom'
import { FaHome, FaCheckSquare, FaHeart, FaMagic, FaGift, FaClipboardList } from 'react-icons/fa'

const Navigation = () => {
    const navItems = [
        { path: '/', icon: <FaHome />, label: 'Trang chủ' },
        { path: '/checklist', icon: <FaClipboardList />, label: 'Tổng kết' },
        { path: '/wishes', icon: <FaHeart />, label: 'Lời chúc' },
        { path: '/fortune', icon: <FaMagic />, label: 'Gieo quẻ' },
        { path: '/lixi', icon: <FaGift />, label: 'Lì xì' },
    ]

    return (
        <>
            {/* Desktop & Tablet: Top Centered Navigation */}
            <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-50">
                <div className="bg-white/80 backdrop-blur-xl rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.1)] px-3 py-2 border border-white/20">
                    <div className="flex items-center gap-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isActive
                                        ? 'bg-spring-red text-white shadow-[0_4px_12px_rgba(230,57,70,0.3)] scale-105'
                                        : 'text-charcoal/70 hover:bg-black/5 hover:text-charcoal'
                                    }`
                                }
                            >
                                <span className="text-lg">{item.icon}</span>
                                <span className="text-sm font-semibold whitespace-nowrap font-vietnamese">
                                    {item.label}
                                </span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile: Bottom Navigation - Floating Doc Style */}
            <nav className="md:hidden fixed bottom-6 left-4 right-4 z-50">
                <div className="bg-white/90 backdrop-blur-2xl rounded-[2rem] shadow-[0_12px_40px_rgba(0,0,0,0.15)] border border-white/40 pb-safe">
                    <div className="flex justify-around items-center px-4 py-3">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300 relative ${isActive
                                        ? 'text-spring-red'
                                        : 'text-charcoal/40 hover:text-charcoal/60'
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {isActive && (
                                            <div className="absolute -top-1 w-1 h-1 bg-spring-red rounded-full animate-pulse" />
                                        )}
                                        <span className={`text-2xl transition-transform duration-300 ${isActive ? 'scale-110 -translate-y-0.5' : ''}`}>
                                            {item.icon}
                                        </span>
                                        <span className={`text-[10px] uppercase font-bold tracking-wider font-vietnamese transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                                            {item.label}
                                        </span>
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navigation
