import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    // 매개변수로 enteredExpenseData를 예측함
    const expenseData = {
      ...enteredExpenseData,
      // Form에 있는 expenseData의 ket value를 추출하여 NewExpense의 expenseData에 추가함
      id: Math.random().toString(),
      // 받아온 데이터에 id를 추가할 뿐인 단순한 동작이다
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const veiwForm = () => {
    setIsEditing(true);
  };
  const cancleAddExpense = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={veiwForm}>새지출 추가</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancleAddExpense}
        />
      )}
      {/* 다른 컴포넌트에서 saveExepnseDataHandler를 사용할 수 있어진다 */}
      {/* 컴포넌트 사이에서 소통하는 방법이자, 부모 컴포넌트로 소통할 수 있는 방법 */}
    </div>
  );
};

export default NewExpense;
