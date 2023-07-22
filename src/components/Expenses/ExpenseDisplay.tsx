import React, { useState } from 'react';
import ExpenseList from './ExpensesList';
import './ExpenseDisplay.css';
import Card from '../UI/Card';
import ExpensesFilter from '../FilterExpense/ExpenseFilter';
import ExpensesChart from './ExpensesChart';

interface ExpensesDisplayProps
{
    expenses: Expense[];
}

interface Expense 
{
    id: string;
    title: string;
    amount: number;
    date: Date;
}

const ExpenseDisplay: React.FC<ExpensesDisplayProps> = ({expenses}) =>
{
    const [filteredYear, setFilteredYear] = useState<string>('2023');
    
    const filterChangeHandler = (year: string) => setFilteredYear(year);
    
    const filteredExpenses = expenses.filter(expense => 
        {return expense.date.getFullYear().toString() === filteredYear});

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter 
                    defaultYear={filteredYear} 
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpenseList propItems={filteredExpenses}/>
            </Card>
        </div>
    )
}

export default ExpenseDisplay;