import React, { useState } from "react";
import './ExpenseForm.css';

interface Expense 
{
	id: string;
	title: string;
	amount: number;
	date: Date;
}

interface props
{
    onSaveExpenseData: (data: Expense) => void;
    onCloseAddExpenseForm: () => void;
}

const ExpenseForm: React.FC<props> = ({onSaveExpenseData, onCloseAddExpenseForm}) => 
{   
    const [title, setTitle] = useState<string>('');
    const [amount, setAmount] = useState<number>(0);
    const [date, setDate] = useState<Date>(new Date());
    
    const setTitleHandler = (event: React.ChangeEvent<HTMLInputElement>): void => 
        setTitle(event.target.value);
    const setAmountHandler = (event: React.ChangeEvent<HTMLInputElement>): void => 
        setAmount(parseFloat(event.target.value));
    const setDateHandler = (event: React.ChangeEvent<HTMLInputElement>): void => 
        setDate(new Date(event.target.value));

    const submitHandler = (event: React.ChangeEvent<HTMLFormElement>): void =>
    {
        event.preventDefault();
        const expenseData: Expense = { id: '', title: title, amount: +amount, date: date };
        onSaveExpenseData(expenseData);
        setTitle('');
        setAmount(0);
        setDate(new Date());
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input 
                        placeholder="Enter Item"
                        type='text' 
                        value={title} 
                        onChange={setTitleHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input 
                        placeholder="0"
                        type='number' 
                        min="0.01" 
                        step="0.01" 
                        value={amount}
                        onChange={setAmountHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type='date' 
                        min="2021-01-01" 
                        max="2023-12-31" 
                        onChange={setDateHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={onCloseAddExpenseForm}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;