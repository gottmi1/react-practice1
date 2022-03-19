import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    // 매개변수로 enteredExpenseData를 예측함
    const expenseData = {
      ...enteredExpenseData,
      // Form에 있는 expenseData의 ket value를 추출하여 NewExpense의 expenseData에 추가함
      id: Math.random.toString(),
      // 받아온 데이터에 id를 추가할 뿐인 단순한 동작이다
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      {/* 다른 컴포넌트에서 saveExepnseDataHandler를 사용할 수 있어진다 */}
      {/* 컴포넌트 사이에서 소통하는 방법이자, 부모 컴포넌트로 소통할 수 있는 방법 */}
    </div>
  );
};

export default NewExpense;
