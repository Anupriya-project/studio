import Link from 'next/link';
import { notes, externalReferences } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Link as LinkIcon, Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function NotesPage() {
  return (
    <div className="space-y-12">
        <div>
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-tight">Python Notes</h1>
                <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
                In-depth articles and guides on various Python concepts.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
                {notes.map((note) => (
                    <Card key={note.id} className="flex flex-col">
                        <CardHeader className="flex-1">
                            <CardTitle>{note.title}</CardTitle>
                            <CardDescription className="pt-2">{note.description}</CardDescription>
                            <div className="flex flex-wrap gap-2 pt-4">
                                {note.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                            </div>
                        </CardHeader>
                        <CardFooter>
                            <Button asChild className="w-full">
                                <Link href={`/notes/${note.slug}`}>
                                Read More <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>

        <div>
            <h3 className="text-2xl font-semibold text-center">External References</h3>
            <p className="mt-2 max-w-2xl mx-auto text-muted-foreground text-center">
                High-quality resources from around the web to supplement your learning.
            </p>
            <div className="max-w-2xl mx-auto mt-8 space-y-4">
                {externalReferences.map((ref) => (
                    <Card key={ref.title}>
                        <CardHeader className='flex-row items-center justify-between'>
                            <div>
                                <CardTitle className="text-lg">{ref.title}</CardTitle>
                                <CardDescription>{ref.description}</CardDescription>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button asChild variant="outline" size="icon">
                                    <a href={ref.url} target="_blank" rel="noopener noreferrer">
                                        <LinkIcon className="h-4 w-4" />
                                    </a>
                                </Button>
                                {ref.pdfUrl && (
                                    <Button asChild variant="outline" size="icon">
                                        <a href={ref.pdfUrl} download>
                                            <Download className="h-4 w-4" />
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    </div>
  );
}
