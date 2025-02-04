import Link from "next/link"

export function Navbar() {
  return (
    <nav className="flex fixed w-full backdrop-blur-sm items-center px-4 py-4 justify-between z-50">
      <div className="flex gap-8 items-center">
        <div>
          <p className="scroll-m-20 text-xl font-semibold">
            <Link href="/">Prakriti</Link>
          </p>
        </div>
        <ul className="flex gap-4">
          <li className="cursor-pointer hover:underline">
            <Link href="/home">Home</Link>
          </li>
          <li className="cursor-pointer hover:underline">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
