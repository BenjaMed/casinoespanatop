export interface GeminiOptions {
  model?: string;
  systemInstruction?: string;
  history?: any[];
}

/**
 * Sends a prompt to the Gemini API via our secure serverless function.
 * This prevents exposing the API KEY in the client-side bundle.
 */
export async function askGemini(prompt: string, options: GeminiOptions = {}): Promise<string> {
  try {
    const response = await fetch('/api/gemini', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        ...options,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || `Error ${response.status}: ${response.statusText}`);
    }

    return data.text;
  } catch (error: any) {
    console.error('Error calling askGemini:', error);
    throw error;
  }
}
