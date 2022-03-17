import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnterdTitle] = useState("");
  const [enteredAmount, setEnterdAmount] = useState("");
  const [enteredDate, setEnterdDate] = useState("");
  // useState("")에 들어가는 값은 초기값임
  // 기본적으로 인풋에 대한 변경이벤트를 수신할 때 마다 값을 문자열로 받기 때문에 ""를 넣어준다.
  // 한 form으로 묶인 비슷한 State를 굳이 중복해서 가질 필요가 없으므로 간략하게 리펙토링할 수도 있다(취향차이임)
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (e) => {
    setEnterdTitle(e.target.value);
    // setUserInput({ ...userInput, enteredTitle: e.target.value });
    // 나머지 값을 버리고 이 값 하나만을 가질 것이기 때문에 스프레드 연산자를 사용해 다른 정보를 버리지 않게 한다
    // 이건 이전 상태에 의존하기 때문에 이전 상태에 의존하지 않게할 수도 있음
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // });
    // 이전 코드도 잘 동작하지만, 이렇게 하면 React가 최신상태라는 걸 보장하게 됨 이전 상태에 따라 State가 업데이트 된다면 반드시 이 함수를 사용한다
  };

  const amountChangeHandler = (e) => {
    setEnterdAmount(e.target.value);
    // setUserInput({ ...userInput, enteredAmount: e.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: e.target.value };
    // });
  };
  const dateChangeHandler = (e) => {
    setEnterdDate(e.target.value);
    // setUserInput({ ...userInput, enteredDate: e.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: e.target.value };
    // });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseData);
    setEnterdTitle("");
    setEnterdAmount("");
    setEnterdDate("");
    // submit시 다시 비워주기 위해
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          {/* value에 State를 주는 걸 양방향 바인딩이라고하는데 폼작업을 할 때 매우 유용하다 사용자 입력값을 모아주며, 변화도 해주기 때문.
          submit시 setEnteredTitle('')이 된 걸 다시 enteredTitle(빈칸)으로 만들어 주는 동작인 것 같음*/}
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="1"
            step="0.1"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">추가</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
