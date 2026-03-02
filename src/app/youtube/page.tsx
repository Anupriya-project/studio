import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { youtubeVideos } from "@/lib/data";
import type { YouTubeVideo } from "@/lib/types";

const VideoCard = ({ video }: { video: YouTubeVideo }) => (
  <Card>
    <CardHeader>
      <div className="aspect-video mb-4">
        <iframe
          className="w-full h-full rounded-md"
          src={`https://www.youtube.com/embed/${video.videoId}`}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <CardTitle>{video.title}</CardTitle>
      <CardDescription>{video.description}</CardDescription>
    </CardHeader>
  </Card>
);

export default function YoutubePage() {
  const beginnerVideos = youtubeVideos.filter((v) => v.level === "Beginner");
  const intermediateVideos = youtubeVideos.filter((v) => v.level === "Intermediate");
  const advancedVideos = youtubeVideos.filter((v) => v.level === "Advanced");

  return (
    <Tabs defaultValue="beginner" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="beginner">Beginner</TabsTrigger>
        <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
        <TabsTrigger value="advanced">Advanced</TabsTrigger>
      </TabsList>
      <TabsContent value="beginner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {beginnerVideos.map((video) => <VideoCard key={video.id} video={video} />)}
        </div>
      </TabsContent>
      <TabsContent value="intermediate">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {intermediateVideos.map((video) => <VideoCard key={video.id} video={video} />)}
        </div>
      </TabsContent>
      <TabsContent value="advanced">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {advancedVideos.map((video) => <VideoCard key={video.id} video={video} />)}
        </div>
      </TabsContent>
    </Tabs>
  );
}
