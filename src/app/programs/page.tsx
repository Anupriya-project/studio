import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { programs } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function ProgramsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {programs.map((program) => (
        <Card key={program.id} className="flex flex-col">
          <CardHeader className="flex-1">
            <CardTitle>{program.title}</CardTitle>
            <CardDescription className="pt-2">{program.description}</CardDescription>
            <div className="flex flex-wrap gap-2 pt-4">
              {program.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
            </div>
          </CardHeader>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href={`/programs/${program.slug}`}>
                View Program <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
