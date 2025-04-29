"use client"

import * as React from "react"
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '@/lib/faq-data'
import Link from 'next/link'
import { motion } from 'framer-motion'

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
      className="space-y-3 relative z-10"
    >
      {displayFaqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion.Item
            value={`item-${index}`}
            className="relative rounded-[2rem] border border-gray-800/30 overflow-hidden group hover:border-red-500/30 transition-all duration-500 ease-in-out"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C13] via-[#0f1218] to-[#0A0C13] transition-opacity duration-500 ease-in-out" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-950/10 via-[#0f1218] to-orange-950/10 opacity-0 group-data-[state=open]:opacity-100 transition-opacity duration-500 ease-in-out" />
            
            <div className="relative">
              <Accordion.Trigger className="flex items-center justify-between w-full py-6 px-8 text-left group/trigger">
                <h3 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">{faq.question}</h3>
                <ChevronDown className="w-5 h-5 text-gray-400 transform transition-all duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180 group-hover:text-red-400" />
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                <div className="px-8 pb-6 text-gray-400 leading-relaxed">
                  {renderAnswer(faq.answer, index)}
                </div>
              </Accordion.Content>
            </div>
          </Accordion.Item>
        </motion.div>
      ))}
    </Accordion.Root>
  )
} 