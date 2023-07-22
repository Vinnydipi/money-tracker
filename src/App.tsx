import React, { useState } from "react";
// Imports
import ExpenseDisplay from "./components/Expenses/ExpenseDisplay";
import NewExpense from "./components/NewExpense/NewExpense";

interface Expense 
{
	id: string;
	title: string;
	amount: number;
	date: Date;
}

const DUMMY_EXPENSES: Expense [] = [
	{
	  id: 'e1',
	  title: 'Toilet Paper',
	  amount: 94.12,
	  date: new Date(2023, 7, 14),
	},
	{ 
		id: 'e2', 
		title: 'New TV', 
		amount: 799.49, 
		date: new Date(2023, 2, 12) },
	{
	  id: 'e3',
	  title: 'Car Insurance',
	  amount: 294.67,
	  date: new Date(2021, 2, 28),
	},
	{
	  id: 'e4',
	  title: 'New Desk (Wooden)',
	  amount: 450,
	  date: new Date(2021, 5, 12),
	},
  ];

const App = () => 
{
	const [expenses, setExpenses] = useState<Expense []>(DUMMY_EXPENSES);

	const addExpenseHandler = (newExpense: Expense) =>
	{
		setExpenses((prevExpenses) => 
		{
			return [newExpense, ...prevExpenses];
		});
	}

    return (
        <div>
			<NewExpense onAddExpense={addExpenseHandler} />
			<ExpenseDisplay expenses={expenses}/>
        </div>
    );
}

export default App;
