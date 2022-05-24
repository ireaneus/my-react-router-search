let expenses = [
  {
    name: "Santa Monica",
    number: 2022,
    amount: "$1,089",
    due: "12/05/1995"
  },
  {
    name: "Stankonia",
    number: 2001,
    amount: "$12,003",
    due: "10/31/2000"
  },
  {
    name: "Ocean Avenue",
    number: 2012,
    amount: "$2,887",
    due: "07/22/2003"
  },
  {
    name: "Tubthumper",
    number: 2021,
    amount: "$200",
    due: "09/01/1997"
  },
  {
    name: "Wide Open Spaces",
    number: 1985,
    amount: "$5",
    due: "01/27/1998"
  }
];

export function getExpenses() {
  return expenses;
}

export function getExpense(number) {
  return expenses.find((expense) => expense.number === number);
}
