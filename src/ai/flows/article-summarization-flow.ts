'use server';
/**
 * @fileOverview An AI agent for summarizing long articles or documents.
 *
 * - summarizeArticle - A function that handles the article summarization process.
 * - ArticleSummarizationInput - The input type for the summarizeArticle function.
 * - ArticleSummarizationOutput - The return type for the summarizeArticle function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ArticleSummarizationInputSchema = z.object({
  text: z.string().describe('The long article or document content to summarize.'),
});
export type ArticleSummarizationInput = z.infer<typeof ArticleSummarizationInputSchema>;

const ArticleSummarizationOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the provided article.'),
});
export type ArticleSummarizationOutput = z.infer<typeof ArticleSummarizationOutputSchema>;

export async function summarizeArticle(
  input: ArticleSummarizationInput
): Promise<ArticleSummarizationOutput> {
  return articleSummarizationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'articleSummarizationPrompt',
  input: {schema: ArticleSummarizationInputSchema},
  output: {schema: ArticleSummarizationOutputSchema},
  prompt: `You are an expert summarizer.
  
  Please summarize the following article concisely, focusing on its main points.

  Article: {{{text}}}`, // Using Handlebars to inject the article text
});

const articleSummarizationFlow = ai.defineFlow(
  {
    name: 'articleSummarizationFlow',
    inputSchema: ArticleSummarizationInputSchema,
    outputSchema: ArticleSummarizationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
