import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-neutral-900">
      <header className="text-white font-mono">
        <nav className="bg-neutral-950 p-4">
          <section className="container mx-auto flex items-center justify-between py-2 px-4">
            <h1 className="text-lg">Auth.</h1>

            <div className="space-x-6">
              <Link href="/login">Login</Link>
              <Link href="/register">Join Now!</Link>
            </div>
          </section>
        </nav>
      </header>



    </main>
  );
}
