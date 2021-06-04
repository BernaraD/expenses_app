import React, {useState} from 'react';
import "./Expenses.css"
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {

    const expenses = props.items;

    const [selectedYear, setSelectedYear] = useState('2021');

    const filterYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear)
    }

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === selectedYear
    });

    return (

        <Card className="expenses">
            <ExpenseFilter
                filterYearHandler={filterYearHandler}
                selectedYear={selectedYear}
            />

            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses}/>


        </Card>
    )
}

export default Expenses;