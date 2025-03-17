import React from 'react'
import AboutTextCard from './card/AboutTextCard'

import styles from '../styles/card.module.css'
import { BsDash } from 'react-icons/bs'
function OurDifference() {
  return (
    <div
        className="m-auto max-w-full mt-10 p-2 md:p-16 h-5/6 bg-[#fff2b7]"
        id="about"
      >
        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">
          The Cybertron Difference
        </h2>
      
        <h2 className="mt-4 mx-12 text-center text-lg lg:text-2xl font-medium text-black">
          What Makes Us Unstoppable?
        </h2>
        <div
          className="flex   flex-col lg:flex-row py-4 justify-between text-center lg:text-left mx-4 mt-6"
          data-aos="fade-up"
        >
         
            <div className={`${styles.about_textCard} grid gap-5 grid-cols-1 md:grid-cols-2 m-5 rounded-lg`}>
              <AboutTextCard
                heading=" 💡 AI-Driven Protection"
                para=" We leverage cutting-edge artificial intelligence to detect, neutralize, and prevent cyber threats before they cause harm"
                list1="  - Advanced Threat Detection: Proactive defense against emerging threats"
                list2=" - Proactive Defense: Stay ahead of emerging threats with predictive analytics."
                list3=" - Enhanced Incident Response: Rapidly respond to and contain security incidents."
                icon={<BsDash />}
              />

              <AboutTextCard
                heading="🔒 Unbreakable Security, Unshakable Reputation"
                para="Our dual focus on cybersecurity and ORM means you’re protected
                  from both cyberattacks and digital defamation."
                list1=" - Defend Your Reputation: Proactive online reputation management solutions."
                list2="- Fortified Defenses: Unbreakable security measures to safeguard your business."
                list3="- Proactive Monitoring: Real-time threat detection and response."
              />

              <AboutTextCard
                heading="⚡ Real-Time Monitoring & Response"
                para="Real-time threat detection and mitigation: protecting you from DDoS attacks, unauthorized access, and malware"
                list1=" - Instant Threat Detection: Identify and respond to security
                  incidents swiftly"
                list2="- Next-Gen Security: Proactive protection against emerging threats."
                list3=" - Maximize Uptime: Minimize downtime with our swift and effective support"
                  
              />
              <AboutTextCard
                heading=" 📈 Custom Strategies for Maximum Impact"
                para="Every business is unique. We tailor our cybersecurity and ORM
                  strategies to fit yours"
                list1="- Personalized Approach: Solutions tailored to your unique
                  needs and goals."
                list2=" - Optimized Resources: Maximize your security investments."
                list3=" - Improved Compliance: Meet regulatory requirements with
                  confidence."
              />
            </div>
        </div>
      </div>
  )
}

export default OurDifference