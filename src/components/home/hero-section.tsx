import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="text-center py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
          Master Python, Your Way.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          PyMentor offers a clear path from beginner to pro with practical examples,
          in-depth notes, and expert-curated resources. Start your journey today.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/programs">
              Start Learning <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/#roadmap">
              View Roadmap
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
