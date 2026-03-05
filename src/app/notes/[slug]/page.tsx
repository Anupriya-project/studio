import { notFound } from "next/navigation";
import { notes } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/code-block";
import { PythonPlayground } from "@/components/notes/python-playground";

export function generateStaticParams() {
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

export default function NoteDetailPage({ params }: { params: { slug: string } }) {
  const note = notes.find((n) => n.slug === params.slug);

  if (!note) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">{note.title}</h1>
        <p className="text-muted-foreground">{note.description}</p>
        <div className="flex items-center flex-wrap gap-2 pt-2">
          <span className="text-sm">Tags:</span>
          {note.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
      </div>
      
      <div className="grid gap-6">
        {note.codeSnippet && (
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg font-semibold">Code Example</CardTitle>
                </CardHeader>
                <CardContent>
                    <CodeBlock code={note.codeSnippet} />
                </CardContent>
            </Card>
        )}

        <PythonPlayground />
      </div>
    </div>
  );
}
