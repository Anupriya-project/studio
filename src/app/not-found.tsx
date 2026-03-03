export default function NotFound() {
  return (
    <div className="flex h-[calc(100vh-10rem)] items-center justify-center">
      <div className="flex items-center space-x-4">
        <h1 className="border-r border-border pr-4 text-2xl font-semibold">404</h1>
        <p className="text-base">Page not found</p>
      </div>
    </div>
  );
}
