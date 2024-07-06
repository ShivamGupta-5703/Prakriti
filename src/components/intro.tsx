import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import GreenLeaves from "@/assets/leaves.jpg"
import Logo from "@/assets/logo.png"
import ScrollDown from "@/components/scroll-down"

export default function Introduction() {
  return (
    <section className="py-4 md:py-0 min-h-screen grid md:grid-cols-2 place-items-center">
      <div className="w-11/12 md:w-1/2 flex flex-col items-center text-center">
        <Image
          src={Logo}
          alt={`Prakriti Logo`}
          width={150}
          className="md:hidden"
        />
        <h1 className="scroll-m-20 mb-4 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase gradient-text">
          Prakriti
        </h1>
        <p className="text-center text-sm md:text-base mt-6">
          Your digital gateway to the botanical world. Unearth a wealth of insights, from species details to disease detection, effortlessly bridging the gap between technology and the beauty of nature.
        </p>
        <Button className="my-7" asChild>
          <Link href="/home">Use Prakriti</Link>
        </Button>
      </div>
      <div className="relative hidden md:block md:w-full md:h-full">
        <Image
          src={GreenLeaves}
          alt="Green and Healthy Leaves"
          fill
          priority
          quality={100}
          className="hidden md:block"
        />
      </div>
      <ScrollDown />
    </section>
  )
}
