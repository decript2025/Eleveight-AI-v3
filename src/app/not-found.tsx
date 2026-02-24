import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[400px] gap-8">
      <h1 className="text-background text-center text-h2">404 - Page Not Found</h1>
      <p className="text-background text-center font-normal">It seems the page you are looking for does not exist.</p>
      <Link href="/" className="text-background hover:text-primary font-semibold">Return to Home</Link>
    </div>
  );
}