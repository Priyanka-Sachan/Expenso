import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const saveExpenseData = (enteredExpenseData) => {
        const expense = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expense);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
}

export default NewExpense;