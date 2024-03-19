// import React, { useState } from "react";

// const RL = () => {
//   const [formData, setFormData] = useState({
//     transactionAmount: "",
//     senderBalanceBefore: "",
//     senderBalanceAfter: "",
//     receiverBalanceBefore: "",
//     receiverBalanceAfter: ""
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Add your form submission logic here
//     console.log(formData);
//     // Reset form fields after submission
//     setFormData({
//       transactionAmount: "",
//       senderBalanceBefore: "",
//       senderBalanceAfter: "",
//       receiverBalanceBefore: "",
//       receiverBalanceAfter: ""
//     });
//   };

//   return (
//     <div className="h-screen flex flex-col justify-center items-center text-white">
//       <div className="max-w-md mx-auto text-center">
//         <h1 className="text-4xl font-semibold mb-8">How we use Reinforcement Learning to detect fraud</h1>
//         <form onSubmit={handleSubmit} className="border rounded-lg p-8">
//           <InputField label="Transaction Amount" name="transactionAmount" value={formData.transactionAmount} onChange={handleInputChange} />
//           <InputField label="Sender's Balance Before Transaction" name="senderBalanceBefore" value={formData.senderBalanceBefore} onChange={handleInputChange} />
//           <InputField label="Sender's Balance After Transaction" name="senderBalanceAfter" value={formData.senderBalanceAfter} onChange={handleInputChange} />
//           <InputField label="Receiver's Balance Before Transaction" name="receiverBalanceBefore" value={formData.receiverBalanceBefore} onChange={handleInputChange} />
//           <InputField label="Receiver's Balance After Transaction" name="receiverBalanceAfter" value={formData.receiverBalanceAfter} onChange={handleInputChange} />
//           <div className="flex justify-center">
//             <button type="submit" className="bg-transparent border text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const InputField = ({ label, name, value, onChange }) => (
//   <div>
//     <label htmlFor={name} className="block text-sm font-medium text-gray-300">{label}:</label>
//     <input
//       type="text"
//       id={name}
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="mt-1 p-2 block w-full border rounded-md bg-white text-black focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
//     />
//   </div>
// );

// export default RL;

import React, { useState } from "react";

const RL = () => {
  const [formData, setFormData] = useState({
    transactionAmount: "",
    senderBalanceBefore: "",
    senderBalanceAfter: "",
    receiverBalanceBefore: "",
    receiverBalanceAfter: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      transactionAmount: "",
      senderBalanceBefore: "",
      senderBalanceAfter: "",
      receiverBalanceBefore: "",
      receiverBalanceAfter: ""
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-white">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-4xl font-semibold mb-32">How we use Reinforcement Learning to detect fraud</h1>
        <form onSubmit={handleSubmit} className="border rounded-lg p-8">
          <InputField label="Transaction Amount" name="transactionAmount" value={formData.transactionAmount} onChange={handleInputChange} />
          <div className="mt-4">
            <InputField label="Sender's Balance Before Transaction" name="senderBalanceBefore" value={formData.senderBalanceBefore} onChange={handleInputChange} />
          </div>
          <div className="mt-4">
            <InputField label="Sender's Balance After Transaction" name="senderBalanceAfter" value={formData.senderBalanceAfter} onChange={handleInputChange} />
          </div>
          <div className="mt-4">
            <InputField label="Receiver's Balance Before Transaction" name="receiverBalanceBefore" value={formData.receiverBalanceBefore} onChange={handleInputChange} />
          </div>
          <div className="mt-4">
            <InputField label="Receiver's Balance After Transaction" name="receiverBalanceAfter" value={formData.receiverBalanceAfter} onChange={handleInputChange} />
          </div>
          <div className="flex justify-center mt-8">
            <button type="submit" className="bg-transparent border text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-300">{label}:</label>
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 p-2 block w-full border rounded-md bg-white text-black focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
    />
  </div>
);

export default RL;
