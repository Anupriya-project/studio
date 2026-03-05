import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { notes } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { PythonPlayground } from '@/components/notes/python-playground';

export default function NotesPage() {
  return (
    <div className="space-y-6">
      <PythonPlayground />
      {notes.map((note) => (
        <Card key={note.id} id={note.slug}>
          <CardHeader>
            <CardTitle>{note.title}</CardTitle>
            <CardDescription className="pt-2">{note.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {note.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline">
              <Link href={note.pdfUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
