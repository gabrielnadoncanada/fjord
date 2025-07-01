"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Shipping & Delivery",
    items: [
      {
        question: "How long does shipping take?",
        answer:
          "Standard shipping typically takes 3-7 business days within the continental US. Express shipping options are available for 1-2 day delivery. International shipping times vary by location but generally take 7-14 business days.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination. Please note that international orders may be subject to customs duties and taxes.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website. You'll also receive updates on your order status throughout the shipping process.",
      },
      {
        question: "What should I do if my order arrives damaged?",
        answer:
          "If your order arrives damaged, please contact our customer service team within 48 hours with photos of the damage. We'll arrange for a replacement or full refund, and we'll handle the return of the damaged item at no cost to you.",
      },
      {
        question: "Are there any shipping fees?",
        answer:
          "We offer free standard shipping on orders over $500. For orders under $500, standard shipping costs $49. Express shipping and international shipping rates vary based on location and delivery speed.",
      },
    ],
  },
  {
    title: "Returns & Exchanges",
    items: [
      {
        question: "What is your return policy?",
        answer:
          "We offer a 30-day return policy for most items in original condition. Items must be unused, in original packaging, and returned within 30 days of delivery. Some items like custom furniture may have different return policies.",
      },
      {
        question: "How do I initiate a return or exchange?",
        answer:
          "To start a return or exchange, contact our customer service team or use our online return portal. We'll provide you with a return authorization and prepaid shipping label. Package the item securely and drop it off at any authorized shipping location.",
      },
      {
        question: "Are there any fees for returning items?",
        answer:
          "Returns are free for defective or damaged items. For other returns, a $25 restocking fee may apply. If you received free shipping on your original order, the shipping cost will be deducted from your refund.",
      },
      {
        question: "Can I return custom or made-to-order furniture?",
        answer:
          "Custom and made-to-order furniture typically cannot be returned unless there's a manufacturing defect or shipping damage. We'll work with you during the design process to ensure your complete satisfaction before production begins.",
      },
      {
        question: "How long does it take to process a refund?",
        answer:
          "Once we receive your returned item, refunds are typically processed within 3-5 business days. The refund will be credited to your original payment method, and it may take an additional 1-2 billing cycles to appear on your statement.",
      },
    ],
  },
  {
    title: "Orders & Payments",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, Google Pay, and financing options through Affirm and Klarna for qualified purchases.",
      },
      {
        question: "Can I change or cancel my order?",
        answer:
          "Orders can be modified or cancelled within 2 hours of placement. After this window, orders enter our fulfillment process and cannot be changed. Contact customer service immediately if you need to make changes.",
      },
      {
        question: "Do you offer discounts or promotions?",
        answer:
          "Yes, we regularly offer seasonal sales, new customer discounts, and exclusive promotions for email subscribers. Sign up for our newsletter to be the first to know about special offers and limited-time deals.",
      },
      {
        question: "Will I receive a receipt for my purchase?",
        answer:
          "Yes, you'll receive an email confirmation with your receipt immediately after placing your order. This email includes your order details, tracking information, and estimated delivery date.",
      },
      {
        question: "How can I check the status of my order?",
        answer:
          "You can check your order status by logging into your account on our website or by using the tracking link in your confirmation email. You'll receive updates via email as your order progresses through our fulfillment process.",
      },
    ],
  },
];

export function FAQSection() {
  return (
    <div className="space-y-3">
      {/* Header Card */}
      <Card className="bg-gray-100">
        <CardContent className="p-16">
          <h1 className="text-4xl font-normal mb-4">FAQ</h1>
          <p className="text-gray-600 text-base leading-relaxed max-w-[550px]">
            Welcome to our FAQ page! Here, you'll find answers to the most
            common questions about our products, shipping, returns, and more.
          </p>
        </CardContent>
      </Card>

      {/* FAQ Categories */}
      {faqData.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-3">
          {/* Category Header */}
          <Card className="bg-gray-100">
            <CardHeader className="p-6">
              <CardTitle className="text-base font-normal">
                {category.title}
              </CardTitle>
            </CardHeader>
          </Card>

          {/* Category Items */}
          {category.items.map((item, itemIndex) => (
            <Card key={itemIndex} className="bg-gray-100">
              <CardContent className="p-8">
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value={`item-${categoryIndex}-${itemIndex}`}
                    className="border-none"
                  >
                    <AccordionTrigger className="text-base font-normal text-left hover:no-underline [&>svg]:hidden [&[data-state=open]>img]:rotate-45">
                      <span className="flex-1">{item.question}</span>
                      <Image
                        src="/icons/plus.svg"
                        alt="Expand"
                        width={18}
                        height={18}
                        className="shrink-0 transition-transform duration-200"
                      />
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}
