import React, { useState } from 'react';

import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const changeTitleHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const changeAmountHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const changeDateHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitFormHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitFormHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text'
                    value={enteredTitle}
                    onChange={changeTitleHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number'
                    min="0.01"
                    step="0.01"
                    value={enteredAmount}
                    onChange={changeAmountHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date'
                    min="2019-01-01"
                    max="2022-12-31"
                    value={enteredDate}
                    onChange={changeDateHandler} />
            </div>
        </div>
        <button className="new-expense__actions">Add Expense</button>
    </form>
}

export default ExpenseForm;