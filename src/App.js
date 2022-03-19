import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "아이폰 13 Pro 구매",
      amount: 120,
      date: new Date(2022, 2, 15),
    },
    { id: "e2", title: "카드 값", amount: 79, date: new Date(2022, 2, 21) },
    {
      id: "e3",
      title: "옷 쇼핑",
      amount: 29,
      date: new Date(2021, 2, 24),
    },
    {
      id: "e4",
      title: "3월 식비",
      amount: 45,
      date: new Date(2022, 2, 31),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("in app.js");
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* Expenses.js에서 사용되는props를 items로 명명했기 때문에, items가 무엇을 가르키는지 매칭시켜줌 */}
      {/* NewExpense의 데이터를 Expenses로 보내고 싶다면 NewExpense -> app.js로 끌어 올린(자식 -> 부모는 끌어올린다고 표현함 lifting) 후에 props를 이용해 app.js -> Expenses로 보내야 한다  */}
    </div>
  );
  // 값이 외부에서 유입되어야 할 때, component의 내용을 건드리기 전에 여기부터 해놓아야 함
  // App.js 컴포넌트에선 ExprenseItem 컴포넌트를 사용하고 ExpenseItem컴포넌트에선 ExpenseDate컴포넌트를 사용한다. 그리고 프랍으로 데이터를 여러개의 컴포넌트를 보낸다. 이때 ExpenseItem의 날짜는 이미 props로부터 받았으므로 ExpenseDate 컴포넌트로도 데이터를 보낸다 요약하면 App.js의 expenses.date는 ExpenseDate까지 넘어갔고, 그걸 다시 ExpenseItem으로 넘긴 듯. 그게 props의 동작 방식이다
  // props : 한 컴포넌트에서 다른 컴포넌트로 직접 데이터를 옮길 수 있음
};

export default App;
