import { notFound } from "next/navigation";
import { notes } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/code-block";
import Link from "next/link";
import { Download } from "lucide-react";
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

        <Card>
            <CardHeader>
                <CardTitle className="text-lg font-semibold">Downloadable PDF</CardTitle>
                <CardDescription>
                    For offline viewing, you can download the complete notes as a PDF.
                </CardDescription>
            </CardHeader>
             <CardFooter>
                <Button asChild>
                    <Link href={note.pdfUrl} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Notes
                    </Link>
                </Button>
            </CardFooter>
        </Card>

        <PythonPlayground />
      </div>
    </div>
  );
}
