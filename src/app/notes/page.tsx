import Link from 'next/link';
import { Download } from 'lucide-react';

export default function NotesPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Python Learning Materials</h2>
      <ul className="space-y-2 pl-5 list-disc">
        <li>
          <Link href="/books/python_basics_book.pdf" download className="inline-flex items-center gap-2 text-primary hover:underline">
            Python Basics Book <Download className="h-4 w-4" />
          </Link>
        </li>
        <li>
          <Link href="/notes/python_variables.pdf" download className="inline-flex items-center gap-2 text-primary hover:underline">
            Variables Notes <Download className="h-4 w-4" />
          </Link>
        </li>
        <li>
          <Link href="/notes/python_loops.pdf" download className="inline-flex items-center gap-2 text-primary hover:underline">
            Loops Notes <Download className="h-4 w-4" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
