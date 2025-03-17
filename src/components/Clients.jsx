import React from 'react';
import kws from '../images/clients/kws.png';
import geps from '../images/clients/geps.png';
import protergia from '../images/clients/protergia.png';
import FAQ from './Faq';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-[#fff2b7]">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-blue-900 uppercase font-bold">FAQ's ?</h2>
                      
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-xl font-medium text-black">Frequently Asked Questions</h2>
                    </div>

                <div className="px-16 lg:pb-16" data-aos="fade-in" data-aos-delay="600">
                    {/* <div className="grid sm:grid-cols-3 lg:grid-cols-3">
                        <div style={clientImage} className= "overflow-hidden flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100 w-1/6">
                            <img src={kws} alt="client" />                           
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={protergia} alt="client" />                            
                        </div> 

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-50 hover:opacity-100">
                            <img src={geps} alt="client" />                            
                        </div>

                                           
                    </div> */}

                    <div className='lg:px-16'>

                    <FAQ/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;