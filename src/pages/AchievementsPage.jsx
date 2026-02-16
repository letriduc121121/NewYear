import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheck, FaTrash, FaPlus, FaCheckSquare, FaSquare } from 'react-icons/fa'
import { toast, Toaster } from 'react-hot-toast'
import Confetti from 'react-confetti'

const AchievementsPage = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tetTasks')
        return savedTasks ? JSON.parse(savedTasks) : [
            { id: 1, text: 'Dọn dẹp nhà cửa đón Tết', completed: false, category: '🏠 Nhà cửa' },
            { id: 2, text: 'Mua sắm bánh kẹo, mứt Tết', completed: false, category: '🛍️ Mua sắm' },
            { id: 3, text: 'Gói bánh chưng / bánh tét', completed: false, category: '🍲 Ẩm thực' },
            { id: 4, text: 'Cúng ông Công ông Táo', completed: false, category: '🙏 Tâm linh' },
            { id: 5, text: 'Mua hoa đào / hoa mai', completed: false, category: '🌸 Trang trí' },
            { id: 6, text: 'Chuẩn bị phong bao lì xì', completed: false, category: '💰 Tài lộc' },
            { id: 7, text: 'Chúc Tết ông bà, cha mẹ', completed: false, category: '👨‍👩‍👧‍👦 Gia đình' },
        ]
    })

    const [newTask, setNewTask] = useState('')
    const [showConfetti, setShowConfetti] = useState(false)

    useEffect(() => {
        localStorage.setItem('tetTasks', JSON.stringify(tasks))

        // Check if all tasks are completed
        const allCompleted = tasks.length > 0 && tasks.every(t => t.completed)
        if (allCompleted) {
            setShowConfetti(true)
            toast.success('Chúc mừng bạn đã hoàn thành mọi việc đón Tết! 🎉', {
                duration: 5000,
                icon: '🐴',
                style: {
                    borderRadius: '10px',
                    background: '#FFF8F0',
                    color: '#A4243B',
                    border: '1px solid #F4A460',
                },
            })
            setTimeout(() => setShowConfetti(false), 8000)
        }
    }, [tasks])

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ))
    }

    const addTask = (e) => {
        e.preventDefault()
        if (!newTask.trim()) return

        const task = {
            id: Date.now(),
            text: newTask,
            completed: false,
            category: '✨ Khác'
        }

        setTasks([...tasks, task])
        setNewTask('')
        toast.success('Đã thêm công việc mới!', {
            icon: '📝',
            style: {
                borderRadius: '10px',
                background: '#FFF8F0',
                color: '#2D3142',
            },
        })
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id))
        toast('Đã xóa công việc', {
            icon: '🗑️',
            style: {
                borderRadius: '10px',
                background: '#FFF8F0',
                color: '#2D3142',
            },
        })
    }

    // Calculate progress
    const completedCount = tasks.filter(t => t.completed).length
    const progress = tasks.length > 0 ? (completedCount / tasks.length) * 100 : 0

    return (
        <div className="min-h-screen px-4 pb-20 pt-4 overflow-y-auto">
            {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}
            <Toaster position="top-center" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto"
            >
                {/* Header Card */}
                <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 mb-6 shadow-neuo border border-white/50 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-spring-red via-gold-fortune to-spring-red"></div>

                    <h1 className="text-3xl md:text-4xl font-display font-bold text-center text-deep-burgundy mb-2">
                        Danh Sách Việc Cần Làm
                    </h1>
                    <p className="text-center text-charcoal/70 font-vietnamese mb-6">
                        Chuẩn bị chu đáo, đón Tết an khang
                    </p>

                    {/* Progress Bar */}
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-spring-red bg-spring-red/10">
                                    Tiến độ
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-spring-red">
                                    {Math.round(progress)}%
                                </span>
                            </div>
                        </div>
                        <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-spring-red/10 shadow-inner">
                            <motion.div
                                style={{ width: `${progress}%` }}
                                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-spring-red to-gold-fortune"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                        </div>
                    </div>
                </div>

                {/* Add Task Form */}
                <form onSubmit={addTask} className="mb-8 relative z-20">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                            placeholder="Thêm việc cần làm mới..."
                            className="flex-1 px-5 py-3 rounded-full bg-white/90 backdrop-blur-sm border border-white/50 focus:outline-none focus:ring-2 focus:ring-spring-red/50 shadow-sm font-vietnamese placeholder-charcoal/40 text-charcoal"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="bg-spring-red text-white p-3 rounded-full shadow-lg hover:bg-deep-burgundy transition-colors aspect-square flex items-center justify-center"
                        >
                            <FaPlus />
                        </motion.button>
                    </div>
                </form>

                {/* Task List */}
                <div className="grid gap-3 pb-24">
                    <AnimatePresence>
                        {tasks.map(task => (
                            <motion.div
                                key={task.id}
                                layout
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 border transition-all duration-300 ${task.completed
                                        ? 'border-jade-green/30 bg-jade-green/5'
                                        : 'border-white/50 hover:border-spring-red/30'
                                    } shadow-sm hover:shadow-md cursor-pointer`}
                                onClick={() => toggleTask(task.id)}
                            >
                                <div className={`flex-shrink-0 text-xl transition-colors duration-300 ${task.completed ? 'text-jade-green' : 'text-charcoal/30 group-hover:text-spring-red/50'
                                    }`}>
                                    {task.completed ? <FaCheckSquare /> : <FaSquare />}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <p className={`font-vietnamese text-sm md:text-base truncate transition-all duration-300 ${task.completed ? 'text-charcoal/40 line-through' : 'text-charcoal'
                                        }`}>
                                        {task.text}
                                    </p>
                                    <span className="text-[10px] uppercase tracking-wider text-charcoal/40 bg-charcoal/5 px-2 py-0.5 rounded-full mt-1 inline-block">
                                        {task.category}
                                    </span>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.1, color: '#ef4444' }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        deleteTask(task.id)
                                    }}
                                    className="p-2 text-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <FaTrash />
                                </motion.button>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {tasks.length === 0 && (
                        <div className="text-center py-12 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/30">
                            <p className="text-charcoal/50 font-vietnamese italic">
                                Danh sách trống. Hãy thêm việc cần làm!
                            </p>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    )
}

export default AchievementsPage
