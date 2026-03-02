import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProgramsTable } from "@/components/admin/programs-table";
import { NotesTable } from "@/components/admin/notes-table";
import { VideosTable } from "@/components/admin/videos-table";

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your platform's content from one place.
        </p>
      </div>
      <Tabs defaultValue="programs" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>
        <TabsContent value="programs">
          <ProgramsTable />
        </TabsContent>
        <TabsContent value="notes">
          <NotesTable />
        </TabsContent>
        <TabsContent value="videos">
          <VideosTable />
        </TabsContent>
      </Tabs>
    </div>
  );
}
