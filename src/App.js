import {useState} from "react";
import "./App.css"
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

    const initialValues = [
        {
            id: 'e1',
            title: 'Home goods',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        {id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)},
        {
            id: 'e3',
            title: 'Car Insurance',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'Technology Equipment',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ]


    const [expenses, setExpense] = useState(initialValues);


    const addExpenseHandler = (expense) => {
        console.log(expense)
        if (expense.title.length < 3 ) {
           alert('Expense title should be longer then 3')
        } else {
            const updatedExpenses = {
                id: Math.random(),
                title: expense.title,
                amount: expense.amount,
                date: expense.date,
            }
            const newExpense = ([updatedExpenses, ...expenses])
            setExpense(newExpense)
        }
    }


    return (
        <div className="App">
            <h2>Expense Calculator</h2>

            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses items={expenses}/>

        </div>
    );
}

export default App;
