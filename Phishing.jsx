import React from "react";
import { Link } from "react-router-dom";

const Phishing = () => {
  const handlePhishingSubmit = (event) => {
    event.preventDefault();
    const url = event.target.elements["phishing-input"].value;
    // Call your phishing detection API here
    // Example: fetch('/api/phishing', { method: 'POST', body: url })
    //   .then(response => response.json())
    //   .then(data => {
    //     // Handle API response
    //   });
  };

  return (
    <div className="h-[100vh] flex flex-col text-center justify-center items-center text-4xl">
 <div className="mt-28 mb-16 w-[80vh] text-white">
        <h1>What is phishing?</h1>
        <p className="italic opacity-60 text-base mt-4 mx-8 border-opacity-0">Phishing is when attackers send scam emails (or text messages) that contain links to malicious websites. The websites may contain malware (such as ransomware) which can sabotage systems and organisations. Or they might be designed to trick users into revealing sensitive information (such as passwords), or transferring money.</p>
      </div>
      <div
        id="content"
        className="text-4xl text-white rounded-full border border-white px-96 py-20 h-[100vh] mb-28"
      >
        <div className="page" id="phishing">
          <h2 className="my-10">Phishing Detection</h2>
          <form id="phishing-form" onSubmit={handlePhishingSubmit}>
            <input
              className="text-center rounded-3xl text-white bg-gray-700 border-2"
              type="text"
              id="phishing-input"
              placeholder="URL"
            />
            <br />
            <button
              type="submit"
              className="my-10 rounded-3xl border border-transparent px-4 py-2 hover:bg-blue-700 transition-colors duration-250"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Phishing;
