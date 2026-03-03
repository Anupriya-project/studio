'use client';

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PlusCircle } from "lucide-react";
import { youtubeVideos as initialVideos } from "@/lib/data";
import { Badge } from "../ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { VideoForm } from "./video-form";
import type { YouTubeVideo } from "@/lib/types";

export function VideosTable() {
    const [videos, setVideos] = useState<YouTubeVideo[]>(initialVideos);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<YouTubeVideo | null>(null);

    const handleAddClick = () => {
        setSelectedVideo(null);
        setIsFormOpen(true);
    };

    const handleEditClick = (video: YouTubeVideo) => {
        setSelectedVideo(video);
        setIsFormOpen(true);
    };

    const handleDeleteClick = (video: YouTubeVideo) => {
        setSelectedVideo(video);
        setIsDeleteAlertOpen(true);
    };

    const handleFormSubmit = (video: YouTubeVideo) => {
        if (selectedVideo) {
            setVideos(videos.map(v => v.id === video.id ? video : v));
        } else {
            setVideos([video, ...videos]);
        }
        setIsFormOpen(false);
        setSelectedVideo(null);
    };

    const handleDeleteConfirm = () => {
        if (selectedVideo) {
            setVideos(videos.filter(v => v.id !== selectedVideo.id));
        }
        setIsDeleteAlertOpen(false);
        setSelectedVideo(null);
    };


  return (
    <>
        <Card>
        <CardHeader>
            <div className="flex justify-between items-start">
            <div>
                <CardTitle>YouTube Videos</CardTitle>
                <CardDescription>Manage your YouTube video tutorials.</CardDescription>
            </div>
            <Button size="sm" className="gap-1" onClick={handleAddClick}>
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Video</span>
            </Button>
            </div>
        </CardHeader>
        <CardContent>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Level</TableHead>
                <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {videos.map((video) => (
                <TableRow key={video.id}>
                    <TableCell className="font-medium">{video.title}</TableCell>
                    <TableCell>
                    <Badge variant={
                        video.level === "Beginner" ? "default" : video.level === "Intermediate" ? "secondary" : "outline"
                    }>{video.level}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => handleEditClick(video)}>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive" onClick={() => handleDeleteClick(video)}>Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
        </CardContent>
       <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-{videos.length}</strong> of <strong>{videos.length}</strong> videos
        </div>
      </CardFooter>
    </Card>

        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogContent className="sm:max-w-lg">
            <DialogHeader>
                <DialogTitle>{selectedVideo ? "Edit Video" : "Add New Video"}</DialogTitle>
                <DialogDescription>
                {selectedVideo ? "Update the details of your video." : "Fill out the form to add a new video."}
                </DialogDescription>
            </DialogHeader>
            <VideoForm
                video={selectedVideo}
                onSubmit={handleFormSubmit}
                onCancel={() => setIsFormOpen(false)}
            />
            </DialogContent>
        </Dialog>

        <AlertDialog open={isDeleteAlertOpen} onOpenChange={setIsDeleteAlertOpen}>
            <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                This action cannot be undone. This will permanently delete the video
                "{selectedVideo?.title}".
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteConfirm}>Delete</AlertDialogAction>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </>
  );
}
