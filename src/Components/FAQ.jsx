import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Your Mart?",
      answer:
        "Your Mart is a one-stop online store where you can find a wide variety of products including clothing, electronics, home goods, beauty products, and more.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including credit/debit cards, PayPal, and more. We prioritize your security with encrypted payment systems.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is placed, you'll receive a confirmation email with a tracking number. You can use this number to track your package on our website or through the carrier's site.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy. If you're not satisfied with your purchase, you can return it for a full refund or exchange, provided the product is in its original condition.",
    },
  ];

  return (
    <div className="container mx-auto my-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-purple-900">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md bg-white p-5"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFaq(index)}
            >
              <h3 className="text-lg font-semibold text-purple-900">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <FiChevronUp className="text-purple-900" />
              ) : (
                <FiChevronDown className="text-purple-900" />
              )}
            </div>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
