import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/footer"
import "./globals.css"
import QueryWrapper from "@/components/wrapper/query-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Prakriti",
    template: `%s - ${"Prakriti"}`,
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryWrapper>
            <Navbar />
            {children}
            <Footer />
            <Toaster />
        </QueryWrapper>
      </body>
    </html>
  )
}
