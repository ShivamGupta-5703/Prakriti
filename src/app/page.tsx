import Banner from "@/components/banner"
import FAQs from "@/components/faqs"
import HowItWorks from "@/components/how-it-works"
import Introduction from "@/components/intro"

export default function Landing() {
  return (
    <main>
      <Introduction />
      <HowItWorks />
      <Banner/>
      <FAQs />
    </main>
  )
}
