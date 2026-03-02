import { researchArticles } from "@/lib/data";
import { SummaryCard } from "@/components/research/summary-card";

export default function ResearchPage() {
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">Curated Research</h1>
        <p className="mt-2 max-w-2xl mx-auto text-muted-foreground">
          Summaries of high-quality articles from trusted platforms to accelerate your learning.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        {researchArticles.map((article) => (
          <SummaryCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}
