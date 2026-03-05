import type { NavItem, Program, Note, YouTubeVideo, ResearchArticle, LearningStep, ExternalReference } from '@/lib/types';
import { 
  Home, 
  Code, 
  BookOpen, 
  Youtube, 
  FlaskConical, 
  Shield,
  Search,
  Book,
  Laptop,
  Network,
  Database,
  BrainCircuit,
  Rocket
} from 'lucide-react';

export const navItems: NavItem[] = [
  { title: 'Home', href: '/', icon: Home },
  { title: 'Programs', href: '/programs', icon: Code },
  { title: 'Notes', href: '/notes', icon: BookOpen },
  { title: 'YouTube', href: '/youtube', icon: Youtube },
  { title: 'Research', href: '/research', icon: FlaskConical },
];

export const adminNavItem: NavItem = { title: 'Admin', href: '/admin', icon: Shield };

export const programs: Program[] = [
  {
    id: '1',
    slug: 'hello-world',
    title: 'Hello, World!',
    description: 'The classic first program for any new programmer.',
    sourceCode: `print("Hello, World!")`,
    output: 'Hello, World!',
    commonErrors: 'SyntaxError: Missing parentheses in call to \'print\'. Did you mean print("Hello, World!")?',
    howToRun: 'Save the code in a file named `hello.py` and run `python hello.py` in your terminal.',
    tags: ['beginner', 'print'],
  },
  {
    id: '2',
    slug: 'simple-calculator',
    title: 'Simple Calculator',
    description: 'A basic calculator that performs addition, subtraction, multiplication, and division.',
    sourceCode: `def add(x, y):\n  return x + y\n\ndef subtract(x, y):\n  return x - y\n\ndef multiply(x, y):\n  return x * y\n\ndef divide(x, y):\n  return x / y\n\nnum1 = 20\nnum2 = 10\n\nprint(f'{num1} + {num2} = {add(num1, num2)}')\nprint(f'{num1} - {num2} = {subtract(num1, num2)}')\nprint(f'{num1} * {num2} = {multiply(num1, num2)}')\nprint(f'{num1} / {num2} = {divide(num1, num2)}')`,
    output: `20 + 10 = 30\n20 - 10 = 10\n20 * 10 = 200\n20 / 10 = 2.0`,
    commonErrors: 'TypeError: unsupported operand type(s) for +: \'int\' and \'str\'. Make sure you are not trying to add numbers and text together without converting.',
    howToRun: 'Run the script to see the output of the calculations. You can change the values of num1 and num2 to see different results.',
    tags: ['beginner', 'functions', 'operators'],
  },
  {
    id: '3',
    slug: 'list-comprehension',
    title: 'List Comprehension Example',
    description: 'Demonstrates the power of list comprehensions for creating lists.',
    sourceCode: `squares = [x**2 for x in range(10)]\nprint(squares)`,
    output: '[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]',
    commonErrors: 'No common errors for this simple example, but be mindful of the syntax.',
    howToRun: 'Execute the script to see the generated list of squares.',
    tags: ['intermediate', 'lists'],
  },
];

export const notes: Note[] = [
  {
    id: '1',
    slug: "python-basics",
    title: "Python Basics",
    description: "Learn Python fundamentals",
    tags: ["python", "beginner"],
    pdfUrl: "https://6000-firebase-studio-1772456059986.cluster-qxqlf3vb3nbf2r42l5qfoebdry.cloudworkstations.dev/notes/python-basics.pdf",
  }
];

export const youtubeVideos: YouTubeVideo[] = [
  {
    id: '1',
    title: 'Python for Beginners - Full Course',
    description: 'A comprehensive course for those starting their Python journey.',
    videoId: 'eWRfhZUzrAc',
    level: 'Beginner',
  },
  {
    id: '2',
    title: '12-hour Python Full Course',
    description: 'Learn Python in 12 hours.',
    videoId: 'vLqTf2b6G2I',
    level: 'Beginner',
  },
  {
    id: '3',
    title: 'Object-Oriented Programming (OOP) in Python',
    description: 'An introduction to object-oriented concepts in Python.',
    videoId: 'Ej_02ICOIgs',
    level: 'Intermediate',
  },
  {
    id: '4',
    title: 'Advanced Python Concepts',
    description: 'Explore generators, decorators, and context managers.',
    videoId: 'G-Rct7Na0UQ',
    level: 'Advanced',
  },
];

export const researchArticles: ResearchArticle[] = [
  {
    id: '1',
    title: 'Python Tutorial - W3Schools',
    source: 'W3Schools',
    url: 'https://www.w3schools.com/python/',
    content: `W3Schools offers a comprehensive Python tutorial that is perfect for beginners. It covers all the basic concepts, from syntax and variables to file handling and modules. The tutorial includes a "Try it Yourself" editor, allowing you to experiment with Python code directly in your browser. It's a great hands-on way to start learning.`,
  },
  {
    id: '2',
    title: 'Python Basics - GeeksforGeeks',
    source: 'GeeksforGeeks',
    url: 'https://www.geeksforgeeks.org/python-basics/',
    content: `GeeksforGeeks provides a vast collection of articles and tutorials on Python. The "Python Basics" section is structured to help beginners build a strong foundation. It covers fundamental topics like data types, operators, and control flow with clear explanations and code examples. It's an excellent resource for interview preparation as well.`,
  },
  {
    id: '3',
    title: 'Official Python Tutorial',
    source: 'Other',
    url: 'https://docs.python.org/3/tutorial/',
    content: `The official Python documentation includes a detailed tutorial that introduces the reader to the basic concepts and features of the Python language and system. It's more in-depth than many other tutorials and is the authoritative source for information. While it can be dense, it's an invaluable resource for anyone serious about mastering Python.`,
  },
];

export const externalReferences: ExternalReference[] = [
    {
        title: 'Python Official Docs',
        description: 'The official source of truth.',
        url: 'https://docs.python.org/3/',
        pdfUrl: '/notes/python-official-docs.pdf'
    },
    {
        title: 'W3Schools Python',
        description: 'Great for interactive examples.',
        url: 'https://www.w3schools.com/python/',
        pdfUrl: '/notes/w3schools-python.pdf'
    },
    {
        title: 'GeeksforGeeks Python',
        description: 'In-depth articles and coding problems.',
        url: 'https://www.geeksforgeeks.org/python-programming-language/',
        pdfUrl: '/notes/geeksforgeeks-python.pdf'
    }
];

export const learningRoadmapSteps: LearningStep[] = [
  {
    title: 'Step 1: The Basics',
    description: 'Start with syntax, variables, and data types. Build a solid foundation.',
    icon: Book,
  },
  {
    title: 'Step 2: Control Flow',
    description: 'Learn about loops, conditional statements (if/else), and logical operators.',
    icon: Network,
  },
  {
    title: 'Step 3: Functions & Modules',
    description: 'Understand how to write functions and organize your code into modules.',
    icon: Laptop,
  },
  {
    title: 'Step 4: Data Structures',
    description: 'Dive deep into lists, dictionaries, tuples, and sets to manage data effectively.',
    icon: Database,
  },
  {
    title: 'Step 5: Object-Oriented Programming (OOP)',
    description: 'Explore classes, objects, and inheritance to write more complex applications.',
    icon: BrainCircuit,
  },
  {
    title: 'Step 6: Real-World Projects',
    description: 'Apply your knowledge by building web apps, data science models, and more.',
    icon: Rocket,
  },
];

export const allContent = [
  ...programs.map(p => ({ ...p, type: 'Program', href: `/programs/${p.slug}` })),
  ...notes.map(n => ({ ...n, type: 'Note', href: `/notes/${n.slug}` })),
  ...researchArticles.map(r => ({...r, description: r.content, type: 'Research', href: `/research#${r.id}`})),
  ...youtubeVideos.map(v => ({...v, type: 'Video', href: `/youtube#${v.id}`})),
];
