import React, {useState} from 'react';
import '../NewExpense/ExpenseForm.css'

const ExpenseForm = () => {

    // const [userInput, setUserInput] = useState({
    //     newTitle: '',
    //     newAmount: '',
    //     date: ''
    // });

    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState('');
    const [newDate, setNewDate] = useState('');

    //Use this approach, React will guarantee that the State snapshot, will be the latest data
    const titleChangeHandler = (e) => {
        setNewTitle(e.target.value)
        // setUserInput((prevState) => {
        //     return {...prevState, newTitle: e.target.value}
        // })
    }

    const amountChangeHandler = (e) => {
        setNewAmount(e.target.value)
        // setUserInput(prevState => {
        //     return {...prevState, newAmount: e.target.value}
        // })
    }

    const dateChangeHandler = (e) => {
        setNewDate(e.target.value)
        // setUserInput(prevState => {
        //     return {...prevState, newDate: new Date(e.target.value)}
        // })
    }


    const submitHandler = (e) => {
        //e.preventDefault() will prevent page from re-load
        e.preventDefault()
        const expenses = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }
        console.log(expenses)
        setNewTitle('');
        setNewAmount('');
        setNewDate('');
    }
    // const submitHandler = (e) => {
    //     //e.preventDefault() will prevent page from re-load
    //     e.preventDefault()
    //
    //     console.log(userInput)
    //     setUserInput('')
    // }

    return (
        <form action="" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text"
                           value={newTitle}
                           onChange={titleChangeHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01"
                           value={newAmount}
                           onChange={amountChangeHandler}
                    />
                </div>

                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31"
                           value={newDate}
                           onChange={dateChangeHandler}
                    />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>

        </form>
    )
}

export default ExpenseForm;