"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { summarizeSearchResult } from "@/ai/flows/search-result-summarization";
import type { ResearchArticle } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight } from "lucide-react";

interface SummaryCardProps {
  article: ResearchArticle;
}

export function SummaryCard({ article }: SummaryCardProps) {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const generateSummary = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await summarizeSearchResult({ content: article.content });
        setSummary(result.summary);
      } catch (err) {
        console.error("Error generating summary:", err);
        setError("Could not generate summary.");
        setSummary(article.content); // Fallback to original content
      } finally {
        setIsLoading(false);
      }
    };

    generateSummary();
  }, [article.content]);

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>{article.title}</CardTitle>
        <CardDescription>Source: {article.source}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        {isLoading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            {error ? `Error: ${error}` : summary}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <Link href={article.url} target="_blank" rel="noopener noreferrer">
            Read More <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
