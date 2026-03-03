'use client';

import { useState } from "react";
import type { Program } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { runPythonCode } from "@/ai/flows/run-python-code";

interface InteractivePlaygroundProps {
  program: Program;
}

export function InteractivePlayground({ program }: InteractivePlaygroundProps) {
  const [code, setCode] = useState(program.sourceCode);
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRun = async () => {
    setIsLoading(true);
    setOutput('');
    try {
      const result = await runPythonCode({ code });
      setOutput(result.output);
    } catch (error) {
      console.error("Error running code:", error);
      setOutput("An error occurred while trying to run the code.");
    } finally {
      setIsLoading(false);
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
        <Button onClick={handleRun} disabled={isLoading}>
          <Play className="mr-2 h-4 w-4" />
          {isLoading ? 'Running...' : 'Run Code'}
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
