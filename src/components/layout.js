import PropTypes from "prop-types";
import React from "react";

import Header from "./header";
import SiteTitle from "./siteTitle";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen bg-white">
      <Header />
      <main className="main flex flex-col flex-1 md:justify-center mx-auto w-full">
        {children}
      </main>
      <footer className="bg-black">
        <nav className="flex justify-between ml-16 mr-16 mx-auto py-2 md:py-2 text-sm">
          <SiteTitle year="true" />
          <p>
            <a
              className="font-bold no-underline text-white"
              href="#"
            >
              Email
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
