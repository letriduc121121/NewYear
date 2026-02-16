import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import html2canvas from "html2canvas";
import { Download, ChevronLeft, Wallet, Info, RotateCcw, ChevronDown, Check, QrCode, Smile } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Confetti from 'react-confetti';

// Custom Bank Select Component
const CustomBankSelect = ({ banks, selectedBank, onChange, loading }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef(null);

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const selectedBankData = banks.find(b => b.shortName === selectedBank);

	return (
		<div className="relative" ref={dropdownRef}>
			<button
				type="button"
				onClick={() => !loading && setIsOpen(!isOpen)}
				className="w-full bg-white/50 border-2 border-[#c6ac8f]/30 rounded-xl p-3 flex items-center justify-between outline-none focus:border-[#bc4749]/40 transition-all text-[#5e503f]"
			>
				{selectedBankData ? (
					<div className="flex items-center gap-3 min-w-0">
						<img src={selectedBankData.logo} alt="" className="w-8 h-8 object-contain bg-white rounded-full p-0.5 shadow-sm flex-shrink-0" />
						<span className="font-medium text-sm truncate">{selectedBankData.shortName} - {selectedBankData.name}</span>
					</div>
				) : (
					<span className="text-[#5e503f]/60 truncate">-- Chọn ngân hàng --</span>
				)}
				<ChevronDown size={20} className={`text-[#bc4749] transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						className="absolute z-50 w-full mt-2 bg-white rounded-xl shadow-2xl border border-[#c6ac8f]/30 max-h-60 overflow-y-auto custom-scrollbar"
					>
						{banks.map((bank) => (
							<button
								key={bank.id}
								type="button"
								onClick={() => {
									onChange(bank.shortName);
									setIsOpen(false);
								}}
								className="w-full p-3 flex items-center gap-3 hover:bg-[#f2e8cf]/30 transition-colors border-b border-gray-100 last:border-0 text-left"
							>
								<img src={bank.logo} alt="" className="w-8 h-8 object-contain bg-white rounded-full p-0.5 border border-gray-100 flex-shrink-0" />
								<div className="flex-1 min-w-0">
									<p className="font-bold text-[#5e503f] text-sm truncate">{bank.shortName}</p>
									<p className="text-xs text-[#5e503f]/60 truncate">{bank.name}</p>
								</div>
								{selectedBank === bank.shortName && <Check size={16} className="text-[#bc4749] flex-shrink-0" />}
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default function LixiPage() {
	const [banks, setBanks] = useState([]);
	const [selectedBank, setSelectedBank] = useState("");
	const [accountNumber, setAccountNumber] = useState("");
	const [accountName, setAccountName] = useState("");
	const [amount, setAmount] = useState("");
	const [message, setMessage] = useState("Lì xì lấy hên Bính Ngọ 2026");
	const [isExporting, setIsExporting] = useState(false);
	const [loadingBanks, setLoadingBanks] = useState(true);
	const exportRef = useRef(null);

	const [showConfetti, setShowConfetti] = useState(false);
	const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });

	useEffect(() => {
		const handleResize = () => {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		fetch("https://api.vietqr.io/v2/banks")
			.then((res) => res.json())
			.then((data) => {
				setBanks(data.data || []);
				setLoadingBanks(false);
			})
			.catch((err) => {
				console.error("Fetch banks failed", err);
				setLoadingBanks(false);
			});
	}, []);

	const qrUrl = selectedBank && accountNumber
		? `https://qr.sepay.vn/img?acc=${accountNumber}&bank=${selectedBank}&amount=${amount}&des=${encodeURIComponent(message)}&template=compact`
		: null;

	const exportImage = async () => {
		if (exportRef.current === null) return;
		setIsExporting(true);
		try {
			await new Promise(resolve => setTimeout(resolve, 500)); // Wait for render and images
			const canvas = await html2canvas(exportRef.current, {
				useCORS: true,
				scale: 3,
				backgroundColor: null,
			});
			const dataUrl = canvas.toDataURL('image/png');

			const link = document.createElement('a');
			link.href = dataUrl;
			link.download = `lixi-2026-${accountNumber || 'qr'}.png`;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);

			toast.success('Đã lưu ảnh thành công!');
			setShowConfetti(true);
			setTimeout(() => setShowConfetti(false), 5000);
		} catch (err) {
			console.error("Export failed", err);
			toast.error('Có lỗi xảy ra khi lưu ảnh');
		} finally {
			setIsExporting(false);
		}
	};

	return (
		<main className="relative w-full flex flex-col items-center p-4 font-sans">
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
				{/* ... form content ... */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					className="w-full max-w-md flex flex-col gap-6 bg-[#f2e8cf]/90 backdrop-blur-xl p-8 rounded-[2rem] border-2 border-[#c6ac8f]/40 shadow-2xl"
				>
					<div className="text-center md:text-left">
						<h1 className="text-3xl font-display text-[#bc4749] uppercase mb-2 font-bold flex items-center justify-center md:justify-start gap-2">
							Xin Lì Xì 2026 <Smile className="text-yellow-500" />
						</h1>
						<p className="text-[#5e503f] opacity-80 text-sm italic font-vietnamese">"Tạo ảnh QR xin lì xì ."</p>
					</div>

					<div className="flex flex-col gap-4">
						<div className="flex flex-col gap-2">
							<label className="text-xs font-bold text-[#bc4749] uppercase tracking-widest pl-1">Ngân hàng:</label>
							<CustomBankSelect
								banks={banks}
								selectedBank={selectedBank}
								onChange={setSelectedBank}
								loading={loadingBanks}
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-xs font-bold text-[#bc4749] uppercase tracking-wider pl-1">Số tài khoản:</label>
							<input
								type="text"
								value={accountNumber}
								onChange={(e) => setAccountNumber(e.target.value)}
								placeholder="Nhập số tài khoản..."
								className="w-full bg-white/50 border-2 border-[#c6ac8f]/30 rounded-xl p-3 outline-none focus:border-[#bc4749]/40 transition-all text-[#5e503f] placeholder-[#5e503f]/40"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-xs font-bold text-[#bc4749] uppercase tracking-wider pl-1">Tên chủ tài khoản:</label>
							<input
								type="text"
								value={accountName}
								onChange={(e) => setAccountName(e.target.value.toUpperCase())}
								placeholder="Ví dụ: NGUYEN VAN A..."
								className="w-full bg-white/50 border-2 border-[#c6ac8f]/30 rounded-xl p-3 outline-none focus:border-[#bc4749]/40 transition-all text-[#5e503f] placeholder-[#5e503f]/40 uppercase"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<label className="text-xs font-bold text-[#bc4749] uppercase tracking-wider pl-1">Số tiền (Không bắt buộc):</label>
							<input
								type="text"
								value={amount}
								onChange={(e) => setAmount(e.target.value.replace(/\D/g, ''))}
								placeholder="Ví dụ: 686868"
								className="w-full bg-white/50 border-2 border-[#c6ac8f]/30 rounded-xl p-3 outline-none focus:border-[#bc4749]/40 transition-all text-[#5e503f] placeholder-[#5e503f]/40"
							/>
						</div>

						<div className="flex flex-col gap-2">
							<div className="flex justify-between items-end">
								<label className="text-xs font-bold text-[#bc4749] uppercase tracking-wider pl-1">Lời nhắn:</label>
								<span className={`text-[10px] font-bold ${message.length > 50 ? 'text-[#bc4749]' : 'text-[#5e503f]/50'}`}>
									{message.length}/60
								</span>
							</div>
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value.slice(0, 60))}
								placeholder="Lời nhắn xin lì xì..."
								maxLength={60}
								className="w-full h-20 bg-white/50 border-2 border-[#c6ac8f]/30 rounded-xl p-3 outline-none focus:border-[#bc4749]/40 transition-all text-[#5e503f] resize-none placeholder-[#5e503f]/40"
							/>
						</div>
					</div>

					<button
						onClick={exportImage}
						disabled={!accountNumber || !selectedBank || isExporting}
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
							className="bg-[#fdf6e3] rounded-3xl p-4 shadow-2xl border border-[#c6ac8f]/20 relative overflow-hidden aspect-[9/16] w-[340px] md:md:w-[380px] flex-shrink-0 flex flex-col"
						>
							{/* Background Image Layer */}
							<div
								className="absolute inset-0 -z-0 bg-cover bg-center opacity-30 blur-[10px]"
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
							<div className="relative z-20 text-center pt-8 pb-4">
								<div className="flex items-center justify-center gap-2 mb-2">
									<p className="text-[10px] uppercase tracking-[0.3em] text-[#bc4749] font-bold">Tết Bính Ngọ 2026</p>
								</div>
								<h2 className="text-6xl font-display text-[#bc4749] uppercase font-bold tracking-tighter leading-[1.1]" style={{ textShadow: '2px 2px 0px rgba(188, 71, 73, 0.1)' }}>
									LÌ XÌ
								</h2>
								<div className="w-16 h-1.5 bg-[#bc4749] mx-auto mt-6 rounded-full opacity-80" />
							</div>

							{/* Main Card Content */}
							<div className="flex-1 flex flex-col items-center justify-start pt-4 pb-8 w-full px-4 relative z-20">

								{/* QR Container - White Box */}
								<div className="bg-white rounded-[2rem] p-4 shadow-xl w-[80%] aspect-square relative flex items-center justify-center mb-4">
									{/* Wallet Icon Button - Floating */}
									<div className="absolute -top-4 -right-4 bg-[#bc4749] text-white p-3 rounded-full shadow-lg z-30 ring-4 ring-[#fdf6e3]">
										<Wallet size={20} strokeWidth={2} />
									</div>

									{/* SePay / QR Content */}
									<div className="w-full h-full flex flex-col items-center justify-center">
										{qrUrl ? (
											// Using standard img tag for correct rendering in html2canvas
											<img
												src={qrUrl}
												alt="QR Code"
												className="w-full h-full object-contain"
												crossOrigin="anonymous"
											/>
										) : (
											<div className="flex flex-col items-center gap-3 text-[#bc4749]/20">
												<QrCode size={80} strokeWidth={1} />
												<span className="text-xs font-bold uppercase tracking-wider opacity-60">Chưa có thông tin</span>
											</div>
										)}
									</div>
								</div>

								{/* User Info */}
								<div className="text-center w-full mb-2">
									<p className="text-[10px] font-bold text-[#bc4749]/50 uppercase tracking-[0.2em] mb-1">Lì xì cho:</p>
									<h3 className="text-2xl font-bold text-[#bc4749] uppercase truncate px-2 mb-1 leading-relaxed">
										{accountName || "CHƯA NHẬP TÊN"}
									</h3>
									<div className="w-12 h-px bg-[#bc4749]/20 mx-auto mb-2" />
									<p className="text-lg font-vietnamese text-[#bc4749] italic font-medium leading-relaxed px-2 opacity-90">
										"{message}"
									</p>
								</div>
							</div>

						</div>
						<span className="text-xs text-[#5e503f] opacity-60 font-medium tracking-wide">Xem trước ảnh Story</span>
					</motion.div>
				</div>

			</div>
		</main>
	);
}
