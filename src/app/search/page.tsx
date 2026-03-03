'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { allContent } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredContent = query
    ? allContent.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          (item.description && item.description.toLowerCase().includes(query.toLowerCase())) ||
          (item.tags && item.tags.some((tag: string) => tag.toLowerCase().includes(query.toLowerCase())))
      )
    : [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Search Results</h1>
        <p className="text-muted-foreground">
          {filteredContent.length > 0
            ? `Found ${filteredContent.length} results for "${query}"`
            : `No results found for "${query}". Try another search.`}
        </p>
      </div>
      
      {filteredContent.length > 0 && (
        <div className="grid grid-cols-1 gap-4">
          {filteredContent.map((item) => (
            <Link key={`${item.type}-${item.id}`} href={item.href}>
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-4">
                         <CardTitle>{item.title}</CardTitle>
                         <Badge variant="outline">{item.type}</Badge>
                      </div>
                      <CardDescription className="mt-2">{item.description}</CardDescription>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SearchPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <SearchResults />
        </Suspense>
    )
}
