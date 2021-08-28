import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Unicorn food',
    amount: 12.5,
    date: new Date(2020, 7, 12),
  },
  {
    id: 'e2',
    title: 'Car rent',
    amount: 50,
    date: new Date(2022, 7, 16),
  },
  {
    id: 'e3',
    title: 'Silk dress',
    amount: 100,
    date: new Date(2021, 8, 15),
  },
  {
    id: 'e4',
    title: 'Travel ticket',
    amount: 20,
    date: new Date(2021, 5, 11),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
