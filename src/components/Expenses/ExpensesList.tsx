import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

interface Expense 
{
    id: string;
    title: string;
    amount: number;
    date: Date;
}

interface props
{
    propItems: Expense [];
}

const ExpenseList: React.FC<props> = ({propItems}) =>
{
    if (propItems.length === 0)
    {
        return <h2 className='expenses-list__fallback'>Found No Expenses.</h2>
    }

    return (
        <ul className='expenses-list '>
            {propItems.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    expenseAmount={expense.amount} 
                    expenseDate={expense.date} 
                    expenseTitle={expense.title} 
                />
            ))}
        </ul>
    );
}

export default ExpenseList;