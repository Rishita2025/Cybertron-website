import React from 'react'
import styles from '../styles/banner.module.css'
import bannerImg from '../images/banner_bg.png'


function Banner() {
  return (
  <div className={`${styles.banner_bg} relative mt-16`}    data-aos="zoom-in"
  data-aos-delay="600">
    <img src={bannerImg} className='w-full'/>
    <div className='absolute top-0 px-32 py-10 w-3/5'>
    <h1 className='text-white font-bold text-3xl'>About Us - Cybertron Technologies </h1>
      <p className='text-white font-medium text-lg:md my-6 '>
      At Cybertron Technologies, we protect more than just data – we protect your dreams. We understand how devastating a cyber attack can be—whether it’s a data breach, ransomware, or identity theft. That's why we're dedicated to safeguarding businesses, startups, and individuals from these threats.
      </p>
      <p className='text-white font-medium text-md'>
      We don't just offer cybersecurity solutions; we empower you to grow, thrive, and focus on what matters most—your future.
      </p>
    </div>
  </div>
  )
}

export default Banner