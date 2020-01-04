import React from 'react';
import {  Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';
import Optus from "../images/optus-logo.png";
import SydTrains from "../images/SydneyTrainslogo.png";
import TakeHeart from "../images/takeheart.jpg";
import UNSWlogo from "../images/UNSWlogo.png";
import USYDlogo from "../images/USYDlogo.png";
import MD from "../images/muscular-dystrophy-logo-new.jpg";
import Grays from "../images/graysonlinelogo.jpeg";
import Hireup from "../images/hireup.brand.jpg";

const ClientList  = () => {
  return (
    <Controller>
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
    </Controller>
  );
};

export default ClientList;


        