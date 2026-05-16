import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[50vh] w-full max-w-7xl flex-col items-center justify-center px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-trust-green md:text-4xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-sm text-slate-gray md:text-base">
        The page you are looking for does not exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-medical-teal px-6 py-3 text-sm font-semibold text-white hover:bg-medical-teal/90"
      >
        Back to home
      </Link>
    </main>
  );
}
