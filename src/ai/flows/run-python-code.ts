'use server';
/**
 * @fileOverview A Genkit flow to simulate running Python code.
 *
 * - runPythonCode - A function that takes Python code and returns the simulated output.
 * - RunPythonCodeInput - The input type for the runPythonCode function.
 * - RunPythonCodeOutput - The return type for the runPythonCode function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RunPythonCodeInputSchema = z.object({
  code: z.string().describe('The Python code to execute.'),
});
export type RunPythonCodeInput = z.infer<typeof RunPythonCodeInputSchema>;

const RunPythonCodeOutputSchema = z.object({
  output: z.string().describe('The simulated output of the Python code.'),
});
export type RunPythonCodeOutput = z.infer<typeof RunPythonCodeOutputSchema>;

export async function runPythonCode(input: RunPythonCodeInput): Promise<RunPythonCodeOutput> {
  const key = process.env.GEMINI_API_KEY;
  if (!key || key === 'YOUR_API_KEY_HERE') {
    return {
      output:
        'AI code execution is unavailable. Please configure your Gemini API key in the .env file.',
    };
  }
  return runPythonCodeFlow(input);
}

const runPythonCodePrompt = ai.definePrompt({
  name: 'runPythonCodePrompt',
  input: {schema: RunPythonCodeInputSchema},
  output: {schema: RunPythonCodeOutputSchema},
  prompt: `You are a Python code interpreter. Execute the following code and provide only the output that would be printed to the standard output. Do not provide any explanation, commentary, or markdown formatting. Just the raw output.

Code:
---
{{{code}}}
---
`,
});

const runPythonCodeFlow = ai.defineFlow(
  {
    name: 'runPythonCodeFlow',
    inputSchema: RunPythonCodeInputSchema,
    outputSchema: RunPythonCodeOutputSchema,
  },
  async input => {
    const {output} = await runPythonCodePrompt(input);
    return output!;
  }
);
