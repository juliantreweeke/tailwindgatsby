import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlueMountainsHeaderImage1 from "../images/BlueMountainsHeaderImage1.jpg";
import HeadShot from "../images/headshot2.png";
import Optus from "../images/optus-logo.png";
import SydTrains from "../images/SydneyTrainslogo.png";
import TakeHeart from "../images/takeheart.jpg";
import UNSWlogo from "../images/UNSWlogo.png";
import USYDlogo from "../images/USYDlogo.png";
import MD from "../images/muscular-dystrophy-logo-new.jpg";
import Grays from "../images/graysonlinelogo.jpeg";
import Hireup from "../images/hireup.brand.jpg";
import Squiggle from "../images/squiggle.png";
import DownArrow from "../images/downarrow.png";
import Services from"../components/Services";

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`web design`, `web development`, `social media management`, `UX`, `UI`, `Web Agency`, `Blue Mountains`, `Sydney`]}
        title="Home"
      />
      <Controller>
        <Scene
          duration="250%"
          indicators={false}
          triggerHook="onEnter"
        >
          <Timeline
            wrapper={<div className="parallax" />}
          >
            <Tween
              from={{
                yPercent: -50,
              }}
              position="0"
              to={{
                yPercent: 20,
              }}
            > 
              <section alt="blue mountains scenery"
                className="pt-20 sm:pb-10 absolute bg-no-repeat bg-cover bg-black h-screen w-screen text-center sm:text-left" style={{ backgroundImage: `url(${BlueMountainsHeaderImage1})`, backgroundSize:`cover` }}>
                <div className="lg:pt-4 ml-16 mr-16 text-white">
                  <h1 className="text-5xl sm:text-6xl max-w-sm headerFont">website design/</h1>
                  <p className="text-5xl sm:text-6xl max-w-xl headerFont">content creation/</p>
                  <p className="text-5xl sm:text-6xl max-w-sm headerFont">& tech support</p>
                  <div className="py-1">
                    <img alt="down arrow icon" className="w-4 mr-2 inline-block" src={DownArrow} />
                    <span className="text-6sm">scroll down</span>
                  </div>
                </div>
              </section>
            </Tween>
          </Timeline>
        </Scene>

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
            <section className=" w-screen bg-black">
              <div className="flex flex-wrap justify-center pt-48 pb-48 text-white text-sm paragraphFont text-center lg:text-left max-w">
                <div className="w-full lg:w-1/3">
                  <img alt="amanda" className="block ml-auto mr-auto rounded-full h-64" src={HeadShot} />
                </div>
                <div className="w-full lg:w-1/2 mt-6 lg:max-w-full max-w-xs">
                  <h2 className="mb-8 text-4xl font-medium text-white">A bit about us...</h2>
                  <p className="mb-4">
                    Based in the Blue Mountains of Sydney we are a team of creative designers, developers and content creators.
                  </p>
                  <p className="mb-4">
                    Extensive experience across agency, startup and the corporate sector come together to benefit you, no matter what your project requires.
                  </p>
                  <p className="mb-4">
                    We will save you time creating a seamless and professional digital experience so that you can get down to the business, of running your business.
                  </p>
                  <img alt="squiggle icon" className="w-20 rotate180 mr-auto ml-auto block" src={Squiggle} />
                </div>
              </div>
            </section>
          </Tween>
        </Scene>
        <Scene
          duration="60%"
          offset={400}
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
            <section className="pb-16 px-8 w-screen py- overflow-hidden bg-white">
              <h2 className="p-16 lg:pt-24 text-4xl text-center font-medium">Clients we have helped include</h2>

              <div className="px-16 flex flex-wrap overflow-hidden justify-center">
                <div className="smallImgContainer lg:w-1/4 h-40">
                  <img alt={`sydney trains logo`} className="smallImg h-30" src={SydTrains} />
                </div>
                <div className="smallImgContainer lg:w-1/4 h-40">
                  <img alt={`optus logo`} className="smallImg h-40" src={Optus} />
                </div>
                <div className="smallImgContainer lg:w-1/4 h-40">
                  <img alt={`sydney trains logo`} className="smallImg h-40" src={USYDlogo} />
                </div>
                <div className="smallImgContainer lg:w-1/4 h-40">
                  <img alt={`Grays online logo`} className="smallImg h-30" src={Grays} />
                </div>
                <div className="smallImgContainer lg:w-1/4 h-40">
                  <img alt={`UNSW logo`} className="smallImg h-30" src={UNSWlogo} />
                </div>
                <div className="smallImgContainer lg:w-1/4 h-40">
                  <img alt={`take heart logo`} className="smallImg h-30" src={TakeHeart} />
                </div>
                <div className="smallImgContainer lg:w-1/4 h-40">
                  <img alt={`MD logo`} className="smallImg h-35" src={MD} />
                </div>
                <div className="smallImgContainer lg:w-1/4 h-40">
                  <img alt={`Hireup logo`} className="smallImg h-30" src={Hireup} />
                </div>
              </div>
            </section>
          </Tween>
        </Scene>
        <Services />
      </Controller>
    </Layout>
  );
}

export default IndexPage;
