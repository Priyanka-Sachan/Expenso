import { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterExpensesHandler = (pickedYear) => {
        setFilteredYear(pickedYear);
        console.log(pickedYear);
    }

    const filteredExpenses = props.expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear);
    const expensesResult = filteredExpenses.length === 0 ?
        <h3>You have no expenses this year...</h3> :
        filteredExpenses.map((expense) => {
            return <ExpenseItem
                key={expense.id}
                title={expense.title}
                date={expense.date}
                amount={expense.amount} />
        });

    return <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterExpenses={filterExpensesHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        {expensesResult}
    </Card>
}

export default Expenses;