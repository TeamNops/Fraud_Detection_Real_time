// import React from "react";
// import { Link } from "react-router-dom";

// const Home = () => {
//   return (
//     <div className="w-full">
//       <div className="z-90 flex justify-center items-center h-[70vh] pt-20">
//         <div className="text-center">
//           <h1 className="mb-20 text-6xl text-white">
//             Real-Time Fraud Detection
//           </h1>
//           <div className="grid grid-cols-2 gap-8 text-white mt-5">
//             <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-semibold mb-2">SMS Fraud</h2>
//               <p className="mb-4 italic opacity-75">Fraud using fake text messages</p>
//               <button className="border border-white rounded-full px-4 py-1 hover:bg-gray-800 uppercase transition duration-250">
//                 <Link to="/SMSFraud">Learn More</Link>
//               </button>
//             </div>
//             <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-semibold mb-2">Credit Fraud</h2>
//               <p className="mb-4 italic opacity-75">Unauthorized use of credit information</p>
//               <button className="border border-white rounded-full px-4 py-1 hover:bg-gray-800 uppercase transition duration-250">
//                 <Link to="/FraudTransactions">Learn More</Link>
//               </button>
//             </div>
//             <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-semibold mb-2">Phishing</h2>
//               <p className="mb-4 italic opacity-75">Attempting to steal sensitive information</p>
//               <button className="border border-white rounded-full px-4 py-1 hover:bg-gray-800 uppercase transition duration-250">
//                 <Link to="/Phishing">Learn More</Link>
//               </button>
//             </div>
//             <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-semibold mb-2">Reinforcement Learning</h2>
//               <p className="mb-4 italic opacity-75">How RL is used to detect fraud</p>
//               <button className="border border-white rounded-full px-4 py-1 hover:bg-gray-800 uppercase transition duration-250">
//                 <Link to="/RL">Learn More</Link>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full">
      <div className="z-90 flex justify-center items-center h-[70vh] pt-40">
        <div className="text-center">
          <h1 className=" mb-28 text-6xl text-white">
            Real-Time Fraud Detection
          </h1>
          <div className="grid grid-cols-2 gap-8 text-white mt-5">
            <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">SMS Fraud</h2>
              <p className="mb-4 italic opacity-75">Fraud using fake text messages</p>
              <button className="border border-white rounded-full px-4 py-1 hover:bg-gray-800 uppercase transition duration-250">
                <Link to="/SMSFraud">Learn More</Link>
              </button>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">Credit Fraud</h2>
              <p className="mb-4 italic opacity-75">Unauthorized use of credit information</p>
              <button className="border border-white rounded-full px-4 py-1 hover:bg-gray-800 uppercase transition duration-250">
                <Link to="/FraudTransactions">Learn More</Link>
              </button>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">Phishing</h2>
              <p className="mb-4 italic opacity-75">Attempting to steal sensitive information</p>
              <button className="border border-white rounded-full px-4 py-1 hover:bg-gray-800 uppercase transition duration-250">
                <Link to="/Phishing">Learn More</Link>
              </button>
            </div>
            <div className="bg-white bg-opacity-20 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">Reinforcement Learning</h2>
              <p className="mb-4 italic opacity-75">How RL is used to detect fraud</p>
              <button className="border border-white rounded-full px-4 py-1 hover:bg-gray-800 uppercase transition duration-250">
                <Link to="/RL">Learn More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[100vh] bg-inherit text-white flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-4xl mb-4" id="About">About Us</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed eget massa et nulla commodo vestibulum. 
            Integer efficitur vulputate velit, a semper ligula pharetra non.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
