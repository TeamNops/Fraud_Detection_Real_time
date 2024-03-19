// import React, { useState } from "react";

// const FraudTransactions = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [formData, setFormData] = useState({
//     transactionDateTime: "",
//     merchantName: "",
//     category: "",
//     amount: ""
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleTransactionSubmit = (event) => {
//     event.preventDefault();
//     const newTransaction = { ...formData, status: "Pending" };
//     setTransactions([newTransaction]);
//     setFormData({
//       transactionDateTime: "",
//       merchantName: "",
//       category: "",
//       amount: ""
//     });
//   };

//   return (
//     <div className="h-screen flex flex-col justify-center items-center text-white">
//       <div className="w-[70vh] mx-auto text-center mt-16 mb-16">
//         <h1 className="text-4xl font-semibold mb-4">What is Credit Fraud?</h1>
//         <p className="italic opacity-60 text-base mt-4 mx-8 border-opacity-0">Credit fraud is the criminal use of someone else's personal credentials, as well as their credit standing, to borrow money or use credit cards to purchase goods or services with no intention of repaying the debt.</p>
//         <form onSubmit={handleTransactionSubmit} className="space-y-4 border rounded-lg px-8 py-6 mb-10">
//           <h2 className="text-2xl pb-2">Credit Fraud Detection</h2>
//           <InputField label="Transaction Date and Time" name="transactionDateTime" value={formData.transactionDateTime} onChange={handleInputChange} />
//           <InputField label="Merchant Name" name="merchantName" value={formData.merchantName} onChange={handleInputChange} />
//           <InputField label="Category" name="category" value={formData.category} onChange={handleInputChange} />
//           <InputField label="Amount" name="amount" value={formData.amount} onChange={handleInputChange} />
//           <div className="flex justify-center">
//             <button type="submit" className="bg-transparent border text-white py-2 px-4 rounded-md hover:bg-blue-600">Add Transaction</button>
//           </div>
//         </form>
//         {transactions.length > 0 && (
//           <div className="mt-8">
//             <TransactionDetails transaction={transactions[0]} />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const InputField = ({ label, name, value, onChange }) => (
//   <div>
//     <label htmlFor={name}>{label}:</label>
//     <input
//       type="text"
//       id={name}
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="w-full px-3 py-2 rounded-md border border-gray-600 text-black"
//     />
//   </div>
// );

// const TransactionDetails = ({ transaction }) => (
//   <div className="border border-gray-600 rounded-md p-4">
//     <p>Date and Time: {transaction.dateTime}</p>
//     <p>Merchant Name: {transaction.merchant}</p>
//     <p>Category: {transaction.category}</p>
//     <p>Amount: {transaction.amount}</p>
//     <p>Status: {transaction.status}</p>
//   </div>
// );

// export default FraudTransactions;

import React, { useState } from "react";

const FraudTransactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    transactionDateTime: "",
    merchantName: "",
    category: "",
    amount: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTransactionSubmit = (event) => {
    event.preventDefault();
    const newTransaction = { ...formData, status: "Pending" };
    setTransactions([newTransaction]);
    setFormData({
      transactionDateTime: "",
      merchantName: "",
      category: "",
      amount: ""
    });
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-white">
      <div className="w-[70vh] mx-auto text-center mt-16 mb-16">
        <h1 className="text-4xl font-semibold mb-8">What is Credit Fraud?</h1>
        <p className="italic opacity-60 text-base mt-6 mx-8 mb-16 border-opacity-0">Credit fraud is the criminal use of someone else's personal credentials, as well as their credit standing, to borrow money or use credit cards to purchase goods or services with no intention of repaying the debt.</p>
        <form onSubmit={handleTransactionSubmit} className="space-y-6 border rounded-lg px-8 py-6 mb-16">
          <h2 className="text-2xl pb-4">Credit Fraud Detection</h2>
          <InputField label="Transaction Date and Time" name="transactionDateTime" value={formData.transactionDateTime} onChange={handleInputChange} />
          <InputField label="Merchant Name" name="merchantName" value={formData.merchantName} onChange={handleInputChange} />
          <InputField label="Category" name="category" value={formData.category} onChange={handleInputChange} />
          <InputField label="Amount" name="amount" value={formData.amount} onChange={handleInputChange} />
          <div className="flex justify-center">
            <button type="submit" className="bg-transparent border text-white py-2 px-4 rounded-md hover:bg-blue-600">Add Transaction</button>
          </div>
        </form>
        {transactions.length > 0 && (
          <div className="mt-8">
            <TransactionDetails transaction={transactions[0]} />
          </div>
        )}
      </div>
    </div>
  );
};

const InputField = ({ label, name, value, onChange }) => (
  <div>
    <label htmlFor={name}>{label}:</label>
    <input
      type="text"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 rounded-md border border-gray-600 text-black"
    />
  </div>
);

const TransactionDetails = ({ transaction }) => (
  <div className="border border-gray-600 rounded-md p-4">
    <p>Date and Time: {transaction.dateTime}</p>
    <p>Merchant Name: {transaction.merchant}</p>
    <p>Category: {transaction.category}</p>
    <p>Amount: {transaction.amount}</p>
    <p>Status: {transaction.status}</p>
  </div>
);

export default FraudTransactions;
