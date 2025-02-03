import { useState } from "react";

type SplitProps = {
  user:
    | {
        id: number;
        name: string;
        image: string;
        balance: number;
      }
    | undefined;
    onUpdateBalance: (id: number, balance: number) => void
};

export default function Split({ user, onUpdateBalance }: SplitProps) {

  const [billValue, setBillValue] = useState<null | number>(null);
  const [yourExpense, setYourExpense] = useState<null | number>(null);

  const friendExpense = billValue && yourExpense && billValue - yourExpense;

  const [billPayer, setBillPayer] = useState<"you" | "yourFriend">("you");

  const addingBalanceValidation =
    billValue && yourExpense && friendExpense && yourExpense > 0 && user;
  const setBlance = function () {
    if (addingBalanceValidation && billPayer === "you") {
      user.balance -= friendExpense;
    } else if (addingBalanceValidation && billPayer === "yourFriend") {
      user.balance += yourExpense;
    }
  };

  const reset = function () {
    setBillValue(null);
    setYourExpense(null);
    setBillPayer("you");
  }

  return user  ? (
    <div className="container split">
      <h2 className="split-title">Split a bill with {user.name}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setBlance();
          onUpdateBalance(user.id, user.balance);
          reset();
        }}
      >
        <div className="split-input">
          <label htmlFor="billValue">💰 Bill value</label>
          <input
            type="number"
            name="billValue"
            id="billValue"
            value={billValue ?? ""}
            onChange={(e) => setBillValue(+e.target.value)}
            required
          />
        </div>
        <div className="split-input">
          <label htmlFor="yourExpense">🕺🏻 Your expense</label>
          <input
            type="number"
            name="yourExpense"
            id="yourExpense"
            value={yourExpense ?? ""}
            onChange={(e) => setYourExpense(+e.target.value)}
          />
        </div>
        <div className="split-input">
          <label htmlFor="friendExpense">👫 {user.name}'s expense: </label>
          <input
            type="number"
            name="friendExpense"
            id="friendExpense"
            value={friendExpense ?? ""}
            disabled
          />
        </div>
        <div className="split-input">
          <label htmlFor="">🤑 Who is paying the bill? </label>
          <select
            name="billPayer"
            id="billPayer"
            value={billPayer}
            onChange={(e) =>
              setBillPayer(e.target.value as "you" | "yourFriend")
            }
          >
            <option value="you">You</option>
            <option value="yourFriend">Your Friend</option>
          </select>
        </div>
        <div className="split-input">
          <label htmlFor=""></label>
          <button type="submit">Split Bill</button>
        </div>
      </form>
    </div>
  ) : null;
}
