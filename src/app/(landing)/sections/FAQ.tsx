'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How does the Adgen-AI work?',
    answer: 'Pay4Me App is a platform that helps people across Africa complete cross-border payments services. Our core payment industry includes helping with payments to government and immigration agencies, colleges, universities, businesses, and organizations abroad.',
  },
  {
    question: 'Can I customize AI-generated ads?',
    answer: 'Yes! Our tool allows full customization of AI-generated ads. You can modify text, images, colors, fonts, and even tailor ads to different regional and cultural preferences to ensure they align with your brand’s vision.',
  },
  {
    question: 'What platforms are the ads optimized for?',
    answer: 'Our AI-powered tool optimizes ads for various platforms, including Instagram, Facebook, LinkedIn, Twitter, YouTube, and TikTok. You can easily select the platform you’re targeting, and the tool will adjust dimensions and formats accordingly.',
  },
  {
    question: 'Is this tool suitable for small businesses and entrepreneurs?',
    answer: 'Absolutely! Our tool is designed for businesses of all sizes, including small businesses, startups, and entrepreneurs. It simplifies the ad creation process, making high-quality marketing accessible even without a dedicated design team.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
      
      <div>
      <p className="font-semibold uppercase text-sm" style={{ color: '#B800B8' }}>
  QUESTIONS & ANSWERS
</p>
        <h2 className="text-4xl font-bold mt-3">Frequently Asked <br/> Questions (FAQ)</h2>
        <p className="text-gray-600 mt-3">Got questions? We&apos;ve got answers. Browse our frequently asked questions to find what you&apos;re looking for.</p>
      </div>
      
      
      <div>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border border-gray-300 rounded-lg overflow-hidden">
            <button
              className={`flex justify-between w-full text-left px-5 py-4 text-lg font-medium transition-all duration-300 ${openIndex === index ? 'bg-[#520052] text-white' : 'bg-white text-gray-900'}`}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
              <ChevronDown className={`transition-transform ${openIndex === index ? 'rotate-180 text-white' : 'text-gray-600'}`} />
            </button>
            {openIndex === index && (
              <div className="bg-gray-100 text-gray-700 px-5 py-3 border-t border-gray-300">{faq.answer}</div>
            )}
          </div>
        ))}
        <p className="mt-4 text-gray-600">Have more questions? <a href="#" className="text-purple-600 font-medium">See the full FAQ</a></p>
      </div>
    </section>
  );
}
