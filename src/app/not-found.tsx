import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { H1, Paragraph } from "@/components/ui/Typography";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-400">404</p>
        <H1 className="mt-4">Page not found</H1>
        <Paragraph className="mt-6">Sorry, we couldn’t find the page you’re looking for.</Paragraph>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button href="/">Go back home</Button>
          <Link href="/contacto" className="text-sm font-semibold text-white hover:text-indigo-300">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  );
}