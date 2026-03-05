import type { NavItem, Program, Note, YouTubeVideo, ResearchArticle, LearningStep } from '@/lib/types';
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
    sourceCode: `def add(x, y):\n    return x + y\n\ndef subtract(x, y):\n    return x - y\n\n# ... (rest of the code)`,
    output: 'Select operation: 1.Add 2.Subtract ...',
    commonErrors: 'ValueError: invalid literal for int() with base 10',
    howToRun: 'Run the Python script and follow the on-screen prompts to perform a calculation.',
    tags: ['beginner', 'functions', 'input'],
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
    slug: 'introduction-to-python',
    title: 'Introduction to Python',
    description: 'A beginner\'s guide to Python, its history, and why it\'s so popular.',
    pdfUrl: '/pdfs/introduction_to_python.pdf',
    tags: ['beginner', 'introduction'],
    codeSnippet: `print("Welcome to PyMentor!")`
  },
  {
    id: '2',
    slug: 'understanding-variables',
    title: 'Understanding Variables in Python',
    description: 'A deep dive into how Python variables work, including scope and memory management.',
    pdfUrl: '/pdfs/understanding_variables.pdf',
    tags: ['beginner', 'variables'],
    codeSnippet: `name = "PyMentor"\nyear = 2024\nprint(name, "was launched in", year)`
  },
  {
    id: '3',
    slug: 'python-basic-syntax-and-data-types',
    title: 'Python Basic Syntax and Data Types',
    description: 'Learn the fundamental syntax, including indentation, comments, and basic data types like integers, floats, strings, and booleans.',
    pdfUrl: '/pdfs/python_basic_syntax_and_data_types.pdf',
    tags: ['beginner', 'syntax', 'data types'],
    codeSnippet: `# This is a comment\n# Integers\nnum_students = 100\n\n# Floats\npi_approx = 3.14\n\n# Strings\nhello = "Hello, World!"\n\n# Booleans\nis_learning = True`
  },
  {
    id: '4',
    slug: 'operators-in-python',
    title: 'Operators in Python',
    description: 'Explore arithmetic, assignment, comparison, logical, and other operators in Python.',
    pdfUrl: '/pdfs/operators_in_python.pdf',
    tags: ['beginner', 'operators'],
    codeSnippet: `a = 10\nb = 5\n\n# Arithmetic\nprint(a + b) # 15\n\n# Comparison\nprint(a > b) # True\n\n# Logical\nprint(a > 0 and b > 0) # True`
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
