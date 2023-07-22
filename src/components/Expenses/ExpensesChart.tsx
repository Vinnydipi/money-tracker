import React from "react";

import Chart from "../Chart/Chart";

interface ItemProps
{
    id: string;
    title: string;
    amount: number;
    date: Date;
}

interface props
{
    expenses: ItemProps []
}

const ExpensesChart: React.FC<props> = ({ expenses }) =>
{
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ];

    for (const expense of expenses)
    {
        const expenseMonth = expense.date.getMonth(); // Starting at 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return (
        <Chart dataPoints={chartDataPoints}/>
    )
}

export default ExpensesChart;