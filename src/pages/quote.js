import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function QuotePage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section className="bg-black w-screen ">
        <form name="quote" className="mx-auto w-1/2 md:w-1/4 mb-4" method="POST" data-netlify="true">
          <h1 className="text-center text-pink text-3xl mb-8">Get a Quote</h1>
          <p className="leading-loose mb-6 text-grey">
            Your details
          </p>

          <input
            aria-label="Name"
            className="bg-black mb-8 shadow appearance-none rounded border w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Name" />

          <input
            aria-label="Email"
            className="bg-black mb-8 shadow appearance-none rounded border w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />

          <input
            aria-label="Phone Number"
            className="bg-black mb-8 shadow appearance-none rounded border w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Phone Number" />

          <p className="leading-loose mb-6 text-grey">
            Project details
          </p>
          <div className="mb-8" >
            <div className="flex flex-wrap  w-full">
              <label className="text-grey w-full lg:w-1/2 mb-4">
                <input className="mr-2 leading-tight bg-black border" type="checkbox" />
                <span>
                  Web Design
                </span>
              </label>
              <label className="text-grey w-full lg:w-1/2 mb-4">
                <input className="mr-2 leading-tight bg-black border" type="checkbox" />
                <span>
                  Web Review
                </span>
              </label>
            </div>
            <div className="flex flex-wrap  w-full">
              <label className="text-grey w-full lg:w-1/2 mb-4">
                <input className="mr-2 leading-tight bg-black border" type="checkbox" />
                <span>
                  Mobile Design
                </span>
              </label>
              <label className="text-grey w-full lg:w-1/2 mb-4">
                <input className="mr-2 leading-tight bg-black border" type="checkbox" />
                <span>
                  Copywriting
                </span>
              </label>
            </div>
            <div className="flex flex-wrap  w-full">
              <label className="text-grey w-full lg:w-1/2 mb-4">
                <input className="mr-2 leading-tight bg-black border" type="checkbox" />
                <span>
                  Social Media
                </span>
              </label>
              <label className="text-grey w-full lg:w-1/2 mb-4">
                <input className="mr-2 leading-tight bg-black border" type="checkbox" />
                <span>
                  UX/UI
                </span>
              </label>
            </div>
          </div>

          <textarea
            aria-label="additional comments"
            className="bg-black appearance-none shadow leading-tight mb-6 py-2 px-3 rounded border text-grey w-full"
            id="message"
            placeholder="Additional comments.."
            rows="8"
          />

          <button type="submit" className=" bg-red hover:bg-red-100 font-bold px-4 py-2 rounded w-full text-sm text-white">
            SEND
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default QuotePage;
