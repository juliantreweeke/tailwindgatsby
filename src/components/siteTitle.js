import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";

function SiteTitle({ year, footer }) {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Link className="flex items-center no-underline text-white" to="/">
      <svg
        className="fill-current h-3 w-8"
        viewBox="150 0 30 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {lotus}
      </svg>
      <span className={`paragraphFont tracking-tight ${footer ? 'text-sm' : 'text-xl'}`}>
        {site.siteMetadata.title} {year && 2020}
      </span>
    </Link>
  )
}

export default SiteTitle;

const lotus = <g><path class="fil0" d="M152 181c17,-15 24,-33 24,-53 -15,13 -24,31 -24,53zm22 -71c-4,-26 -17,-54 -29,-79 -12,25 -25,53 -29,79 12,10 23,21 29,35 6,-14 17,-25 29,-35zm-13 82c59,7 86,-55 106,-106 -26,7 -55,16 -77,31 3,28 -4,54 -29,75zm-16 11c-90,24 -120,-74 -145,-139 22,7 44,13 66,21 -1,-23 1,-46 3,-69 16,14 33,27 48,42 8,-20 18,-39 28,-58 10,19 19,38 28,58 15,-15 32,-29 48,-42 1,23 3,46 3,69 21,-8 44,-14 66,-21 -18,49 -46,164 -145,139zm42 -101c7,-4 15,-8 22,-11 1,-16 0,-32 0,-47 -10,9 -21,18 -31,28 4,10 7,20 9,30zm-73 26c0,20 7,38 24,53 0,-22 -9,-40 -24,-53zm-34 -38c8,4 16,8 23,12 2,-10 5,-20 8,-30 -9,-10 -20,-19 -30,-28 -1,15 -2,31 -1,46zm-57 -4c20,51 47,113 106,106 -25,-21 -31,-47 -29,-75 -22,-15 -51,-24 -77,-31z"></path></g>;