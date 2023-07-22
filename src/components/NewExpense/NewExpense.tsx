import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

interface Expense 
{
	id: string;
	title: string;
	amount: number;
	date: Date;
}

interface addNewExpense
{
    onAddExpense: (data: Expense) => void;
}

const NewExpense: React.FC<addNewExpense> = ({onAddExpense}) =>
{
    const [showForm, setShowForm] = useState<boolean>(false);

    const saveExpenseDataHandler = (expenseFormData: Expense) =>
    {
        const newExpenseData: Expense = 
        {
            ...expenseFormData, 
            id: Math.random().toString()
        }
        onAddExpense(newExpenseData);
        onCloseAddExpenseFormHandler();
    }

    const openAddExpenseFormHandler = () => setShowForm(true);
    const onCloseAddExpenseFormHandler = () => setShowForm(false);

    if (!showForm)
    {
        return (
            <div className="new-expense">
                <button onClick={openAddExpenseFormHandler}>Add Expense</button>
            </div>
        )
    }

    return (
        <div className="new-expense">
            <ExpenseForm 
                onCloseAddExpenseForm={onCloseAddExpenseFormHandler}
                onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;