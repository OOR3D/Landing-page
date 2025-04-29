"use client"

import * as React from "react"
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/lib/faq-data'
import Link from 'next/link'

interface FAQAccordionProps {
  showAll?: boolean;
}

export default function FAQAccordion({ showAll = false }: FAQAccordionProps) {
  const displayFaqs = showAll ? faqs : faqs.slice(0, 3);

  const renderAnswer = (answer: string, index: number) => {
    if (index === 4) { // For the mesh requests question
      return (
        <>
          Yes, drop your ideas in our{' '}
          <a 
            href="https://discord.gg/oor3d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 transition-colors"
          >
            Discord server
          </a>
          . We review community input regularly, though we can't guarantee every request will be made.
        </>
      );
    }
    if (index === 1) { // For the platform release question
      const text = answer.split('Discord');
      return (
        <>
          {text[0]}
          <a 
            href="https://discord.gg/oor3d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300 transition-colors"
          >
            Discord
          </a>
          {text[1]}
        </>
      );
    }
    return answer;
  };

  return (
    <Accordion.Root
      type="single"
      collapsible
      className="space-y-4 relative z-10"
    >
      {displayFaqs.map((faq, index) => (
        <Accordion.Item
          key={index}
          value={`item-${index}`}
          className="bg-[#0A0C13] rounded-3xl border border-gray-800/50 overflow-hidden group hover:border-red-500/20 transition-colors duration-300"
        >
          <Accordion.Trigger className="flex items-center justify-between w-full p-8 text-left">
            <h3 className="text-xl font-semibold">{faq.question}</h3>
            <ChevronDown className="w-5 h-5 text-gray-400 transform transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180" />
          </Accordion.Trigger>
          <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="p-8 pt-0 text-gray-300">
              {renderAnswer(faq.answer, index)}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  )
} 