import React, { useState } from 'react';
import Layout from "../components/layout";
import SEO from "../components/seo";

function Signup() {

  const [name, setName] = useState(``);
  const [email, setEmail] = useState(``);

  const handleSubmit = (e) => {
    const data = {
        email,
        attributes: {
          name
        }
       }   
    fetch(`../../.netlify/functions/sendinblue`, {
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(() => alert(`Form Sent!`))
    .catch(error => alert(error))
    e.preventDefault();
   }

  
  return (
    <Layout>
      <SEO
        keywords={[`web design`, `web development`, `social media management`, `UX`, `UI`, `Web Agency`, `Blue Mountains`, `Sydney`]}
        title="Quote"
      />
      <section className="bg-black w-screen ">
        <form className="mx-auto px-8 w-full md:w-1/2 lg:w-1/3 mb-4" data-netlify="true" data-netlify-honeypot="bot-field" method="post"
          name="quote"
          onSubmit={handleSubmit}
        >
          <h1 className="text-left lg:text-center text-pink text-3xl mb-8">SIGN UP TO OUR EMAIL LIST BRUH</h1>
          <p className="leading-loose mb-6 text-grey">
            Your details
          </p>

          <input name="bot-field" type="hidden" />
          <input name="form-name" type="hidden" value="quote" />

          <input
            aria-label="Name"
            className="bg-black mb-8 shadow appearance-none rounded border w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
            name="name" 
            onChange={e => setName(e.target.value)}
            placeholder="Name" type="text" 
            value={name}
            />

          <input
            aria-label="Email"
            className="bg-black mb-8 shadow appearance-none rounded border w-full py-2 px-3 text-grey leading-tight focus:outline-none focus:shadow-outline"
            name="email" onChange={e => setEmail(e.target.value)} placeholder="Email" 
            type="text"
            value={email}
            />

          <button className=" bg-red hover:bg-red-100 font-bold px-4     py-2 rounded w-full text-sm text-white">
            SEND
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default Signup;
