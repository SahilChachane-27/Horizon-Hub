'use client';

import { useFormStatus } from 'react-dom';
import { handleSummarize } from '@/app/actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useActionState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

const initialState = {
  summary: null,
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled={pending}>
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? 'Summarizing...' : 'Summarize'}
    </Button>
  );
}

export function ArticleSummarizer() {
  const [state, formAction] = useActionState(handleSummarize, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <div className="space-y-4">
      <h5 className="font-bold text-lg text-primary-foreground">AI Article Summarizer</h5>
      <p className="text-sm">
        Try our AI-powered tool to summarize any article. Paste the text below.
      </p>
      <form action={formAction} className="space-y-4" suppressHydrationWarning>
        <Textarea
          name="text"
          placeholder="Paste your article text here (min. 100 characters)..."
          className="bg-primary-foreground/10 text-primary-foreground placeholder:text-primary-foreground/50 border-primary-foreground/20 focus:bg-primary-foreground/20"
          rows={5}
          required
        />
        <SubmitButton />
      </form>

      {state.summary && (
        <Card className="mt-6 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground">
          <CardHeader>
            <CardTitle>Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-primary-foreground/80">{state.summary}</CardDescription>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
