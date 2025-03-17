import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import Testimonial from '../components/Testimonial';
import WhoWeHelp from '../components/WhoWeHelp';
import OurDifference from '../components/OurDifference';
import OurStory from '../components/OurStory';
import Banner from '../components/Banner';


const Home = () => {
    return (
        <>
            <Hero />
            <Banner/>
            <OurStory/>
            <WhoWeHelp/>
            <OurDifference/>
            {/* <Intro /> */}
            <Services />
            <Portfolio />
            <Clients />
            <Testimonial/>
            <Cta/>
        </>

    )
}

export default Home;

