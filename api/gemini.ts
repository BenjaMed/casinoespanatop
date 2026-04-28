import { GoogleGenAI } from "@google/genai";

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt, history, systemInstruction, model = 'gemini-2.0-flash' } = req.body;

  if (!prompt && !history) {
    return res.status(400).json({ error: 'Prompt or history is required' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API key not configured on server. Please set GEMINI_API_KEY in Vercel environment variables.' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Default system instruction
    const finalSystemInstruction = systemInstruction || "Eres un experto de CasinosTOP, una guía líder de casinos online en España. Tu tono es profesional, útil, transparente y serio. Siempre incluyes advertencias sobre el juego responsable (+18, Juega con responsabilidad). Ayudas a los usuarios a entender bonos, términos y condiciones, y a comparar operadores legales con licencia DGOJ.";

    if (history) {
      // Chat mode
      const chat = ai.chats.create({ 
        model,
        config: { systemInstruction: finalSystemInstruction },
        history 
      });
      const result = await chat.sendMessage(prompt || "");
      return res.status(200).json({ text: result.text });
    } else {
      // Content generation mode
      const result = await ai.models.generateContent({
        model,
        contents: prompt,
        config: { systemInstruction: finalSystemInstruction }
      });
      return res.status(200).json({ text: result.text });
    }
  } catch (error: any) {
    console.error('Gemini API error:', error);
    
    if (error.message?.includes('429')) {
      return res.status(429).json({ error: 'Límite de peticiones excedido. Por favor, intenta de nuevo en unos minutos.' });
    }

    return res.status(500).json({ error: 'Error procesando la petición con IA. Inténtalo de nuevo más tarde.' });
  }
}
