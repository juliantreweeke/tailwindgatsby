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

import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
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
                className="pt-20 pb-20 absolute bg-no-repeat bg-cover bg-black w-screen text-center sm:text-left" style={{ backgroundImage: `url(${BlueMountainsHeaderImage1})` }}>
                <div className="ml-16 mr-16 text-white">
                  <p className="text-6xl max-w-sm headerFont">website design/</p>
                  <p className="text-6xl max-w-xl headerFont">content creation/</p>
                  <p className="text-6xl max-w-sm headerFont">& tech support</p>
                  <div className="py-12">
                    <img className="w-4 mr-2 inline-block" src={DownArrow} alt="down arrow icon" />
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
              <div className="flex flex-wrap justify-center py-48 px-16 text-white text-sm paragraphFont text-center lg:text-left max-w">
                <div className="w-full lg:w-1/3">
                  <img className="block ml-auto mr-auto rounded-full h-64" src={HeadShot} alt="picture of amanda" />
                </div>
                <div className="w-full lg:w-1/2 mt-16">
                  <p className="mb-4">
                    Based in the Blue Mountains of Sydney we are a team of creative and designers, developers and content creators.
                  </p>
                  <p className="mb-4">
                    Extensive experience across agency, startup and the corporate sector come together to benefit our clients no matter what the project requires.
                  </p>
                  <p className="mb-4">
                    We will save you time so that you can get down to the business of running your business.
                  </p>
                  <img className="w-20 rotate180 mr-auto ml-auto block" src={Squiggle} alt="squiggle icon" />
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
              <p className="p-16 lg:pt-24 text-4xl text-center font-medium">Clients we have helped include</p>

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
        <section id="services" className="bg-black text-center text-xl">
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/3  border">
              <div className="bg-white h-lg">
                <p className="py-12 w-32">WEBSITES & MOBILE APPS</p>
              </div>
            </div>
            <div className="w-full lg:w-1/3  border">
              <div className="bg-white h-lg">
                <p className="py-12">UX UI DESIGN</p>
              </div>
            </div>
            <div className="w-full lg:w-1/3  border">
              <div className="bg-white h-lg">
                <p className="py-12">UX UI DESIGN</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full lg:w-1/3  border">
              <div className="bg-white h-lg">
                <p className="py-12">SOCIAL MEDIA</p>
              </div>
            </div>
            <div className="w-full lg:w-1/3  border">
              <div className="bg-white h-lg">
                <p className="py-12">CONTENT & COPYWRITING</p>
              </div>
            </div>
            <div className="w-full lg:w-1/3 border">
              <div className="bg-white h-lg">
                <p className="py-12">CONTENT & COPYWRITING</p>
              </div>
            </div>
          </div>
        </section>
      </Controller>
    </Layout>
  );
}

export default IndexPage;
