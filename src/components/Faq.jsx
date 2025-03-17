import { useState } from "react";

const faqs = [
  {
    question: "What are Managed Security Services?",
    answer: "The objective of proper security management is to examine the flow of IT systems. By performing vulnerability management and reviewing internal procedures, a professional and experienced security management audit service uncovers security flaws and identifies never-before-addressed risks that could affect your business if not properly classified and mitigated."
  },
  {
    question: "How can I protect my business from cyber threats?",
    answer: "Cybersecurity is critical for safeguarding sensitive information, ensuring business continuity, and preventing financial and reputational loss due to cyberattacks."
  },
  {
    question: "Why should I contract Managed Security Services for my organization?",
    answer:"We provide comprehensive IT security services, including a thorough Business Impact Assessment (BIA) of your organization. Our experts review and enhance your IT structure, policies, procedures, and documentation to ensure compliance. We also audit security controls, assess vulnerability and patch management, and identify, classify, and mitigate IT risks to ensure a secure and compliant environment."
  },
  {
    question: "How often should I evaluate the state of my organization’s security setup and workflows?",
    answer: "We recommend to get a full security assessment at least once every 6-12 months.However, you should keep your policies and vulnerability assessments updated at least once a year or when your infrastructure is updated with new nodes, services or assets."
  },
  {
    question: "What is two-factor authentication (2FA), and why should I use it?",
    answer: "2FA adds an extra layer of security by requiring a second verification step (e.g., a one-time code sent to your phone) in addition to your password. It helps prevent unauthorized access even if your password is compromised."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-full mx-auto p-4">
      <h2 className="text-2xl font-bold mb-5 text-black">Below you’ll find answers to our most commonly asked questions. If you don't see what's on your mind, reach out to us anytime on phone, chat, or email.
</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className=" pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full border-b-2 border-b-blue-900 text-left flex justify-between items-center py-2 text-lg transition-all ease-in-out duration-400  overflow-hidden text-black hover:bg-blue-900 hover:rounded-lg hover:text-white px-2 font-semibold"
            >
              {faq.question}
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-lg font-medium px-2 text-black">{faq.answer}</p>
              
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
