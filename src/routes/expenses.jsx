import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import { getExpenses } from "../expdata";

export default function Expenses() {
  let expenses = getExpenses();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        <input
          value={searchParams.get("filter") || ""}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {expenses
          .filter((expense) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = expense.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((expense) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : ""
                };
              }}
              to={`/expenses/${expense.number}`}
              key={expense.number}
            >
              {expense.name}
            </NavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
