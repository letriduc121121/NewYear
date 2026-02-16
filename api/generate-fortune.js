import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY || "");

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	try {
		const { name, birthDate, customPrompt } = req.body;

		if (!GEMINI_API_KEY) {
			return res.status(500).json({ error: "Vui lòng cấu hình GEMINI_API_KEY" });
		}

		const model = genAI.getGenerativeModel({ model: "gemma-3-27b-it" });

		const defaultPrompt = `Hãy đóng vai một thầy đồ xem quẻ Tết xưa cổ truyền Việt Nam. Hãy gieo một quẻ may mắn cho năm Bính Ngọ 2026 dựa trên thông tin: Tên: "${name}", Ngày sinh: "${birthDate || "Không rõ"}". 
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

		const prompt = customPrompt || defaultPrompt;

		const result = await model.generateContent(prompt);
		const response = await result.response;
		const responseText = response.text();

		if (!responseText) {
			throw new Error("AI không trả về nội dung");
		}

		return res.status(200).json({ text: responseText });
	} catch (error) {
		console.error("AI Fortune Error:", error);
		return res.status(500).json({ error: error.message || "Thầy đang bận gieo quẻ khác, vui lòng thử lại sau." });
	}
}
