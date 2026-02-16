import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import { Download, Sparkles, Info, RotateCcw, Calendar, User, Smile } from "lucide-react";
import { toast } from "react-toastify";
import Confetti from 'react-confetti';



export default function FortunePage() {
    const [name, setName] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [result, setResult] = useState(null);
    const [isRevealing, setIsRevealing] = useState(false);
    const [isExporting, setIsExporting] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const exportRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleFortune = async () => {
        if (!name || !birthDate) {
            toast.warn("Vui lòng nhập đủ tên và ngày sinh!");
            return;
        }

        setIsRevealing(true);
        setResult(null);

        try {
            const res = await fetch('/api/generate-fortune', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, birthDate })
            });

            const data = await res.json().catch(() => ({}));

            if (!res.ok) {
                throw new Error(data.error || `Lỗi server (${res.status})`);
            }

            if (data.text) {
                const lines = data.text.split('\n').filter(l => l.trim() !== '');
                const fortuneTitle = lines[0] || "Quẻ May Mắn";

                const extractInfo = (prefix) => {
                    const line = lines.find(l => l.toLowerCase().includes(prefix.toLowerCase()));
                    return line ? line.split(':')[1]?.trim() || line.replace(new RegExp(`^.*${prefix}:?\\s*`, 'i'), '').trim() : null;
                };

                const luckyColor = extractInfo("Màu may mắn") || "Tùy tâm, Hỷ lạc";
                const luckyDirection = extractInfo("Hướng xuất hành") || "Chính Nam";

                const fortuneText = lines.slice(1)
                    .filter(l => !l.toLowerCase().includes("màu may mắn") && !l.toLowerCase().includes("hướng xuất hành"))
                    .join('\n').trim();

                setResult({
                    name: fortuneTitle.replace(/^1\.\s*|^Tên quẻ:\s*/i, ''),
                    description: "Quẻ Tiên - AI Luận Giải",
                    fortune: fortuneText,
                    color: '#bc4749',
                    luckyColor: luckyColor,
                    luckyDirection: luckyDirection,
                    icon: '🔮'
                });
                toast.success("Đã gieo xong quẻ may mắn!");
            } else {
                throw new Error("No text from AI");
            }
        } catch (error) {
            console.error("AI Error:", error);
            toast.error(error.message || "Không thể kết nối với Thầy Đồ AI. Vui lòng kiểm tra cấu hình.");
        } finally {
            setIsRevealing(false);
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 5000);
        }
    };

    const exportImage = async () => {
        if (exportRef.current === null) return;
        setIsExporting(true);
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            const canvas = await html2canvas(exportRef.current, {
                useCORS: true,
                scale: 3,
                backgroundColor: null,
            });
            const dataUrl = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = `que-2026-${name || 'may-man'}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            toast.success('Đã lưu ảnh gieo quẻ thành công!');
        } catch (err) {
            console.error("Export failed", err);
            toast.error('Có lỗi xảy ra khi lưu ảnh');
        } finally {
            setIsExporting(false);
        }
    };

    return (
        <main className="relative w-full flex flex-col items-center p-4 font-sans min-h-screen">
            {showConfetti && (
                <Confetti
                    width={windowSize.width}
                    height={windowSize.height}
                    recycle={false}
                    numberOfPieces={500}
                    style={{ position: 'fixed', top: 0, left: 0, zIndex: 100 }}
                />
            )}

            <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-12 mt-4 mb-20">

                {/* Left: Input Form */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full max-w-md flex flex-col gap-6 bg-[#f2e8cf]/90 backdrop-blur-xl p-8 rounded-[2rem] border-2 border-[#c6ac8f]/40 shadow-2xl"
                >
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-display text-[#bc4749] uppercase mb-2 font-bold flex items-center justify-center md:justify-start gap-2">
                            Gieo Quẻ Đầu Năm <Smile className="text-yellow-500" />
                        </h1>
                        <p className="text-[#5e503f] opacity-80 text-sm italic font-vietnamese">"Xem vận may và nhận lời chúc Bính Ngọ 2026."</p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-[#bc4749] uppercase tracking-widest pl-1">Họ tên gia chủ:</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#bc4749]/40" size={18} />
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Nhập tên của bạn..."
                                    className="w-full bg-white/50 border-2 border-[#c6ac8f]/30 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-[#bc4749]/40 transition-all text-[#5e503f] placeholder-[#5e503f]/40"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-xs font-bold text-[#bc4749] uppercase tracking-widest pl-1">Ngày sinh (Dương lịch):</label>
                            <div className="relative">
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-[#bc4749]/40" size={18} />
                                <input
                                    type="date"
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                    className="w-full bg-white/50 border-2 border-[#c6ac8f]/30 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-[#bc4749]/40 transition-all text-[#5e503f]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-2">
                        <button
                            onClick={handleFortune}
                            disabled={isRevealing || !name || !birthDate}
                            className="w-full bg-[#bc4749] text-white py-4 rounded-2xl shadow-xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest hover:bg-[#a3393b] disabled:opacity-50 transition-all cursor-pointer transform active:scale-[0.98]"
                        >
                            {isRevealing ? <RotateCcw size={20} className="animate-spin" /> : <Sparkles size={20} />}
                            Gieo Quẻ Ngay
                        </button>

                        {result && (
                            <button
                                onClick={exportImage}
                                disabled={isExporting}
                                className="w-full bg-white border-2 border-[#bc4749] text-[#bc4749] py-4 rounded-2xl shadow-lg flex items-center justify-center gap-3 font-bold uppercase tracking-widest hover:bg-[#bc4749]/5 transition-all cursor-pointer transform active:scale-[0.98]"
                            >
                                {isExporting ? <RotateCcw size={20} className="animate-spin" /> : <Download size={20} />}
                                Lưu Ảnh Gieo Quẻ
                            </button>
                        )}
                    </div>

                    <p className="text-[10px] text-[#5e503f]/60 text-center flex items-center justify-center gap-1">
                        <Info size={12} /> Thông tin mang tính chất chiêm nghiệm vui vẻ
                    </p>
                </motion.div>

                {/* Right: Fortune Card Preview */}
                <div className="flex flex-col items-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.8, type: "spring", damping: 20 }}
                        className="relative flex flex-col items-center gap-4"
                    >
                        <div
                            ref={exportRef}
                            className="bg-[#fdf6e3] rounded-3xl p-4 shadow-2xl border border-[#c6ac8f]/20 relative overflow-hidden aspect-[9/16] w-[340px] md:w-[380px] flex-shrink-0 flex flex-col"
                        >
                            {/* Background Layer */}
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-30 blur-[10px]"
                                style={{ backgroundImage: "url('/images/bg2.jpg')" }}
                            />

                            {/* Background Texture Overlay */}
                            <div className="absolute inset-0 pointer-events-none opacity-20 z-10"
                                style={{ backgroundImage: 'url(https://www.transparenttextures.com/patterns/paper-fibers.png)' }}
                            />

                            {/* Background Image (Horse) */}
                            <div className="absolute inset-0 -z-0 opacity-10 flex items-center justify-center pointer-events-none translate-y-10">
                                <img src="/images/horse.png" alt="" className="w-[120%] object-contain grayscale sepia mix-blend-multiply" />
                            </div>

                            {/* Header Section */}
                            <div className="relative z-20 text-center pt-4 pb-4">
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-[#bc4749] font-bold">Tết Bính Ngọ 2026</p>
                                </div>
                                <h2 className="text-5xl font-display text-[#bc4749] uppercase font-bold tracking-tighter leading-[1.1]" style={{ textShadow: '2px 2px 0px rgba(188, 71, 73, 0.1)' }}>
                                    GIEO QUẺ
                                </h2>

                            </div>

                            {/* Main Content */}
                            <div className="flex-1 flex flex-col items-center justify-start pt-1 pb-8 w-full px-4 relative z-20">

                                {/* Fortune Container */}
                                <div className="bg-white rounded-[2rem] p-4 shadow-xl w-[60%] aspect-square relative flex flex-col items-center justify-center mb-2 border border-[#c6ac8f]/20">
                                    {result ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center flex flex-col items-center"
                                        >
                                            <h3 className="text-3xl font-display font-bold text-[#bc4749] mb-1">{result.name}</h3>
                                            <p className="text-xs font-bold text-[#bc4749]/60 uppercase tracking-widest">{result.description}</p>
                                        </motion.div>
                                    ) : (
                                        <div className="text-center flex flex-col items-center gap-4 opacity-20">
                                            <Sparkles size={60} strokeWidth={1} className="text-[#bc4749]" />
                                            <p className="text-xs font-bold uppercase tracking-widest text-[#bc4749]">Chờ Gieo Quẻ...</p>
                                        </div>
                                    )}
                                </div>

                                {/* Info Section */}
                                {result ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-center w-full"
                                    >
                                        <p className="text-[10px] font-bold text-[#bc4749]/50 uppercase tracking-[0.2em] mb-1">Gia chủ:</p>
                                        <h4 className="text-2xl font-bold text-[#bc4749] uppercase truncate px-2 mb-1 leading-relaxed">
                                            {name || "---"}
                                        </h4>
                                        <div className="w-12 h-px bg-[#bc4749]/20 mx-auto mb-2" />

                                        <div className="bg-[#f2e8cf]/40 rounded-xl p-3 mb-4 border border-[#c6ac8f]/20 shadow-inner">
                                            <p className="text-sm font-vietnamese text-[#5e503f] italic leading-relaxed font-medium">
                                                "{result.fortune}"
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="bg-white/60 p-2 rounded-lg border border-[#c6ac8f]/10 shadow-sm">
                                                <p className="text-[8px] uppercase font-bold text-[#bc4749]/40 mb-0.5">Màu May Mắn</p>
                                                <p className="text-[10px] font-bold text-[#bc4749]">{result.luckyColor}</p>
                                            </div>
                                            <div className="bg-white/60 p-2 rounded-lg border border-[#c6ac8f]/10 shadow-sm">
                                                <p className="text-[8px] uppercase font-bold text-[#bc4749]/40 mb-0.5">Hướng Xuất Hành</p>
                                                <p className="text-[10px] font-bold text-[#bc4749]">{result.luckyDirection}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <div className="text-center w-full opacity-10">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1">Nhập thông tin</p>
                                        <div className="w-full h-24 border-2 border-dashed border-[#bc4749] rounded-xl" />
                                    </div>
                                )}
                            </div>
                        </div>
                        <span className="text-xs text-[#5e503f] opacity-60 font-medium tracking-wide">Xem trước thẻ quẻ may mắn</span>
                    </motion.div>
                </div>

            </div>
        </main>
    );
}
