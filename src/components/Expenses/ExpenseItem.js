import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  // const expenseDate = new Date(2022, 2, 17);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = "398";
  // 데이터는 컴포넌트 내부에 저장되어 있으면 안 되고 외부에서 유입되어야 한다. 이 방식 === props
  // props를 사용할 때 App.js세팅 후에 매개변수를 건드린다
  // props를 사용하여 App.js의 컴포넌트의 속성(date,title등의 값)을 전달받을 수 있다. 속성 이름과 props.%%% 의 이름이 같아야 함.

  // const month = props.date.toLocaleString("ko-KR", { month: "long" });
  // const day = props.date.toLocaleString("ko-KR", { day: "2-digit" });
  // const years = props.date.getFullYear();
  return (
    // 맞춤 컴포넌트는 props가 없으면 래퍼로 쓸 수 없다
    <Card className="expense-item">
      {/* <div>
        <div>{years}</div>
        <div>{month}</div>
        <div>{day}</div>
      </div> */}
      {/* 여기기준으로 해당 컴포넌트를 2개로 나눔 */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}천원</div>
      </div>
    </Card>
  );
};

//컴포넌트 === html코드를 리턴하는 함수일 뿐임

export default ExpenseItem;
