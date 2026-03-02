'use server';
/**
 * @fileOverview This file implements a Genkit flow for summarizing search results.
 *
 * - summarizeSearchResult - A function that handles the summarization of a given search result content.
 * - SearchResultSummarizationInput - The input type for the summarizeSearchResult function.
 * - SearchResultSummarizationOutput - The return type for the summarizeSearchResult function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SearchResultSummarizationInputSchema = z.object({
  content: z.string().describe('The full text content of a search result to be summarized.'),
});
export type SearchResultSummarizationInput = z.infer<typeof SearchResultSummarizationInputSchema>;

const SearchResultSummarizationOutputSchema = z.object({
  summary: z.string().describe('A concise, AI-generated summary of the search result content.'),
});
export type SearchResultSummarizationOutput = z.infer<typeof SearchResultSummarizationOutputSchema>;

export async function summarizeSearchResult(
  input: SearchResultSummarizationInput
): Promise<SearchResultSummarizationOutput> {
  const key = process.env.GEMINI_API_KEY;
  if (!key || key === 'YOUR_API_KEY_HERE') {
    return {
      summary:
        'AI summary is unavailable. Please configure your Gemini API key in the .env file.',
    };
  }
  return searchResultSummarizationFlow(input);
}

const summarizeResultPrompt = ai.definePrompt({
  name: 'summarizeResultPrompt',
  input: {schema: SearchResultSummarizationInputSchema},
  output: {schema: SearchResultSummarizationOutputSchema},
  prompt: `You are an AI assistant tasked with summarizing search results. Your goal is to provide a concise, accurate, and easy-to-understand summary of the provided text content. The summary should capture the main points and key information, allowing a user to quickly determine the relevance of the content without reading the full text.

Here is the content to summarize:

---
{{{content}}}
---

Please provide a concise summary.`,
});

const searchResultSummarizationFlow = ai.defineFlow(
  {
    name: 'searchResultSummarizationFlow',
    inputSchema: SearchResultSummarizationInputSchema,
    outputSchema: SearchResultSummarizationOutputSchema,
  },
  async input => {
    const {output} = await summarizeResultPrompt(input);
    return output!;
  }
);
