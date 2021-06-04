import React, {useState} from 'react';
import "../NewExpense/NewExpense.css"
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => {

    const [addNewExpenseActive, setAddNewExpenseActive] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenses = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenses);
        setAddNewExpenseActive(false);

    }

    const onAddNewExpenseClick = () => {
        setAddNewExpenseActive(true)
    }

    const onCancelExpensesData = () => {
        setAddNewExpenseActive(false)
    }

    return (
        <div className="new-expense">
            {!addNewExpenseActive && <button onClick={onAddNewExpenseClick}>Add new Expense</button>}
            {addNewExpenseActive && <ExpenseForm
                onSaveExpenseData={saveExpenseDataHandler}
                onCancelBtnClick={onCancelExpensesData}/>}
        </div>
    )
}

export default NewExpense;