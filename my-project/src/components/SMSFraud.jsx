import React from "react";
import { Link } from "react-router-dom"; // Import Link component

const SMSFraud = () => {
  const handleSmsSubmit = (event) => {
    event.preventDefault();
    const text = event.target.elements["sms-input"].value;
    // Call your SMS fraud detection API here
    // Example: fetch('/api/sms-fraud', { method: 'POST', body: text })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle API response
    //   });
  };

  return (
    <div className="flex flex-col text-center justify-center items-center text-4xl text-white">
      <div className="mb-24 w-[80vh]">
        <h1>What is SMS Fraud?</h1>
        <p className="italic opacity-60 text-base mt-4 mx-8 border-opacity-0">SMS fraud is a form of telecommunications fraud that exploits the mobile messaging system for financial gain. It can take many forms - SMS toll fraud, smishing, malware spreading, and more - but what they have in common is bad actors using SMS workflows to perpetrate crimes. As one of the most commonly used messaging channels among businesses and consumers, with an estimated 23-27 billion text messages sent every day,1 overloaded SMS pathways are a lucrative target for misuse.</p>
      </div>
      <div className="rounded-full border border-white px-56 h-[70vh] mb-10">
        <div id="content">
          <div className="page" id="sms-fraud">
            <h2 className=" pt-10 pb-10">Detect SMS Fraud</h2>
            <form id="sms-form" onSubmit={handleSmsSubmit}>
              <textarea
                id="sms-input"
                rows="4"
                cols="50"
                className="my-14 rounded-3xl text-white text-center bg-gray-700 border-2"
                placeholder="Enter SMS Here"
              ></textarea>
              <br />
              <button
                type="submit"
                className="rounded-3xl mt-5 border border-transparent px-4 py-2 hover:bg-blue-700 transition-colors duration-250"
              >
                Submit
              </button>
            </form>
            <div id="sms-result"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SMSFraud;
