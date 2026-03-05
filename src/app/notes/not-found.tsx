import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { AlertTriangle } from 'lucide-react';

export default function NoteNotFound() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-10rem)]">
        <Card className="w-full max-w-md text-center">
            <CardHeader>
                <div className="mx-auto bg-destructive/10 text-destructive p-3 rounded-full w-fit">
                    <AlertTriangle className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4 text-2xl">Material Not Available</CardTitle>
                <CardDescription>This notes file is currently unavailable. Please check other lessons.</CardDescription>
            </CardHeader>
            <CardFooter>
                <Button asChild className="w-full">
                    <Link href="/notes">Go to Notes Page</Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  );
}
