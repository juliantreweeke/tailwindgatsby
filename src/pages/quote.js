import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function QuotePage() {
  return (
    <Layout>
      <SEO
        keywords={[`web design`,`web site`,`website`, `web development`, `social media management`, `UX`, `UI`, `Web Agency`, `Blue Mountains`, `Sydney`, `digital marketing`, `online store`, `search engines`, `simple website`, `development company`, `building your website`, `great website`, `user experience`, `mobile responsive`, `search engine optimisation`, `web design company`, `online shop`, `design and development`, `online marketing`, `content management systems`, `developers and digital`, `ecommerce websites`, `businesses grow`, `small business`]}
        title="Quote"
      />
      <section className="bg-black w-screen ">
        <form className="mx-auto px-8 w-full md:w-1/2 lg:w-1/3 mb-4" data-netlify="true" data-netlify-honeypot="bot-field" method="post"
          name="quote"
        >
          <h1 className="text-left lg:text-center text-pink text-3xl mb-8">Get a Quote</h1>
          <p className="leading-loose mb-6 text-grey">
            Your details
          </p>

          <input name="bot-field" type="hidden" />
          <input name="form-name" type="hidden" value="quote" />

          <input
            aria-label="Name"
            className="bg-black mb-8 shadow appearance-none rounded border w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
            id="username" name="name" placeholder="Name" type="text" />

          <input
            aria-label="Email"
            className="bg-black mb-8 shadow appearance-none rounded border w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
            id="username" name="email" placeholder="Email" type="text" />

          <input
            aria-label="Phone Number"
            className="bg-black mb-8 shadow appearance-none rounded border w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
            id="username" name="phone number" placeholder="Phone Number" type="text" />

          <p className="leading-loose mb-6 text-grey">
            Project details
          </p>
          <div className="mb-8" >
            <div className="flex flex-wrap  w-full">
              <label className="text-grey w-full lg:w-1/2 mb-4">
                <input className="mr-2 leading-tight bg-black border" name="web design" type="checkbox" />
                <span>
                  Web Design
                </span>
              </label>
              <label className="text-grey w-full lg:w-1/2 mb-4">
                <input className="mr-2 leading-tight bg-black border" name="web development" type="checkbox" />
                <span>
                  Web Development
                </span>
              </label>
            </div>
            <div className="flex flex-wrap  w-full">
              <label className="text-grey w-full lg:w-1/2 mb-4">
                <input className="mr-2 leading-tight bg-black border" name="UX/UI" type="checkbox" />
                <span>
                  UX/UI
                </span>
              </label>
              <label className="text-grey w-full lg:w-1/2 mb-4">
                <input className="mr-2 leading-tight bg-black border" name="social media" type="checkbox" />
                <span>
                  Social Media
                </span>
              </label>
            </div>
            <div className="flex flex-wrap  w-full">
              <label className="text-grey w-full lg:w-1/2 mb-4">
                <input className="mr-2 leading-tight bg-black border" name="sound design" type="checkbox" />
                <span>
                  Sound Design
                </span>
              </label>
              <label className="text-grey w-full lg:w-1/2 mb-4">
                <input className="mr-2 leading-tight bg-black border" name="copywriting" type="checkbox" />
                <span>
                  Copywriting
                </span>
              </label>
            </div>
          </div>

          <textarea
            aria-label="additional comments"
            className="bg-black appearance-none shadow leading-tight mb-6 py-2 px-3 rounded border text-grey w-full"
            id="message"
            name="additional comments"
            placeholder="Additional comments.."
            rows="8"
          />

          <button className="bg-red hover:bg-red-100 font-bold px-4 py-2 rounded w-full text-sm text-white" type="submit">
            SEND
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default QuotePage;
