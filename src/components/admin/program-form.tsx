'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import type { Program } from '@/lib/types';

const programSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().min(1, 'Description is required'),
  sourceCode: z.string().min(1, 'Source code is required'),
  output: z.string().min(1, 'Output is required'),
  commonErrors: z.string().min(1, 'Common errors explanation is required'),
  howToRun: z.string().min(1, 'How to run is required'),
  tags: z.string().min(1, 'Tags are required (comma-separated)'),
});

type ProgramFormValues = z.infer<typeof programSchema>;

interface ProgramFormProps {
  program?: Program | null;
  onSubmit: (values: Program) => void;
  onCancel: () => void;
}

export function ProgramForm({ program, onSubmit, onCancel }: ProgramFormProps) {
  const form = useForm<ProgramFormValues>({
    resolver: zodResolver(programSchema),
    defaultValues: {
      title: program?.title || '',
      slug: program?.slug || '',
      description: program?.description || '',
      sourceCode: program?.sourceCode || '',
      output: program?.output || '',
      commonErrors: program?.commonErrors || '',
      howToRun: program?.howToRun || '',
      tags: program?.tags.join(', ') || '',
    },
  });

  const handleSubmit = (values: ProgramFormValues) => {
    const newProgram: Program = {
      id: program?.id || new Date().toISOString(),
      ...values,
      tags: values.tags.split(',').map(tag => tag.trim()),
    };
    onSubmit(newProgram);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="sourceCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Source Code</FormLabel>
              <FormControl>
                <Textarea {...field} className="font-mono" rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="output"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Output</FormLabel>
              <FormControl>
                <Textarea {...field} className="font-mono" rows={3}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="commonErrors"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Common Errors</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="howToRun"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How to Run</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tags (comma-separated)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">{program ? 'Update' : 'Create'}</Button>
        </div>
      </form>
    </Form>
  );
}
