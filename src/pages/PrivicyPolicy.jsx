import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import MegaMenu from '../components/Navbar/MegaMenu'
import { BsDot } from 'react-icons/bs';
import privacyimg from '../images/privacy-policy.avif'

function PrivicyPolicy() {
  return (
    <>

      <div
              className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:px-12 h-5/6 "
              data-aos="zoom-in"
            >
              <div
                id="hero"
                className="flex flex-col lg:flex-row  py-8 lg:pb-0 justify-between lg:text-left mx-4"
              >
                <div
                  className="lg:w-full  flex flex-col "
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                  <div className="flex justify-center lg:mt-10">
                    <div className="text-blue-900 text-5xl leading-none mb-2 font-serif">
                      “
                    </div>
                    <h1 className="mb-5  text-center md:text-5xl text-3xl font-bold text-blue-900">
                    Privacy Policy
                  
                    </h1>
                    <div className="text-blue-900 text-5xl leading-none mb-2 font-serif">
                      ”
                    </div>
                  </div>
                  <div className="text-lg font-semibold tracking-tight mb-5 text-black-500 lg:px-16">
                  Cybertron Technologies ("Company," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you visit our website <a href="www.cybertron.it.com">(www.cybertron.it.com)</a> or use our services (collectively, the "Services").
                  </div>
                  <div className="text-xl font-normal tracking-tight mb-5 text-black-500 lg:px-16 ">
              By using our Services, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our Services.
              </div>
                </div>
                <div
                  className="flex lg:justify-end w-full lg:w-1/2 "
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <div className="p-10 ">
                    <img width={200}
                      alt="card img"
                      className="rounded-t float-right duration-1000 w-full"
                      src={privacyimg}
                    />
                  </div>
                </div>
              </div>
            </div>

      <div >
        <div
          className="m-auto overflow-hidden mx-4 mt-8 lg:mt-0 p-2 md:p-12 h-5/6 "
        
        >
          <div
            id="hero"
            className="flex flex-col lg:flex-row py-8 justify-between lg:text-left mx-4"
          >
            <div
              className="lg:w-full  flex flex-col "
             
            >
              <div className='lg:mx-16'>
                <ul>
                <li className='mb-10'>
                  <h1 className='text-2xl font-bold '>1. INFORMATION WE COLLECT
                  </h1>
                  <h2 className='text-lg font-bold pt-3'>1.1  &nbsp; Information You Provide Directly
                  </h2>
                  <p className='text-lg font-bold py-3'>We collect the following types of information:
                  </p>
                 <div>
                    <p className=' flex items-center'><span><BsDot size={30}/></span><small>
                      <b>Personal Information – </b></small> Name, email, phone number, company name, and address.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span><small>
                      <b>Account Credentials – </b></small>If you create an account, we collect login details such as usernames and passwords.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span><small>
                      <b>Payment Information –  </b></small>If you purchase a product or service, we collect billing and payment details via secure third-party payment processors.

                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span><small>
                      <b>Customer Support Data –  </b></small>Communications, inquiries, and feedback shared with our support team.
                    </p>
                    </div>

                    <h2 className='text-lg font-bold pt-3'>1.2 &nbsp; Information Collected Automatically</h2>
                    <p>When you visit our website, we may automatically collect:</p>
                    <div>
                    <p className=' flex items-center'><span><BsDot size={30}/></span><small>
                      <b>Device & Usage Data – </b></small> IP address, browser type, operating system, and referring URLs.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span><small>
                      <b>Cookies & Tracking Data – </b></small>We use cookies, pixels, and analytics tools to track browsing behavior and preferences.
                    </p>

                    </div>

                    <h2 className='text-lg font-bold pt-3'>1.3 &nbsp; We may collect information from:</h2>
                    <p>When you visit our website, we may automatically collect:</p>
                    <div>
                    <p className=' flex items-center'><span><BsDot size={30}/></span> Business partners and resellers that offer our products.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span>Advertising networks that track your interactions with our ads.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span>Publicly available sources and industry databases.
                    </p>
                    </div>
                  </li>

                  <li className='mb-10'>
                  <h1 className='text-2xl font-bold '>2. HOW WE USE YOUR INFORMATION</h1>
                  <p className='text-lg font-bold py-3'>We use your information for the following purposes:</p>
                  <div>
                    <p className=' flex items-center'><span><BsDot size={30}/></span><small>
                      <b>To Provide Services –</b></small> Deliver products, process transactions, and provide customer support.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span><small>
                      <b>To Improve User Experience – </b></small>Personalize content, optimize website performance, and enhance security.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span><small>
                      <b>To Communicate with You – </b></small> Send updates, marketing messages, and responses to inquiries.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span><small>
                      <b>To Comply with Legal Obligations –</b></small>Maintain records, prevent fraud, and respond to law enforcement requests.
                    </p>
                  <p>📍<b> Opt-Out:</b> You may opt out of marketing emails at any time using the “unsubscribe” link.</p>
                    </div>
                  </li>


                  <li className='mb-10'>
                  <h1 className='text-2xl font-bold '>3. SHARING & DISCLOSURE OF INFORMATION
                  </h1>
                  <p>We do not sell your personal data. However, we may share information in the following situations:</p>
                  <h2 className='text-lg font-bold pt-3'>3.1  &nbsp; With Service Providers
                  </h2>
                  <p className='text-lg font-bold py-3'>We share information with third-party vendors who help us operate, such as:
                  </p>
                 <div>
                    <p className=' flex items-center'><span><BsDot size={30}/></span> Payment processors <b>(Stripe, PayPal)</b>
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span>Cloud storage and hosting services <b>(AWS, Google Cloud)</b>
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span>Analytics providers <b>(Google Analytics, Hotjar)</b>
                    </p>
                    </div>

                    <h2 className='text-lg font-bold pt-3'>3.2 &nbsp; For Legal & Security Reasons</h2>
                    <p>We may disclose information:</p>
                    <div>
                    <p className=' flex items-center'><span><BsDot size={30}/></span>If required by <b>law, court order, or government regulation.</b>
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span>To investigate <b>fraud, security breaches, or policy violations.</b>
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span>To protect the <b>rights, property, or safety</b> of Cybertron Technologies or others.
                    </p>

                    </div>

                    <h2 className='text-lg font-bold pt-3'>3.3 &nbsp; In Business Transfers</h2>
                    <p>If Cybertron Technologies is involved in a merger, acquisition, or sale of assets, your data may be transferred.</p>
                  </li>


                  <li className='mb-10' >
                  <h1 className='text-2xl font-bold '>4. COOKIES & TRACKING TECHNOLOGIES</h1>
                  <p className='text-lg font-bold py-3'>We use cookies and tracking tools to:</p>
                 <div>
                    <p className=' flex items-center'>✅ Improve website functionality
                    </p>
                    <p className=' flex items-center'>✅ Personalize content
                    </p>
                    <p className=' flex items-center'>✅ Analyze website traffic
                    </p>
                    <h2 className='font-semibold py-3'>Your Choices:</h2>
                    We are not responsible for losses caused by unauthorized account use if it results from your failure to safeguard credentials.
                    </div>
                  </li>

                  <li className='mb-10'>
                  <h1 className='text-2xl font-bold '>5. DATA SECURITY & RETENTION</h1>
                  <p className='text-lg font-bold py-3'>We implement security measures to protect your data, including:</p>
                  <div>
                    <p className=' flex items-center'><span><BsDot size={30}/></span><small>
                      <b>Encryption & Secure Servers –</b></small> All sensitive data is encrypted and stored securely.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span><small>
                      <b>Access Controls – </b></small>Only authorized personnel can access personal information.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span><small>
                      <b>Regular Security Audits – </b></small> We conduct routine security checks to detect vulnerabilities.
                    </p>
                  </div>
                    We retain your data only <b>as long as necessary</b> for the purposes stated in this policy, unless a longer retention period is required by law.
                  </li>


                  <li className='mb-10'>
                  <h1 className='text-2xl font-bold '>6. YOUR PRIVACY RIGHTS</h1>
                  <p className='text-lg font-bold py-3'>If you are a <b>California resident (CCPA)</b>, you have the right to:</p>
                  <h2 className='text-lg font-bold pt-3'>6.1  &nbsp; U.S. Privacy Laws (CCPA & Others)
                  </h2>
                 
                 <div>
                 <p className=' flex items-center'><span><BsDot size={30}/></span> Request access to your personal data.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span> Request deletion of your data.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span> Opt out of data sharing for targeted advertising.
                    </p>
                    
                    </div>

                    <h2 className='text-lg font-bold pt-3'>6.2  &nbsp; GDPR (For EU Visitors, If Applicable)
                  </h2>
                 <p>If you are in the European Economic Area (EEA), you have the right to:</p>
                 <div>
                 <p className=' flex items-center'><span><BsDot size={30}/></span> Access, correct, or delete your personal data.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span>Restrict or object to data processing.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span> Withdraw consent for marketing communications.
                    </p>
                    </div>

                  
                  </li>

                  <li className='mb-10'>
                  <h1 className='text-2xl font-bold '>7. THIRD-PARTY LINKS & SERVICES
                  </h1>
                  <p>Our Services may link to third-party websites. We do not control or endorse their content or privacy policies. <b>Your interactions with third-party sites are at your own risk.</b></p>
                  </li>


                  <li className='mb-10'>
                  <h1 className='text-2xl font-bold '>8. CHILDREN’S PRIVACY
                  </h1>
                  <p>Our Services <b>are not intended for children under 13</b>. We do not knowingly collect data from minors. If you believe a child has provided us with personal information, <b>contact us immediately</b> to request deletion.</p>
                  </li>

                  <li className='mb-10'>
                  <h1 className='text-2xl font-bold '>9. CHANGES TO THIS PRIVACY POLICY
                  </h1>
                  <p>We may update this Privacy Policy as needed. If changes are significant, we will:</p>
                  <div>
                    <p className=' flex items-center'><span><BsDot size={30}/></span> Post updates on this page.
                    </p>
                    <p className=' flex items-center'><span><BsDot size={30}/></span>Notify you via email if applicable.
                    </p>
                
                  </div>
                  Your continued use of our Services after changes means you accept the revised policy.
                  </li>
                </ul>
              </div>
              
              

            </div>
            
          </div>
        </div>
      </div>
    
    </>
  )
}

export default PrivicyPolicy