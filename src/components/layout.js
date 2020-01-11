import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import SiteTitle from "./siteTitle";
import Email from '../images/email.png';

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen bg-white">
      <Header />
      <main className="main flex flex-col flex-1 md:justify-center mx-auto w-full">
        {children}
      </main>
      <footer className="bg-black hidden lg:block">
        <nav className="flex ml-16 mr-16 mx-auto py-2 md:py-2 text-sm">
          <SiteTitle footer year />
          <div className="pl-16 leading-loose">
            <img src={Email} className="w-4 inline-block mr-2 pb-1" alt="email icon" />
            <a
              className="pt-4 no-underline text-white paragraphFont text-sm"
              href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hello@thestudiobloom.com"
              target="_blank"
            >
              hello@thestudiobloom.com
          </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
