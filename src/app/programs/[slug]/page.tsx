import { notFound } from "next/navigation";
import { programs } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { InteractivePlayground } from "@/components/programs/interactive-playground";

export function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const program = programs.find((p) => p.slug === params.slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight">{program.title}</h1>
        <p className="text-muted-foreground">{program.description}</p>
        <div className="flex items-center flex-wrap gap-2 pt-2">
          <span className="text-sm">Tags:</span>
          {program.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
        </div>
      </div>
      
      <div className="grid gap-6">
        <InteractivePlayground program={program} />

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Correct Output</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="bg-muted p-4 rounded-md text-sm"><code>{program.output}</code></pre>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Common Error Explanation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{program.commonErrors}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">How to Run</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{program.howToRun}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
