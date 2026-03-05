import { notFound } from "next/navigation";
import { notes } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/code-block";
import { PythonPlayground } from "@/components/notes/python-playground";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
      <div className="space-y-4">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{note.title}</h1>
            <p className="text-muted-foreground mt-2">{note.description}</p>
          </div>
          <div className="shrink-0 text-right">
            {note.pdfUrl ? (
              <Button asChild>
                <a href={note.pdfUrl} download>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </a>
              </Button>
            ) : (
              <p className="text-sm text-muted-foreground">PDF will be available soon.</p>
            )}
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-2">
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
