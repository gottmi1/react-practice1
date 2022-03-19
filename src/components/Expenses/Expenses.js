import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          // selected = ExpensesFilter컴포넌트의 value(porps.filteredYear)를 가져옴
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filterExpenses} />
        <ExpensesList items={filterExpenses} />
        {/* if문을 사용해 filterExpenses의 길이가 0일 땐 expensesContent의 기본 값을 렌더링하고, 길이가 0보다 클 땐 다른 걸 렌더링 하게 하였다. return내부에 쓰는 것 보다 훨씬 보기 편하다 */}
      </Card>
    </div>
  );
};

export default Expenses;
