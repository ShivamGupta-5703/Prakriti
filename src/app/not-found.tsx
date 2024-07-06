import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen flex justify-center items-center py-24 px-4">
      <div className="text-center">
        <h1 className="scroll-m-20 mb-8 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          Error 404 - Page Not Found
        </h1>
        <h2 className="scroll-m-20 pb-2 text-xl md:text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          You have lost your way - Go back to{" "}
          <Link href="/" className="underline text-green-600">
            Home
          </Link>
        </h2>
      </div>
    </main>
  )
}
