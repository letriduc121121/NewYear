import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import { Download, Sparkles, User, Image as ImageIcon, RotateCcw, Smile } from "lucide-react";
import { toast } from "react-toastify";
import Confetti from 'react-confetti';

export default function WishesPage() {
	const [aiPrompt, setAiPrompt] = useState("");
	const [wishText, setWishText] = useState("Chúc mừng năm mới Bính Ngọ 2026! Vạn sự như ý, an khang thịnh vượng!");
	const [image, setImage] = useState(null);
	const [isGenerating, setIsGenerating] = useState(false);
	const [isExporting, setIsExporting] = useState(false);
	const [showConfetti, setShowConfetti] = useState(false);
	const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
	const exportRef = useRef(null);
	const fileInputRef = useRef(null);

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleImageUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const generateAiWish = async () => {
		if (!aiPrompt) {
			toast.warn("Vui lòng nhập ý tưởng để AI gợi ý!");
			return;
		}

		setIsGenerating(true);
		try {
			const res = await fetch('/api/generate-greeting', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ prompt: aiPrompt })
			});

			const data = await res.json().catch(() => ({}));

			if (!res.ok) {
				throw new Error(data.error || `Lỗi server (${res.status})`);
			}

			if (data.text) {
				setWishText(data.text.trim());
				toast.success("Đã tạo xong lời chúc!");
			}
		} catch (error) {
			console.error("AI Error:", error);
			toast.error(error.message || "Không thể kết nối với Thầy Đồ AI. Vui lòng kiểm tra cấu hình.");
		} finally {
			setIsGenerating(false);
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
			link.download = `loichuc-2026.png`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			setShowConfetti(true);
			setTimeout(() => setShowConfetti(false), 5000);
			toast.success('Đã lưu ảnh lời chúc thành công!');
		} catch (err) {
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
							Tạo Lời Chúc Tết <Smile className="text-yellow-500" />
						</h1>
						<p className="text-[#5e503f] opacity-80 text-sm italic font-vietnamese">"Gửi gắm yêu thương qua những vần thơ chúc Tết."</p>
					</div>

					<div className="flex flex-col gap-5">
						<div className="flex flex-col gap-2">
							<label className="text-xs font-bold text-[#bc4749] uppercase tracking-widest pl-1">Ý tưởng lời chúc (AI):</label>
							<div className="relative">
								<Sparkles className="absolute left-3 top-3 text-[#bc4749]/40" size={18} />
								<textarea
									value={aiPrompt}
									onChange={(e) => setAiPrompt(e.target.value)}
									placeholder="Ví dụ: Lời chúc chân thành cho cha mẹ, hoặc lời chúc thăng tiến cho đồng nghiệp..."
									className="w-full bg-white/50 border-2 border-[#c6ac8f]/30 rounded-xl py-3 pl-10 pr-4 h-24 outline-none focus:border-[#bc4749]/40 transition-all text-[#5e503f] placeholder-[#5e503f]/40 resize-none"
								/>
							</div>
							<button
								onClick={generateAiWish}
								disabled={isGenerating || !aiPrompt}
								className="mt-2 w-fit px-4 py-2 bg-[#bc4749]/10 text-[#bc4749] rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#bc4749]/20 transition-all flex items-center gap-2"
							>
								{isGenerating ? <RotateCcw size={14} className="animate-spin" /> : <Sparkles size={14} />}
								Gợi ý lời chúc bằng AI
							</button>
						</div>

						<div className="flex flex-col gap-2">
							<div className="flex justify-between items-end">
								<label className="text-xs font-bold text-[#bc4749] uppercase tracking-widest pl-1">Chỉnh sửa lời chúc:</label>
								<span className={`text-[10px] font-bold ${wishText.length > 150 ? 'text-[#bc4749]' : 'text-[#5e503f]/50'}`}>
									{wishText.length}/160
								</span>
							</div>
							<textarea
								value={wishText}
								onChange={(e) => setWishText(e.target.value.slice(0, 160))}
								placeholder="Nhập lời chúc của bạn tại đây..."
								className="w-full bg-white/50 border-2 border-[#c6ac8f]/30 rounded-xl py-3 px-4 h-24 outline-none focus:border-[#bc4749]/40 transition-all text-[#5e503f] placeholder-[#5e503f]/40 resize-none"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-xs font-bold text-[#bc4749] uppercase tracking-widest pl-1">Thêm ảnh kỷ niệm (Hình vuông):</label>
							<input
								type="file"
								ref={fileInputRef}
								onChange={handleImageUpload}
								accept="image/*"
								className="hidden"
							/>
							<button
								onClick={() => fileInputRef.current?.click()}
								className="w-full bg-white/50 border-2 border-dashed border-[#c6ac8f]/30 rounded-xl py-4 flex flex-col items-center justify-center gap-2 text-[#5e503f]/60 hover:border-[#bc4749]/40 transition-all"
							>
								<ImageIcon size={24} />
								<span className="text-xs font-medium uppercase tracking-widest">Tải ảnh lên</span>
							</button>
						</div>
					</div>

					<button
						onClick={exportImage}
						disabled={isExporting}
						className="w-full bg-[#bc4749] text-white py-4 rounded-2xl shadow-xl flex items-center justify-center gap-3 font-bold uppercase tracking-widest hover:bg-[#a3393b] disabled:opacity-50 transition-all cursor-pointer transform active:scale-[0.98]"
					>
						{isExporting ? <RotateCcw size={20} className="animate-spin" /> : <Download size={20} />}
						Lưu ảnh Story
					</button>
				</motion.div>

				{/* Right: Story Preview */}
				<div className="flex flex-col items-center gap-6">
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 30 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{ duration: 0.8, type: "spring", damping: 20 }}
						className="relative flex flex-col items-center gap-4"
					>
						<div
							ref={exportRef}
							className="bg-[#fdf6e3] rounded-3xl p-4 shadow-2xl border border-[#c6ac8f]/20 relative overflow-hidden aspect-[9/16] w-[340px] md:w-[380px] flex-shrink-0 flex flex-col items-center"
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

							{/* Header */}
							<div className="relative z-20 text-center pt-8 pb-4">
								<p className="text-[10px] uppercase tracking-[0.3em] text-[#bc4749] font-bold mb-1">Chúc Mừng Năm Mới</p>
								<h2 className="text-4xl font-display text-[#bc4749] uppercase font-bold tracking-tighter leading-none">BÍNH NGỌ 2026</h2>
								<div className="w-12 h-1 bg-[#bc4749] mx-auto mt-4 rounded-full" />
							</div>

							{/* Canvas for Content */}
							<div className="flex-1 flex flex-col items-center justify-center w-full px-4 relative z-20 gap-6">

								{/* Image Frame */}
								<div className="w-full aspect-square bg-white rounded-2xl shadow-xl flex items-center justify-center overflow-hidden border-4 border-white">
									{image ? (
										<img src={image} alt="Kỷ niệm" className="w-full h-full object-cover" />
									) : (
										<div className="text-[#bc4749]/20 flex flex-col items-center gap-2">
											<ImageIcon size={64} strokeWidth={1} />
											<span className="text-[10px] font-bold uppercase tracking-widest">Ảnh Kỷ Niệm</span>
										</div>
									)}
								</div>

								{/* Wish Text Frame */}
								<div className="w-full bg-[#f2e8cf]/60 backdrop-blur-sm p-6 rounded-2xl border border-[#c6ac8f]/30 shadow-inner relative">
									<p className="text-lg font-vietnamese text-[#bc4749] text-center italic font-medium leading-relaxed">
										"{wishText}"
									</p>
									<Sparkles className="absolute -top-3 -right-3 text-[#bc4749]" size={24} />
								</div>

							</div>

							{/* Footer */}
							<div className="relative z-20 pb-8 pt-4">
								<p className="text-[10px] font-bold text-[#bc4749]/50 uppercase tracking-[0.5em]">Tài Lộc - Bình An</p>
							</div>

						</div>
						<span className="text-xs text-[#5e503f] opacity-60 font-medium tracking-wide">Xem trước ảnh Story</span>
					</motion.div>
				</div>

			</div>
		</main>
	);
}
