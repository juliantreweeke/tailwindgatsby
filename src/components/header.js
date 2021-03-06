import { Link } from "gatsby";
import React, { useState } from "react";
import SiteTitle from '../components/siteTitle';

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <header className="sticky bg-black z-50" >
      <div className="">
        <div className="flex flex-wrap items-center justify-between ml-16 mr-16 mx-auto py-4 md:py-4">
          <SiteTitle />

          <button
            className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
            onClick={() => toggleExpansion(!isExpanded)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>

          <nav
            className={`${
              isExpanded ? `block` : `hidden`
              } md:block md:flex md:items-center w-full md:w-auto`}
          >
            {[
              {
                route: `/`,
                title: `HOME`
              },
              {
                route: `#aboutus`,
                title: `ABOUT US`
              },
              {
                route: `#services`,
                title: `SERVICES`
              }
            ].map(link => (
              <Link
                className="block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white"
                key={link.title}
                to={link.route}
              >
                {link.title}
              </Link>
            ))}
            <Link
              className="text-center block md:inline-block mt-4 md:mt-0 md:ml-6 no-underline text-white bg-red p-2 rounded w-40 hover:bg-hoverRed"
              key={`GET A QUOTE`}
              to={`/quote`}
            >
              GET A QUOTE
            </Link>

          </nav>
        </div>
      </div>
    </header >
  );
}

export default Header;
