import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, BookOpen, Search, Youtube } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Practical Programs",
    description: "Learn from working code examples with outputs and error explanations.",
  },
  {
    icon: BookOpen,
    title: "Clear Notes",
    description: "Easy-to-understand explanations of Python concepts with downloadable PDFs.",
  },
  {
    icon: Youtube,
    title: "Curated Videos",
    description: "Embedded YouTube tutorials categorized by skill level for visual learning.",
  },
  {
    icon: Search,
    title: "AI-Powered Search",
    description: "Find relevant answers instantly with our intelligent search and summarization tool.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Everything You Need to Succeed</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A complete toolkit for your Python learning journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="pt-2">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
