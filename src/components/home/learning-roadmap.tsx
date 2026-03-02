import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { learningRoadmapSteps } from "@/lib/data";

export function LearningRoadmap() {
  return (
    <section id="roadmap" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Your Learning Roadmap</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            A step-by-step guide from your first line of code to complex applications.
          </p>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-border"></div>

          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-1 md:gap-y-12">
            {learningRoadmapSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="md:flex items-center">
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    {/* Circle on the timeline */}
                    <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground left-1/2 -translate-x-1/2">
                      {index + 1}
                    </div>

                    <Card className={`w-full md:w-auto md:max-w-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                      <CardHeader>
                        <div className="flex items-center gap-4">
                           <step.icon className="h-8 w-8 text-accent" />
                           <div>
                            <CardTitle>{step.title}</CardTitle>
                            <CardDescription className="mt-2">{step.description}</CardDescription>
                           </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
