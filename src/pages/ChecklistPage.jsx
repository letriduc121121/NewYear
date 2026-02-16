
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { toPng } from "html-to-image";
import { Download, Check, Loader2, ChevronLeft } from "lucide-react"; // Import ChevronLeft
import { downloadOrOpenImage } from "../utils/download-utils";
import { Link } from "react-router-dom"; // Import Link

const checklistItems = [
	"Ghé quán cafe lạ", "Thử món ăn lạ", "Mua đồ đắt tiền",
	"Du lịch nơi mới", "Cười thật nhiều", "Quyết định lớn",
	"Nói lời yêu bố mẹ", "Ôm người thương", "Khóc thật to",
	"Thêm bạn mới", "Chăm tập thể thao", "Đi chơi với bạn thân",
	"Say một trận", "Nụ hôn hoàn hảo", "Tan vỡ trái tim",
	"Phải lòng ai đó", "Đổi màu tóc",
	"Đi hẹn hò", "Ngắm hoàng hôn", "Đón bình minh",
	"Đọc sách hay", "Xem phim rạp",
	"Bị cháy nắng", "Đi biển", "Leo núi",
	"Thức trắng đêm", "Đi xem concert", "Xăm/Xỏ khuyên",
	"Du lịch một mình", "Thử điều mới", "Đi bảo tàng",
	"Học nhạc cụ", "Đạt ước mơ", "Ngủ nhà lạ",
	"Đi quẩy", "Tiệc tùng", "Đi dã ngoại",
	"Tha thứ cho mình", "Giúp đỡ người khác", "Tận hưởng cô đơn",
	"Sống chậm lại", "Nghe nhạc chữa lành", "Tìm thấy niềm đam mê",
	"Học kỹ năng mới", "Dậy sớm mỗi ngày", "Bớt dùng mạng xã hội",
	"Tiết kiệm khoản lớn", "Vượt qua nỗi sợ", "Viết nhật ký",
];

export default function ChecklistPage() {
	const [checked, setChecked] = useState([]);
	const [isExporting, setIsExporting] = useState(false);
	const exportRef = useRef(null);

	const toggleItem = (index) => {
		setChecked((prev) =>
			prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
		);
	};

	const exportImage = async () => {
		if (exportRef.current === null) return;
		setIsExporting(true);
		try {
			// Increase pixelRatio for better quality
			const dataUrl = await toPng(exportRef.current, { cacheBust: true, pixelRatio: 3, backgroundColor: '#FFFDF5' });
			downloadOrOpenImage(dataUrl, `checklist-2025.png`);
		} catch (err) {
			console.error("Export failed", err);
		} finally {
			setIsExporting(false);
		}
	};

	return (
		<div className="min-h-screen w-full flex items-start md:items-center justify-center p-4 pb-24 md:p-10 font-sans relative">

			<div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-10 md:mt-0">

				{/* Left Side: Header & Actions */}
				<div
					className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:pl-10 lg:pt-10"
				>
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>

						<h2 className="text-xl md:text-2xl tracking-[0.2em] text-yellow-200 font-medium uppercase mb-2 drop-shadow-md">
						</h2>
						<h1 className="text-4xl md:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
							TỔNG KẾT <br />2025
						</h1>
						<p className="text-xl text-white/90 italic font-vietnamese leading-relaxed max-w-md drop-shadow-md">
							"Cùng nhìn lại những cột mốc trong năm qua."
						</p>
					</motion.div>

					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						onClick={exportImage}
						disabled={isExporting}
						className="hidden md:flex mt-4 bg-yellow-400 hover:bg-yellow-500 text-red-900 px-8 py-4 rounded-full shadow-lg items-center gap-3 font-semibold text-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed border-2 border-yellow-200"
					>
						{isExporting ? (
							<Loader2 className="animate-spin" size={24} />
						) : (
							<Download size={24} />
						)}
						Lưu ảnh
					</motion.button>
				</div>

				{/* Right Side: The Checklist Card */}
				<div className="lg:col-span-7 w-full flex justify-center lg:justify-end">
					<motion.div
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative"
					>
						{/* The exportable area */}
						<div
							ref={exportRef}
							className="bg-[#FFFDF5] w-full max-w-[500px] h-auto min-h-[700px] md:min-h-[800px] p-6 md:p-12 shadow-2xl relative flex flex-col"
							style={{ boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.3)" }}
						>
							{/* Watermark/Background Image Decoration */}
							<div className="absolute inset-0 z-0">
								<img
									src="/images/q.jpg"
									alt="Background"
									className="w-full h-full object-cover opacity-80"
								/>
								<div className="absolute inset-0 bg-[#FFFDF5]/70" />
							</div>

							{/* Card Content */}
							<div className="relative z-10 h-full flex flex-col">
								<div className="text-center mb-6 md:mb-10">
									<h3 className="text-xl md:text-3xl font-bold text-[#8B2020] uppercase tracking-wide mb-3 drop-shadow-[0_2px_0_rgba(255,255,255,0.8)]">
										NHÌN LẠI MỘT NĂM
									</h3>
									<div className="w-16 h-1 bg-[#8B2020] mx-auto rounded-full opacity-80"></div>
								</div>

								<div className="grid grid-cols-2 gap-x-2 gap-y-3 md:gap-x-4 md:gap-y-5 flex-1 content-start">
									{checklistItems.map((item, index) => (
										<div
											key={index}
											onClick={() => toggleItem(index)}
											className="flex items-start gap-3 cursor-pointer group select-none"
										>
											<div
												className={`mt-0.5 w-4 h-4 md:w-5 md:h-5 rounded-full border-[1.5px] flex items-center justify-center transition-all duration-300 flex-shrink-0
                                                ${checked.includes(index)
														? "bg-[#8B2020] border-[#8B2020]"
														: "border-[#4A4A4A] group-hover:border-[#8B2020]"}`}
											>
												{checked.includes(index) && (
													<Check size={12} className="text-white" strokeWidth={3} />
												)}
											</div>
											<span
												className={`text-xs md:text-[15px] leading-tight transition-colors duration-300 drop-shadow-[0_1px_1px_rgba(255,255,255,1)]
                                                ${checked.includes(index)
														? "text-[#8B2020] font-bold"
														: "text-[#2D2D2D] font-medium group-hover:text-[#8B2020]"}`}
											>
												{item}
											</span>
										</div>
									))}
								</div>

								{/* Footer decoration for the card */}
								<div className="mt-6 md:mt-8 text-center opacity-70">
									<p className="text-[10px] uppercase tracking-[0.3em] text-[#8B2020] font-bold drop-shadow-[0_1px_0_rgba(255,255,255,0.8)]">Tet 2026 • Year of the Horse</p>
								</div>
							</div>
						</div>

						{/* Mobile Export Button (only visible on small screens below card) */}
						<div className="md:hidden mt-6 flex justify-center">
							<button
								onClick={exportImage}
								disabled={isExporting}
								className="bg-yellow-400 hover:bg-yellow-500 text-red-900 px-8 py-4 rounded-full shadow-lg flex items-center gap-3 font-semibold text-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed border-2 border-yellow-200"
							>
								{isExporting ? (
									<Loader2 className="animate-spin" size={24} />
								) : (
									<Download size={24} />
								)}
								Lưu ảnh
							</button>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
