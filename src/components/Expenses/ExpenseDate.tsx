import React from 'react';
import './ExpenseDate.css';

interface ExpenseDateProp
{
    expenseDate: Date;
}

const ExpenseDate: React.FC<ExpenseDateProp> = ({expenseDate}) =>
{
    const month = expenseDate.toLocaleDateString('en-US', {month: 'long'});
    const day = expenseDate.toLocaleDateString('en-US', {day: '2-digit'})
    const year = expenseDate.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;