import React from 'react';
import {  Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import HeadShot from "../images/headshot2.png";
import Squiggle from "../images/squiggle.png";

const AboutUs  = () => {
  return (
    <Controller>
      <Scene
          duration="80%"
          offset={200}
          triggerHook="onEnter"
        >
          <Tween
            from={{
              css: {
                opacity: `0.1`,
              },
              ease: `Circ.easeOutExpo`,
            }}
            to={{
              css: {
                opacity: `1`,
              },
              ease: `Circ.easeOutExpo`,
            }}
          >
            <section className="w-screen bg-black" id="aboutus">
              <div className="flex flex-wrap justify-center pt-48 pb-48 lg:pb-56 text-white text-sm paragraphFont text-center lg:text-left max-w">
                <div className="w-full lg:w-1/3">
                  <img alt="amanda" className="block ml-auto mr-auto rounded-full h-64" src={HeadShot} />
                </div>
                <div className="w-full lg:w-1/2 mt-6 lg:max-w-full max-w-xs">
                  <h2 className="mb-8 text-4xl font-medium text-white">A bit about us...</h2>
                  <p className="mb-4">
                    Based in the Blue Mountains of Sydney we are a team of creative web designers, developers and content creators.
                  </p>
                  <p className="mb-4">
                    We help small to medium business owners and entrepreneurs to level up their online presence with strategically designed websites, digital products, functional sales funnels and email marketing.</p>
                  <p className="mb-4">
                    We will save you time creating a seamless and professional digital experience so that you can get down to the business, of running your business.
                  </p> 
                  <img alt="squiggle icon" className="w-20 rotate180 mr-auto ml-auto block" src={Squiggle} />
                </div>
              </div>
            </section>
          </Tween>
        </Scene>
    </Controller>
  );
};

export default AboutUs;




        