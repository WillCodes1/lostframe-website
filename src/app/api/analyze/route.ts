import { NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { industry } = await req.json();

    if (!industry || typeof industry !== 'string') {
      return NextResponse.json(
        { error: 'Industry is required' },
        { status: 400 }
      );
    }

    const prompt = `You are an expert AI software architect and venture builder. The user has requested an analysis for the following industry: "${industry}".
Generate exactly 3 high-value, highly-realistic AI software product ideas or automation architectures for this industry.
For each product, provide:
- name: The name of the product (e.g. "[Industry] Intelligence Platform")
- desc: A 2-3 sentence description of how it works and what it does.
- metrics: An array of exactly 4 key metrics demonstrating value. Each metric must have a "label" (string), "value" (string, e.g. "250%", "$500K/yr", "4 weeks"), and "iconName" (choose ONLY from these exactly: "TrendingUp", "DollarSign", "Zap", "Database", "Target", "Cpu", "BarChart3", "Brain").
- techStack: An array of 4-5 key technologies (e.g. "RAG Engine", "Computer Vision").
- timeline: String, e.g. "3-6 weeks"
- roi: String, e.g. "250%"

Return the response as a JSON array of these 3 objects. Do not include markdown formatting like \`\`\`json, just return the raw JSON array.`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        temperature: 0.7,
      }
    });

    const text = response.text;
    if (!text) {
      throw new Error("No response from Gemini");
    }

    // Clean up potential markdown wrapper
    let cleanJson = text.trim();
    if (cleanJson.startsWith("```json")) {
      cleanJson = cleanJson.replace(/```json/g, "").replace(/```/g, "").trim();
    } else if (cleanJson.startsWith("```")) {
      cleanJson = cleanJson.replace(/```/g, "").trim();
    }

    const data = JSON.parse(cleanJson);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return NextResponse.json(
      { error: 'Failed to generate analysis' },
      { status: 500 }
    );
  }
}
