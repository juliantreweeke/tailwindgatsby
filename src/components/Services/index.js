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
      <section className="pt-16 bg-black" id="services">
          <h2 className="mb-12 text-4xl text-white text-center font-medium">Services we offer</h2>
          {data.allContentfulServices.edges.map(data => (
            <Service data={data.node} key={data.node.id}/>
          ))}
        </section>
    )}
    />
  )
}

export default ServicesContainer;




