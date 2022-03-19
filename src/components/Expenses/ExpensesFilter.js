import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
    // 순서 : Expenses에 onChangeFilter={filterChangeHandler}가 있을 때, props를 써서 filterChangeHandler의 매개변수 selectdYear의 자리에 매개변수로 이 함수의 e를 담아줄 수 있다.
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>연도 설정</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
