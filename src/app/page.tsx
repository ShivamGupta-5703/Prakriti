"use client"
import Banner from "@/components/banner"
import FAQs from "@/components/faqs"
import HowItWorks from "@/components/how-it-works"
import Introduction from "@/components/intro"
import { BrowserRouter as Router } from 'react-router-dom'; 

export default function Landing() {
  return (
    <Router>
    <main>
      <Introduction />
      <HowItWorks />
      <Banner/>
      <FAQs />
    </main>
    </Router>
  )
}
