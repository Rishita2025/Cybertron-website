import React from 'react'
import styles from '../styles/banner.module.css'
import bannerImg from '../images/banner_bg.png'


function Banner() {
  return (
 <>
 
 <div className={`${styles.banner_bg} relative`}    data-aos="zoom-in"
  data-aos-delay="600">
    <img src="https://t3.ftcdn.net/jpg/05/14/95/12/360_F_514951224_2dxMLbIw5qNRdPGD003chpbVcxWtcp7K.jpg" className='w-full h-screen'/>
    <div className='absolute top-10 px-32 py-10 w-3/5'>
    <h1 className='text-white font-bold text-4xl'>Cybertron Technologies </h1>
    <h2 className='text-white text-2xl font-semibold mt-4'>Cybersecurity That Protects More Than Just Data – It Protects Dreams</h2>
    <p className='text-white font-medium text-md  my-6 '>Imagine this: You’ve built something incredible—a business, a startup, a career. You’ve poured your heart and soul into it. But in just **one cyber attack**, everything can come crashing down.</p>
      <p className='text-white font-medium text-md my-6 '>
      We know because we’ve seen it happen. A promising startup **losing investor trust after a data breach**. A small business **forced to shut down after ransomware locked them out of their own systems**. An individual **falling victim to identity theft, losing control of their personal data**.
      </p>

      <h3 className='text-white text-2xl text-semibold'>At Cybertron Technologies**, we **refuse to let that happen to you.</h3>

      <p className='text-white font-medium text-md mt-7'>
      We don’t just sell cybersecurity solutions—we protect businesses, empower entrepreneurs, and give individuals peace of mind**. Because your ideas, your work, and your dreams **deserve more than just protection—they deserve to thrive.
      </p>
    </div>
  </div>




{/* <div className={`${styles.banner_bg} relative `}    data-aos="zoom-in"
  data-aos-delay="600">
    <img src="https://img.freepik.com/free-vector/abstract-secure-technology-background_23-2148357087.jpg?t=st=1742226649~exp=1742230249~hmac=32dac7b8d090e57f1cacc04c8e0020119b86a549bc49dd13e2df72b56239d68c&w=1380" className='w-full h-screen'/>
    <div className='absolute top-0 px-32 py-10 w-3/5'>
    <h1 className='text-white font-bold text-4xl'>Cybertron Technologies </h1>
    <h2 className='text-white text-3xl font-semibold mt-4'>Cybersecurity That Protects More Than Just Data – It Protects Dreams</h2>
    <p className='text-white font-medium text-lg  my-6 '>Imagine this: You’ve built something incredible—a business, a startup, a career. You’ve poured your heart and soul into it. But in just **one cyber attack**, everything can come crashing down.</p>
      <p className='text-white font-medium text-lg my-6 '>
      We know because we’ve seen it happen. A promising startup **losing investor trust after a data breach**. A small business **forced to shut down after ransomware locked them out of their own systems**. An individual **falling victim to identity theft, losing control of their personal data**.
      </p>
      <p className='text-white font-medium text-md'>
      We don't just offer cybersecurity solutions; we empower you to grow, thrive, and focus on what matters most—your future.
      </p>
    </div>
  </div> */}
 </>
  )
}

export default Banner