'use client';

import { notFound } from "next/navigation";
import { programs } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

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

  const [code, setCode] = useState(program.sourceCode);
  const [output, setOutput] = useState('');

  const handleRun = () => {
    // In a real application, this would involve a secure backend service to execute the code.
    // For this demo, we'll simulate it by checking against the expected source.
    if (code.trim().replace(/\r\n/g, '\n') === program.sourceCode.trim().replace(/\r\n/g, '\n')) {
      setOutput(program.output);
    } else {
      setOutput("Running custom code is not supported in this interactive playground. Please use the original code to see the correct output.");
    }
  };

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
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Interactive Playground</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="font-mono bg-muted min-h-[200px] text-base"
              placeholder="Enter your Python code here..."
            />
            <Button onClick={handleRun}>
              <Play className="mr-2 h-4 w-4" />
              Run Code
            </Button>
            {output && (
              <div>
                <h3 className="font-semibold mb-2">Output:</h3>
                <pre className="bg-muted p-4 rounded-md text-sm"><code>{output}</code></pre>
              </div>
            )}
          </CardContent>
        </Card>

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
