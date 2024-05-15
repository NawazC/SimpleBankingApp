import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import TransactionForm from './TransactionForm';


const App = () => {
  const [accountNumber, setAccountNumber] = useState('123456789');
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([]);

  const handleTransaction = ({ amount, type }) => {
    const transaction = {
      type,
      accountNumber:Number(accountNumber),
      amount: Number(amount),
      timestamp: new Date().toLocaleString()
    };

    // Update balance based on transaction type
    if (type === 'deposit') {
      setBalance(prevBalance => prevBalance + Number(amount));
    } else if (type === 'withdraw') {
      setBalance(prevBalance => prevBalance - Number(amount));
    }

    // Update transactions array
    setTransactions(prevTransactions => [...prevTransactions, transaction]);
  };

  return (
    <Router>
      <div>
        <Navbar balance={balance} />
        <div className="container mt-4">
          <Routes>
            <Route
              path="/"
              element={<HomePage accountNumber={accountNumber} balance={balance} transactions={transactions} />}
            />
            <Route path="/deposit" element={<TransactionForm type="deposit" onSubmit={handleTransaction} />} />
            <Route path="/withdraw" element={<TransactionForm type="withdraw" onSubmit={handleTransaction} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
