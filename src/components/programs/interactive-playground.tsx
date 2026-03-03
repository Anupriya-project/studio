'use client';

import { useState } from "react";
import type { Program } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface InteractivePlaygroundProps {
  program: Program;
}

export function InteractivePlayground({ program }: InteractivePlaygroundProps) {
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
  );
}
