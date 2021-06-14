import { useState } from 'react';

import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    const saveExpenseData = (enteredExpenseData) => {
        const expense = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expense);
    }
    return <div className="new-expense">
        {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onStopEditing={stopEditingHandler} onSaveExpenseData={saveExpenseData} />}
    </div>
}

export default NewExpense;