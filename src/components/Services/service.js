import React from 'react';
import {  Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const Service  = ({ data }) => {
  const { title, image, link, description } = data;
  return (
    <Controller>
      <Scene
      duration="50%"
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
            <div className="bg-black p-6">
              <div className="bg-white flex flex-col font-sans min-height-600 justify-center">
                  <div className="container mx-auto px-8">
                      <main className="flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
                          <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                              <h2 className="uppercase text-2xl text-black text-secondary tracking-widest mb-6">{title}</h2>
                              <p className="text-black leading-relaxed mb-12 text-lg">{description}</p>
                              <a className="text-base text-center block md:inline-block mt-4 md:mt-0  no-underline text-white bg-black p-3 px-4 rounded w-60" href={link} rel="noopener noreferrer" target="_blank"
                          >SHOW EXAMPLE</a>
                          </div>
                          <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12">
                          {image.file.url && <img alt={title} className="w-full lg:w-8/12" src={image.file.url} />}
                          </div>
                      </main>
                  </div>
              </div> 
          </div>
          </Tween>
      </Scene>
    </Controller>
  );
};

export default Service;







