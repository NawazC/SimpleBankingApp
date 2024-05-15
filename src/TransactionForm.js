import React, { useState } from 'react';

const TransactionForm = ({ type, onSubmit }) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!accountNumber.trim() || !amount.trim()) {
      alert('Please enter both account number and amount.');
      return;
    }

    // Prepare transaction data
    const transactionData = {
      accountNumber: accountNumber.trim(),
      amount: parseFloat(amount.trim()), // Convert amount to number
      type: type
    };

    // Call onSubmit callback with transaction data
    onSubmit(transactionData);

    // Reset form fields after submission
    setAccountNumber('');
    setAmount('');
  };

  return (
    <div>
      <h2>{type === 'deposit' ? 'Deposit' : 'Withdraw'} Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="accountNumber">Account Number</label>
          <input
            type="text"
            className="form-control"
            id="accountNumber"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
