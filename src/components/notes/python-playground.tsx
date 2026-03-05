'use client';

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export function PythonPlayground() {
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  const handleRun = () => {
    setOutput(code);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Python Playground</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="font-mono bg-muted min-h-[150px] text-base"
          placeholder="Type your Python code here"
        />
        <Button onClick={handleRun}>
          <Play className="mr-2 h-4 w-4" />
          Run
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
