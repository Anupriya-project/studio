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
import type { Note } from '@/lib/types';

const noteSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().min(1, 'Description is required'),
  tags: z.string().min(1, 'Tags are required (comma-separated)'),
  codeSnippet: z.string().optional(),
});

type NoteFormValues = z.infer<typeof noteSchema>;

interface NoteFormProps {
  note?: Note | null;
  onSubmit: (values: Note) => void;
  onCancel: () => void;
}

export function NoteForm({ note, onSubmit, onCancel }: NoteFormProps) {
  const form = useForm<NoteFormValues>({
    resolver: zodResolver(noteSchema),
    defaultValues: {
      title: note?.title || '',
      slug: note?.slug || '',
      description: note?.description || '',
      tags: note?.tags.join(', ') || '',
      codeSnippet: note?.codeSnippet || '',
    },
  });

  const handleSubmit = (values: NoteFormValues) => {
    const newNote: Note = {
      id: note?.id || new Date().toISOString(),
      ...values,
      tags: values.tags.split(',').map(tag => tag.trim()),
    };
    onSubmit(newNote);
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
        <FormField
          control={form.control}
          name="codeSnippet"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Code Snippet</FormLabel>
              <FormControl>
                <Textarea {...field} className="font-mono" rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">{note ? 'Update' : 'Create'}</Button>
        </div>
      </form>
    </Form>
  );
}
