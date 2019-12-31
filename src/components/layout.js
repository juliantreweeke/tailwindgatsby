import PropTypes from "prop-types";
import React from "react";

import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen bg-white">
      <Header />
      <main className="main flex flex-col flex-1 md:justify-center mx-auto w-full">
        {children}
      </main>
      <footer className="bg-black">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
          <p className="text-white">
            Studio new 2020
          </p>
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
