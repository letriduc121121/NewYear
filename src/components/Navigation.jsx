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
                <div className="bg-cream-white/90 backdrop-blur-lg rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.08)] px-4 py-2 border border-charcoal/10">
                    <div className="flex items-center gap-1">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all duration-300 ${isActive
                                        ? 'bg-white text-spring-red shadow-md scale-105'
                                        : 'text-charcoal/70 hover:bg-white/50 hover:text-charcoal'
                                    }`
                                }
                            >
                                <span className="text-base">{item.icon}</span>
                                <span className="text-xs font-medium whitespace-nowrap font-vietnamese">
                                    {item.label}
                                </span>
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Mobile: Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-cream-white/90 backdrop-blur-lg shadow-[0_-4px_24px_rgba(0,0,0,0.1)] z-50 border-t border-charcoal/10">
                <div className="flex justify-around items-center px-2 py-3">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200 min-w-[60px] ${isActive
                                    ? 'text-spring-red scale-110'
                                    : 'text-charcoal/60'
                                }`
                            }
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className="text-xs font-medium font-vietnamese">{item.label}</span>
                        </NavLink>
                    ))}
                </div>
            </nav>
        </>
    )
}

export default Navigation
