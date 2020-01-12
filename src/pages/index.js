import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import BlueMountainsHeaderImage1 from "../images/BlueMountainsHeaderImage1.jpg";
import DownArrow from "../images/downarrow.png";
import AboutUs from "../components/aboutUs";
import ClientList from"../components/clientList";
import Services from"../components/Services";
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`web design`,`web site`,`website`, `web development`, `social media management`, `UX`, `UI`, `Web Agency`, `Blue Mountains`, `Sydney`, `digital marketing`, `online store`, `search engines`, `simple website`, `development company`, `building your website`, `great website`, `user experience`, `mobile responsive`, `search engine optimisation`, `web design company`, `online shop`, `design and development`, `online marketing`, `content management systems`, `developers and digital`, `ecommerce websites`, `businesses grow`, `small business`]}
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
                className="pt-12 sm:pb-10 absolute bg-no-repeat bg-cover bg-black h-screen w-screen text-center sm:text-left" style={{ backgroundImage: `url(${BlueMountainsHeaderImage1})`, backgroundSize:`cover` }}>
                <div className="lg:pt-4 ml-16 mr-16 text-white">
                  <h1 className="text-5xl sm:text-6xl max-w-xs headerFont">web design/</h1>
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
      </Controller>
      <AboutUs />
      <ClientList />
      <Services />
    </Layout>
  );
}

export default IndexPage;
