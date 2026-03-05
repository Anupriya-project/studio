'use client';

import { useState } from "react";
import type { Program } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

declare const Sk: any;

interface InteractivePlaygroundProps {
  program: Program;
}

export function InteractivePlayground({ program }: InteractivePlaygroundProps) {
  const [code, setCode] = useState(program.sourceCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setOutput('');
    setIsRunning(true);

    if (typeof Sk === 'undefined') {
        setOutput('Error: Skulpt library not loaded. Please try refreshing the page.');
        setIsRunning(false);
        return;
    }
    
    Sk.configure({
      output: (text: string) => {
        setOutput(prev => prev + text);
      },
      read: (x: string) => {
        if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
          throw new Error("File not found: '" + x + "'");
        return Sk.builtinFiles["files"][x];
      },
       __future__: Sk.python3,
    });

    const skulptPromise = Sk.misceval.asyncToPromise(() => {
      return Sk.importMainWithBody("<stdin>", false, code, true);
    });

    skulptPromise.then(
      () => { 
        setIsRunning(false);
       },
      (err: any) => {
        setOutput(err.toString());
        setIsRunning(false);
      }
    );
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
        <Button onClick={handleRun} disabled={isRunning}>
          <Play className="mr-2 h-4 w-4" />
          {isRunning ? 'Running...' : 'Run Code'}
        </Button>
        {(output || isRunning) && (
          <div>
            <h3 className="font-semibold mb-2">Output:</h3>
            <pre className="bg-muted p-4 rounded-md text-sm whitespace-pre-wrap min-h-[3.5rem]"><code>{output}</code></pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
