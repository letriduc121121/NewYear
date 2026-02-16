import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = process.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY || "");

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	try {
		const { prompt } = req.body;

		if (!GEMINI_API_KEY) {
			return res.status(500).json({ error: "Vui lòng cấu hình GEMINI_API_KEY" });
		}

		const model = genAI.getGenerativeModel({ model: "gemma-3-27b-it" });

		const result = await model.generateContent(`Hãy đóng vai một nghệ nhân viết thư pháp và câu đối Tết. Hãy viết một lời chúc Tết Nguyên Đán 2026 (năm Bính Ngọ) dựa trên ý tưởng: "${prompt}". 
      Yêu cầu: 
      - Phong cách: Trang trọng, ấm áp, sử dụng từ ngữ Hán Việt tinh tế hoặc ngôn ngữ hiện đại chân thành tùy theo đối tượng.
      - Hình thức: Có thể là một lời chúc ngắn gọn hoặc một cặp câu rộn ràng có vần điệu.
      - Giới hạn: Độ dài PHẢI dưới 150 ký tự.
      - KHÔNG sử dụng định dạng Markdown và không dùng dấu ngoặc kép bao quanh.
      - Chỉ trả về duy nhất nội dung lời chúc, không lời dẫn.`);

		const response = await result.response;
		const responseText = response.text();

		if (!responseText) {
			throw new Error("AI không trả về nội dung");
		}

		return res.status(200).json({ text: responseText });
	} catch (error) {
		console.error("AI Generation Error:", error);
		return res.status(500).json({ error: error.message || "Không thể tạo lời chúc lúc này." });
	}
}
