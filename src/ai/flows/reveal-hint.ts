'use server';
/**
 * @fileOverview Provides AI-assisted hints for challenging categories.
 *
 * - revealHint - A function that generates a hint for a given category and letter.
 * - RevealHintInput - The input type for the revealHint function.
 * - RevealHintOutput - The return type for the revealHint function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const RevealHintInputSchema = z.object({
  category: z.string().describe('The category for which to generate a hint.'),
  letter: z.string().describe('The letter the word must start with.'),
});
export type RevealHintInput = z.infer<typeof RevealHintInputSchema>;

const RevealHintOutputSchema = z.object({
  hint: z.string().describe('A hint for a word in the given category starting with the given letter.'),
});
export type RevealHintOutput = z.infer<typeof RevealHintOutputSchema>;

export async function revealHint(input: RevealHintInput): Promise<RevealHintOutput> {
  return revealHintFlow(input);
}

const prompt = ai.definePrompt({
  name: 'revealHintPrompt',
  input: {
    schema: z.object({
      category: z.string().describe('The category for which to generate a hint.'),
      letter: z.string().describe('The letter the word must start with.'),
    }),
  },
  output: {
    schema: z.object({
      hint: z.string().describe('A hint for a word in the given category starting with the given letter.'),
    }),
  },
  prompt: `I need a hint for a word in the category "{{category}}" that starts with the letter "{{letter}}". Give me a short, helpful hint.`,
});

const revealHintFlow = ai.defineFlow<
  typeof RevealHintInputSchema,
  typeof RevealHintOutputSchema
>({
  name: 'revealHintFlow',
  inputSchema: RevealHintInputSchema,
  outputSchema: RevealHintOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
