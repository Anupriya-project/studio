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
import { notes as initialNotes } from "@/lib/data";
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
import { NoteForm } from "./note-form";
import type { Note } from "@/lib/types";


export function NotesTable() {
    const [notes, setNotes] = useState<Note[]>(initialNotes);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
    const [selectedNote, setSelectedNote] = useState<Note | null>(null);

    const handleAddClick = () => {
        setSelectedNote(null);
        setIsFormOpen(true);
    };

    const handleEditClick = (note: Note) => {
        setSelectedNote(note);
        setIsFormOpen(true);
    };

    const handleDeleteClick = (note: Note) => {
        setSelectedNote(note);
        setIsDeleteAlertOpen(true);
    };

    const handleFormSubmit = (note: Note) => {
        if (selectedNote) {
            setNotes(notes.map(n => n.id === note.id ? note : n));
        } else {
            setNotes([note, ...notes]);
        }
        setIsFormOpen(false);
        setSelectedNote(null);
    };

    const handleDeleteConfirm = () => {
        if (selectedNote) {
            setNotes(notes.filter(n => n.id !== selectedNote.id));
        }
        setIsDeleteAlertOpen(false);
        setSelectedNote(null);
    };

  return (
    <>
        <Card>
        <CardHeader>
            <div className="flex justify-between items-start">
            <div>
                <CardTitle>Notes</CardTitle>
                <CardDescription>Manage your educational notes and PDFs.</CardDescription>
            </div>
            <Button size="sm" className="gap-1" onClick={handleAddClick}>
                <PlusCircle className="h-3.5 w-3.5" />
                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Note</span>
            </Button>
            </div>
        </CardHeader>
        <CardContent>
            <Table>
            <TableHeader>
                <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Tags</TableHead>
                <TableHead className="text-right">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {notes.map((note) => (
                <TableRow key={note.id}>
                    <TableCell className="font-medium">{note.title}</TableCell>
                    <TableCell>
                    <div className="flex flex-wrap gap-1">
                        {note.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
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
                        <DropdownMenuItem onClick={() => handleEditClick(note)}>Edit</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive" onClick={() => handleDeleteClick(note)}>Delete</DropdownMenuItem>
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
            Showing <strong>1-{notes.length}</strong> of <strong>{notes.length}</strong> notes
            </div>
        </CardFooter>
        </Card>

        <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
            <DialogContent className="sm:max-w-lg">
            <DialogHeader>
                <DialogTitle>{selectedNote ? "Edit Note" : "Add New Note"}</DialogTitle>
                <DialogDescription>
                {selectedNote ? "Update the details of your note." : "Fill out the form to add a new note."}
                </DialogDescription>
            </DialogHeader>
            <NoteForm
                note={selectedNote}
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
                This action cannot be undone. This will permanently delete the note
                "{selectedNote?.title}".
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
