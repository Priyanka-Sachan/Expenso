import { useState } from 'react';

import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');

    const filterExpensesHandler = (pickedYear) => {
        setFilteredYear(pickedYear);
        console.log(pickedYear);
    }

    return <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onFilterExpenses={filterExpensesHandler} />
        <ExpenseItem title={props.expenses[0].title} date={props.expenses[0].date} amount={props.expenses[0].amount}></ExpenseItem>
        <ExpenseItem title={props.expenses[1].title} date={props.expenses[1].date} amount={props.expenses[1].amount}></ExpenseItem>
        <ExpenseItem title={props.expenses[2].title} date={props.expenses[2].date} amount={props.expenses[2].amount}></ExpenseItem>
    </Card>
}

export default Expenses;