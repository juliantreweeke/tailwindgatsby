import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlueMountainsHeaderImage1 from "../images/BlueMountainsHeaderImage1.jpg";
import HeadShot from "../images/headshot.jpeg";
import Optus from "../images/optus-logo.png";
import SydTrains from "../images/SydneyTrainslogo.png";
import TakeHeart from "../images/takeheart.jpg";
import UNSWlogo from "../images/UNSWlogo.png";
import USYDlogo from "../images/USYDlogo.png";
import MD from "../images/muscular-dystrophy-logo-new.jpg";
import Grays from "../images/graysonlinelogo.jpeg";
import Hireup from "../images/hireup.brand.jpg";
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
                <div className="px-16 text-white">
                  <p className="text-6xl max-w-sm headerFont">website design/</p>
                  <p className="text-6xl max-w-xl headerFont">content creation/</p>
                  <p className="text-6xl max-w-sm headerFont">& tech support</p>
                  <p className="py-12 text-6sm">scroll down </p>
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
            <section className="bg-no-repeat bg-cover h-screen w-screen bg-white overflow-hidden"
              style={{ backgroundImage: `url(${HeadShot})` }}>
              <div className="py-64 px-16 py-4 text-black text-lg max-w-2xl">
                <p>
                  Based in the Blue Mountains of Sydney we are a team of creative and courageous designers, developers and content creators.
              </p>
                <p>
                  Extensive experience across agency, startup and the corporate sector come together to benefit our clients no matter what the project requires.
              </p>
                <p>
                  We will save you time so that you can get down to the busines of running your business.
              </p>
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
                <div className="smallImgContainer lg:w-1/4">
                  <img alt={`sydney trains logo`} className="smallImg h-30" src={SydTrains} />
                </div>
                <div className="smallImgContainer lg:w-1/4">
                  <img alt={`optus logo`} className="smallImg h-40" src={Optus} />
                </div>
                <div className="smallImgContainer lg:w-1/4">
                  <img alt={`sydney trains logo`} className="smallImg h-40" src={USYDlogo} />
                </div>
                <div className="smallImgContainer lg:w-1/4">
                  <img alt={`Grays online logo`} className="smallImg h-30" src={Grays} />
                </div>
                <div className="smallImgContainer lg:w-1/4">
                  <img alt={`UNSW logo`} className="smallImg h-30" src={UNSWlogo} />
                </div>
                <div className="smallImgContainer lg:w-1/4">
                  <img alt={`take heart logo`} className="smallImg h-30" src={TakeHeart} />
                </div>
                <div className="smallImgContainer lg:w-1/4">
                  <img alt={`MD logo`} className="smallImg h-35" src={MD} />
                </div>
                <div className="smallImgContainer lg:w-1/4">
                  <img alt={`Hireup logo`} className="smallImg h-30" src={Hireup} />
                </div>
              </div>
            </section>
          </Tween>
        </Scene>
        <section className="bg-black px-32 py-12 text-center text-xl">
          <div className="flex flex-wrap -mx-16 justify-center">
            <div className="w-full lg:w-1/2 px-16 py-12 max-w-lg">
              <div className="bg-white h-lg">
                <p className="py-12 w-32">WEBSITES & MOBILE APPS</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-16 py-12 max-w-lg">
              <div className="bg-white h-lg">
                <p className="py-12">UX UI DESIGN</p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -mx-16 justify-center">
            <div className="w-full lg:w-1/2 px-16 py-12 max-w-lg">
              <div className="bg-white h-lg">
                <p className="py-12">SOCIAL MEDIA</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-16 py-12 max-w-lg">
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
