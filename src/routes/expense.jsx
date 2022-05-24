import { useParams } from "react-router-dom";
import { getExpense } from "../expdata";

export default function Expense() {
  let params = useParams();
  let expense = getExpense(parseInt(params.expenseId, 10));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Expense: {params.expenseId}</h2>
      <h4>Total Due: {expense.amount}</h4>
      <p>
        {expense.name}: {expense.number}
      </p>
      <p>Due Date: {expense.due}</p>
    </main>
  );
}
