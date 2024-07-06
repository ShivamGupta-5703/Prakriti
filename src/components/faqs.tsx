import Header from "@/components/header"
import {
  Accordion,
  AccordionTrigger,
  AccordionItem,
  AccordionContent,
} from "@/components/ui/accordion"
import Link from "next/link"

export default function FAQs() {
  return (
    <section className="pt-24 pb-48">
      <div>
        <Header heading="Frequently Asked Questions" />
      </div>
      <div className="mt-16 px-8 flex justify-center">
        <Accordion type="single" collapsible className="w-11/12 lg:w-1/2">
          <AccordionItem value="question-1">
            <AccordionTrigger>What is Prakriti and how does it work?</AccordionTrigger>
            <AccordionContent>Prakriti is a powerful AI model trained on a vast dataset of images, ensuring reliable and accurate disease detection in plant leaves. It uses advanced machine learning algorithms to analyze images of plant leaves, detect diseases, and provide remedies for healthier plants. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-2">
            <AccordionTrigger>What kind of plants does Prakriti cater to?</AccordionTrigger>
            <AccordionContent>Prakriti is designed to assist a wide range of plants, from ornamentals to crops. Its AI can detect diseases in various types of leaves, helping both home gardeners and farmers. It is an efficient and scalable solution to detect plant disease at an early stage.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-3">
            <AccordionTrigger>Is Prakriti&apos;s AI capable of recognizing multiple diseases?</AccordionTrigger>
            <AccordionContent>Absolutely! Our AI model is trained on a diverse dataset, enabling it to recognize and diagnose a variety of plant diseases, ensuring comprehensive support for your plants; well-being. </AccordionContent>
          </AccordionItem>
          <AccordionItem value="question-4">
            <AccordionTrigger>How can I provide feedback or report an issue with Prakriti?</AccordionTrigger>
            <AccordionContent>Prakriti is free and open source on <Link href="https://github.com/ShivamGupta-5703/Prakriti" className="underline">GitHub</Link>. We value your input! Your feedback helps us refine and enhance Prakriti&apos;s capabilities and features.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}