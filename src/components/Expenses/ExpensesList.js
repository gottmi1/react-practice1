import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  // let expensesContent = <p>지출 내역이 없습니다</p>;
  // JSX컨텐츠를 변수에 저장할 수도 있다
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">지출 내역을 찾을 수 없습니다.</h2>
    );
  }

  // && 연산자: 앞 조건이 true이면 뒤를 실행, 삼항 연산자로 하면 복잡할 수 있기 때문에 이것도 유효하다

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
        // 사용되는 props를 items라고 명명함
      ))}
    </ul>
  );
};

export default ExpensesList;
