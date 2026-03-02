import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/google-genai';

const plugins = [];
const key = process.env.GEMINI_API_KEY;

if (key && key !== 'YOUR_API_KEY_HERE') {
  plugins.push(googleAI());
}

export const ai = genkit({
  plugins,
  model: 'googleai/gemini-2.5-flash',
});
