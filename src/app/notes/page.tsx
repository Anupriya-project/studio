import Link from 'next/link';
import { Download, Link as LinkIcon } from 'lucide-react';

export default function NotesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold">Python Learning Materials</h2>
        <ul className="mt-4 space-y-2 pl-5 list-disc">
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

      <div>
        <h3 className="text-xl font-semibold">References</h3>
        <ul className="mt-4 space-y-2 pl-5 list-disc">
          <li>
            <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
              Python Official Docs <LinkIcon className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a href="https://www.w3schools.com/python/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
              W3Schools Python <LinkIcon className="h-4 w-4" />
            </a>
          </li>
          <li>
            <a href="https://www.geeksforgeeks.org/python-programming-language/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-primary hover:underline">
              GeeksforGeeks Python <LinkIcon className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
