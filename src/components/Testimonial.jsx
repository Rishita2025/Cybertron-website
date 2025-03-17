import React from "react";
import TestimonialCard from "./card/TestimonialCard";
import img1 from "../images/testimonial.jpg";
import img2 from "../images/testimonial2.jpg";
import img3 from "../images/testimonial3.jpg";
import img4 from "../images/testimonial4.jpg";
function Testimonial({ src, para, name, place }) {
  return (
    <div className="mt-8 bg-[#fff2b7]">
      <section data-aos="fade-up">
        <div className="my-4 py-4">
          <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
            Testimonials
          </h2>
         
          <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-medium text-black">
          Words from our satisfied clients
          </h2>
        </div>

        <div className="grid lg:px-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 p-6 lg:pb-20">
          <TestimonialCard
            para="We easily integrated their XDR solution with our SIEM, and it’s improved our overall response time to security threats"
            src={img1}
            name="Jane M."
            place="SOC Analyst"
          />
          <TestimonialCard
            para="With Cybertron's 24/7 monitoring and AI-driven security, we reduced cyber threats by 85% and ensured full compliance with GDPR"
            src={img2}
            name="Director"
            place="ABC Bank"
          />
          <TestimonialCard
            para="Before working with Cybertron, we faced multiple security vulnerabilities. Their solutions helped us achieve full compliance"
            src={img3}
            name="Sarah M"
            place="CEO, FinanceSecure"
          />
          <TestimonialCard
            para="We needed a secure cloud environment for our startup, and  delivered the perfect solution with Zero Trust security"
            src={img4}
            name="Alex P."
            place="CEO, CloudInnovate"
          />
        
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
