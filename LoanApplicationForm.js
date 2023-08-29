import React, { useState } from 'react';
import axios from 'axios';

const LoanApplicationForm = () => {
  const [businessDetails, setBusinessDetails] = useState({});
  const [loanAmount, setLoanAmount] = useState('');
  const [preAssessment, setPreAssessment] = useState('');

  const fetchBalanceSheet = async () => {
    // Fetch balance sheet data from backend
    const response = await axios.get('/get-balance-sheet');
    // Process the response and set businessDetails and preAssessment state
  };

  const submitApplication = async () => {
    // Send application data to backend
    const response = await axios.post('/submit-application', {
      businessDetails,
      loanAmount
    });
    // Process the response and set preAssessment state
  };

  return (
    <div className="loan-application-form">
      <h2>Business Loan Application</h2>
      <div className="input-section">
        <label htmlFor="businessName">Business Name:</label>
        <input
          type="text"
          id="businessName"
          value={businessDetails.name || ''}
          onChange={(e) => setBusinessDetails({ ...businessDetails, name: e.target.value })}
        />
      </div>
      <div className="input-section">
        <label htmlFor="yearEstablished">Year Established:</label>
        <input
          type="text"
          id="yearEstablished"
          value={businessDetails.year || ''}
          onChange={(e) => setBusinessDetails({ ...businessDetails, year: e.target.value })}
        />
      </div>
      <div className="input-section">
        <label htmlFor="loanAmount">Loan Amount:</label>
        <input
          type="text"
          id="loanAmount"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
        />
      </div>
      <button onClick={fetchBalanceSheet}>Fetch Balance Sheet</button>
      <button onClick={submitApplication}>Submit Application</button>
      <div className="result-section">
        <p>Pre-Assessment: {preAssessment}</p>
        {/* Display final outcome here */}
      </div>
    </div>
  );
};

export default LoanApplicationForm;
