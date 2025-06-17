import React, { useState } from 'react';

const faqData = [
  {
    question: "What is ArtifactAtlas?",
    answer:
      "ArtifactAtlas is a platform dedicated to preserving and sharing historical artifacts from around the world. Users can upload, explore, and learn about different historical items.",
  },
  {
    question: "Who can upload artifacts?",
    answer:
      "Anyone with a registered account can upload artifacts. We encourage historians, researchers, and enthusiasts to contribute.",
  },
  {
    question: "Is the content reviewed before publishing?",
    answer:
      "Yes, all uploaded artifacts go through a review process to ensure they meet our content guidelines and quality standards.",
  },
  {
    question: "Can I edit or delete my uploaded artifacts?",
    answer:
      "Yes, users can update or delete any artifact they have uploaded by visiting their profile.",
  },
  {
    question: "How do I report an incorrect or offensive artifact?",
    answer:
      "If you come across inaccurate or inappropriate content, you can report it using the 'Report' button on the artifact’s detail page.",
  },
  {
    question: "Is ArtifactAtlas free to use?",
    answer:
      "Yes, ArtifactAtlas is completely free for all users. But an account is required for uploads or interaction.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-primary rounded-xl shadow-sm transition"
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center text-primary font-semibold focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span>{openIndex === index ? ' - ' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-shadow-2xs">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
