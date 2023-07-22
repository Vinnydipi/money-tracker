import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

interface expenseItemProps
{
    expenseTitle: string;
    expenseAmount: number;
    expenseDate: Date;
}

const ExpenseItem: React.FC<expenseItemProps> = ({expenseTitle, expenseAmount, expenseDate}) =>
{
    return (
        <li>
            <Card className='expense-item'>
                <ExpenseDate expenseDate={expenseDate}/>
                <div className='expense-item__description'>
                    <h2>{expenseTitle}</h2>
                    <div className='expense-item__price'>${expenseAmount}</div>
                </div>
            </Card>
        </li>
    )
}

export default ExpenseItem;