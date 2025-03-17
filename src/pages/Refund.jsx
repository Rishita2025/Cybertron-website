import React from 'react'
import Footer from '../components/Footer'
import MegaMenu from '../components/Navbar/MegaMenu'
import { BsDot } from 'react-icons/bs'
import refund from '../images/refund-policy.avif'
function Refund() {
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
                    Cybertron Technologies 
                    <span className='block'> Refund Policy</span>
                    </h1>
                    <div className="text-blue-900 text-5xl leading-none mb-2 font-serif">
                      ”
                    </div>
                  </div>
                  <div className="text-lg font-semibold tracking-tight mb-5 text-black-500 lg:px-16">
                  At Cybertron Technologies, we strive to ensure customer satisfaction with our products and services. This Refund Policy outlines the terms under which refunds may be requested and processed, in accordance with U.S. consumer protection laws and industry best practices.
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
                      src={refund}
                    />
                  </div>
                </div>
              </div>
            </div>


          {/* -------------------------------------- */}
           
                  <div
                    className="m-auto  overflow-hidden mx-4 mt-8 lg:mt-0 p-2 md:p-12 md:pt-0 h-5/6 "
                  
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
                            <h1 className='text-2xl font-bold '>1. GENERAL REFUND POLICY
                            </h1>
                            <p>We offer refunds under specific conditions depending on the type of product or service purchased. Refunds are processed in compliance with U.S. laws, including the Federal Trade Commission (FTC) guidelines and relevant state laws.
                            </p>
                           
                           <div className='mt-4'>
                              <p className=' flex items-center'><span><BsDot size={30}/></span>< small className="font-normal text-lg">
                                <b>Physical Products (If Applicable): </b></ small>  Refunds may be granted if the product is defective, damaged, or not as described.
                              </p>
                              <p className=' flex items-center'><span><BsDot size={30}/></span>< small className="font-normal text-lg">
                                <b>Digital Products & Software Licenses: </b></ small> Refunds are generally not available once the license key is issued or the software is downloaded.
                              </p>
                              <p className=' flex items-center'><span><BsDot size={30}/></span>< small className="font-normal text-lg">
                                <b>Subscription-Based Services:  </b></ small> Refunds may be granted if canceled within the eligible refund period specified below.
                              </p>
                              <p className=' flex items-center'><span><BsDot size={30}/></span>< small className="font-normal text-lg">
                                <b>Custom Services & Consulting: </b></ small> Refunds are not available once the service has been rendered.
                              </p>
                              </div>
                            </li>
          
                         
          
          
                            <li className='mb-10'>
                            <h1 className='text-2xl font-bold '>2. REFUND ELIGIBILITY BY PRODUCT TYPE
                            </h1>
                            <p>We do not sell your personal data. However, we may share information in the following situations:</p>
                            <h2 className='text-lg font-bold pt-3'>2.1  &nbsp; Software & Digital Products
                            </h2>
                           
                           <div>
                              <p className=' flex items-center'><span><BsDot size={30}/></span>If a purchased software license or digital product is defective or fails to function as advertised, a refund request must be submitted within 7 days of purchase.

                              </p>
                              <div>
                              <p className=' flex items-center'><span><BsDot size={30}/></span>Refunds will not be granted for:
                              </p>
                              <span className='block'>Change of mind after purchase.</span>
                              <span className='block'>Failure to meet system requirements (Users are responsible for verifying compatibility before purchase).
                              </span>
                              <span className='block'>Download or installation issues caused by the customer’s device or network.
                              </span>
                              </div>
                              <div>
                              </div>
                              </div>
          
                              <h2 className='text-lg font-bold pt-3'>2.1 &nbsp; Subscription-Based Services</h2>
                              <div>
                              <p className=' flex items-center'><span><BsDot size={30}/></span>If you purchase a subscription-based service, you may be eligible for a full refund if requested within 14 days of the original transaction.
                              </p>
                              <div>
                              <p className=' flex items-center'><span><BsDot size={30}/></span>Refunds will not be granted for:
                              </p>
                              <span className='block'>Partially used subscription periods.</span>
                              <span className='block'>Cancellations after the 14-day period.
                              </span>
                              <span className='block'>Auto-renewed subscriptions where the cancellation request was made after the renewal date.
                              </span>
                              </div>
          
                              </div>
          
                              <h2 className='text-lg font-bold pt-3'>2.3 &nbsp; Custom Software Development & IT Services</h2>
                              <div>
                              <p className=' flex items-center'><span><BsDot size={30}/></span>Due to the nature of custom software development, cybersecurity audits, and consulting services, all payments for such services are non-refundable once work has commenced.
                              </p>
                              <p className=' flex items-center'><span><BsDot size={30}/></span>If a project is canceled before work begins, a refund may be issued, minus any administrative or processing fees.
                              </p>
                              </div>

                              <h2 className='text-lg font-bold pt-3'>2.4 &nbsp; Hardware or Physical Products (If Applicable)</h2>
                              <div>
                              <p className=' flex items-center'><span><BsDot size={30}/></span>If you receive a damaged or defective physical product, you may request a replacement or refund within 30 days of receipt.
                              </p>
                              <p className=' flex items-center'><span><BsDot size={30}/></span>Returned items must be in original condition, including packaging, accessories, and proof of purchase.

                              </p>
                              <p className=' flex items-center'><span><BsDot size={30}/></span>Shipping fees for returns may be the responsibility of the customer unless the product is defective</p>
                              </div>
                            </li>
          
          
                            <li className='mb-10' >
                            <h1 className='text-2xl font-bold '>3. HOW TO REQUEST A REFUND</h1>
                            <p className='text-lg font-bold py-3'>To request a refund, please follow these steps:</p>
                           <div>
                              <p className=' font-semibold'>1. Submit a Refund Request
                                <span className='block font-normal'>Contact us at [Insert Email] with your order details and reason for refund.</span>
                              </p>
                              <p className='font-semibold'>2. Review & Approval
                                <span className='block font-normal'>Our support team will review your request and may require additional information.
                                </span>
                                <span className='block font-normal'>If approved, you will receive instructions on how to return the product (if applicable).
                                </span>
                              </p>
                              <p className='font-semibold'>3. Processing Time
                                <span className='block font-normal'>Approved refunds will be processed within 5-10 business days to the original payment method.
                                </span>
                                <span className='block font-normal'>Refunds may take additional time to reflect on your account, depending on your bank or payment provider.</span>
                              </p>
                              </div>
                            </li>
          
                            <li className='mb-10'>
                            <h1 className='text-2xl font-bold '>4. EXCEPTIONS & NON-REFUNDABLE ITEMS
                            </h1>
                            <p className='text-lg font-bold py-3'>Refunds will not be provided for:</p>
                            <div>
                              <p className=' flex items-center'>❌ Downloaded or activated software licenses
                              </p>
                              <p className=' flex items-center'>❌ Custom-developed solutions or consulting services. 
                              </p>
                              <p className=' flex items-center'>❌ Partially used subscription periods.
                              </p>
                              <p className=' flex items-center'>❌ Unauthorized purchases or disputes outside the eligible refund period.
                              </p>
                            </div>
                            </li>
          
          
                            <li className='mb-10'>
                            <h1 className='text-2xl font-bold '>5. CHARGEBACKS & DISPUTES</h1>
                            <p className='text-lg font-bold py-3'>If a chargeback or dispute is filed with a bank or payment provider without first contacting our support team, we reserve the right to deny future transactions and take appropriate action, including account suspension.</p>
          
                             
                            </li>
          
                          
                          </ul>
                        </div>
                        
                        
          
                      </div>
                      
                    </div>
                  </div>
               

    </>
  )
}

export default Refund