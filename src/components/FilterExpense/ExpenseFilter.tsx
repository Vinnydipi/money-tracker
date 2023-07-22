import React from 'react';
import './ExpenseFilter.css';

interface filter
{
    defaultYear: string;
    onChangeFilter: (year: string) => void;
}

const ExpensesFilter: React.FC<filter> = ({defaultYear, onChangeFilter}) => 
{    
    const dropDownChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => 
    {
        event.preventDefault();
        const selectedYear = event.target.value;// Calls the function from ExpenseDisplay.tsx
        onChangeFilter(selectedYear);
    }

    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                    <select value={defaultYear} onChange={dropDownChangeHandler}>
                        <option value='2023'>2023</option>
                        <option value='2022'>2022</option>
                        <option value='2021'>2021</option>
                    </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;