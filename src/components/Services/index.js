import React from "react";
import { StaticQuery, graphql } from 'gatsby';
import Service from './service';

function ServicesContainer() {
  return (
    <StaticQuery
    query={graphql`
      query Services {
        allContentfulServices {
          edges {
            node {
              id
              title
              link
              description
              image {
                file {
                  url
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <section className="pt-16 bg-black text-white text-center text-2xl" id="services">
          <h2 className=" mb-16 text-4xl text-center font-medium ">Services we offer</h2>
          {data.allContentfulServices.edges.map(data => (
            <Service data={data.node} key={data.node.id}/>
          ))}
        </section>
    )}
    />
  )
}

export default ServicesContainer;




