import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { notes } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function NotesPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notes.map((note) => (
        <Card key={note.id} id={note.slug} className="flex flex-col">
          <CardHeader className="flex-1">
            <CardTitle>{note.title}</CardTitle>
            <CardDescription className="pt-2">{note.description}</CardDescription>
            <div className="flex flex-wrap gap-2 pt-4">
              {note.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
          </CardHeader>
          <CardFooter>
            <Button asChild className="w-full" variant="outline">
              <a href={note.pdfUrl} download>
                Download PDF <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
