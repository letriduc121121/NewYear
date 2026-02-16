import { GoogleGenerativeAI } from "@google/generative-ai";

// Lấy API key từ environment variables
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// Khởi tạo Gemini AI
const genAI = GEMINI_API_KEY ? new GoogleGenerativeAI(GEMINI_API_KEY) : null;

/**
 * Hàm gieo quẻ may mắn cho năm mới
 * @param {string} name - Tên người gieo quẻ
 * @param {string} birthDate - Ngày sinh (YYYY-MM-DD)
 * @returns {Promise<string>} - Nội dung quẻ
 */
export async function generateFortune(name, birthDate) {
	if (!genAI) {
		throw new Error("Vui lòng cấu hình GEMINI_API_KEY trong file .env");
	}

	const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

	const prompt = `Hãy đóng vai một thầy đồ xem quẻ Tết xưa cổ truyền Việt Nam. Hãy gieo một quẻ may mắn cho năm Bính Ngọ 2026 dựa trên thông tin: Tên: "${name}", Ngày sinh: "${birthDate || "Không rõ"}". 
      Yêu cầu:
      - Ngôn ngữ: Trang trọng, hán việt nhẹ nhàng, pha chút chất thơ nhưng vẫn dễ hiểu.
      - Nội dung: Dự đoán về sự nghiệp, tình cảm, hoặc sức khỏe một cách tích cực, mang tính khích lệ.
      - Cấu trúc: 
        1. Tên quẻ (Ví dụ: Mã Đóa Thành Công, Vạn Sự Hanh Thông...)
        2. Lời thơ (4 câu thơ lục bát hoặc thất ngôn)
        3. Luận giải ngắn gọn (2-3 câu).
        4. Màu may mắn: (Chỉ 1-2 từ màu sắc)
        5. Hướng xuất hành: (Chỉ tên một hướng)
      - Độ dài tổng cộng: Dưới 180 ký tự để vừa khung ảnh (quan trọng).
      - KHÔNG sử dụng định dạng Markdown (như dấu **).
      - Chỉ trả về nội dung quẻ, các phần trên mỗi ý một dòng, không thêm lời dẫn.`;

	try {
		const result = await model.generateContent(prompt);
		const response = await result.response;
		const responseText = response.text();

		if (!responseText) {
			throw new Error("AI không trả về nội dung");
		}

		return responseText;
	} catch (error) {
		console.error("AI Fortune Error:", error);
		throw new Error(error.message || "Thầy đang bận gieo quẻ khác, vui lòng thử lại sau.");
	}
}

/**
 * Hàm tạo lời chúc Tết bằng AI
 * @param {string} prompt - Ý tưởng lời chúc từ người dùng
 * @returns {Promise<string>} - Lời chúc được tạo
 */
export async function generateGreeting(prompt) {
	if (!genAI) {
		throw new Error("Vui lòng cấu hình GEMINI_API_KEY trong file .env");
	}

	const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

	const fullPrompt = `Hãy đóng vai một nghệ nhân viết thư pháp và câu đối Tết. Hãy viết một lời chúc Tết Nguyên Đán 2026 (năm Bính Ngọ) dựa trên ý tưởng: "${prompt}". 
      Yêu cầu: 
      - Phong cách: Trang trọng, ấm áp, sử dụng từ ngữ Hán Việt tinh tế hoặc ngôn ngữ hiện đại chân thành tùy theo đối tượng.
      - Hình thức: Có thể là một lời chúc ngắn gọn hoặc một cặp câu rộn ràng có vần điệu.
      - Giới hạn: Độ dài PHẢI dưới 150 ký tự.
      - KHÔNG sử dụng định dạng Markdown và không dùng dấu ngoặc kép bao quanh.
      - Chỉ trả về duy nhất nội dung lời chúc, không lời dẫn.`;

	try {
		const result = await model.generateContent(fullPrompt);
		const response = await result.response;
		const responseText = response.text();

		if (!responseText) {
			throw new Error("AI không trả về nội dung");
		}

		return responseText;
	} catch (error) {
		console.error("AI Greeting Error:", error);
		throw new Error(error.message || "Không thể tạo lời chúc lúc này.");
	}
}
