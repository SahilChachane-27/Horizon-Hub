'use server';

import { z } from 'zod';
import { summarizeArticle } from '@/ai/flows/article-summarization-flow';

const summarizeSchema = z.object({
  text: z.string().min(100, { message: 'Article text must be at least 100 characters long.' }),
});

type State = {
  summary: string | null;
  error: string | null;
};

export async function handleSummarize(prevState: State, formData: FormData): Promise<State> {
  const validatedFields = summarizeSchema.safeParse({
    text: formData.get('text'),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.text?.[0] || 'Invalid input.',
      summary: null,
    };
  }

  try {
    const result = await summarizeArticle({ text: validatedFields.data.text });
    if (result.summary) {
        return { summary: result.summary, error: null };
    }
    return { error: 'Failed to generate a summary.', summary: null };
  } catch (error) {
    console.error('Summarization Error:', error);
    return { error: 'An unexpected error occurred while summarizing the article. Please try again.', summary: null };
  }
}
