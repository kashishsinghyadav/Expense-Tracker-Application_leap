import React, { useState } from 'react';

const ExpenseForm = () => {
  const [expense, setExpense] = useState({ description: '', amount: '' });

  const handleInputChange = (e) => {
    setExpense({ ...expense, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send expense data to Spring Boot backend
    console.log('Expense submitted:', expense);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input type="text" name="description" onChange={handleInputChange} />
      </label>
      <label>
        Amount:
        <input type="number" name="amount" onChange={handleInputChange} />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
