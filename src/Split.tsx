import { useState } from "react";
import type { Friend } from "./types";

type SplitProps = {
  user: Friend | null;
  onUpdateBalance: (id: Friend["id"], balance: number) => void;
  onSetSelected: (user: Friend | null) => void;
};

export default function Split({
  user,
  onUpdateBalance,
  onSetSelected,
}: SplitProps) {
  type InputValue = number | "";

  const [billValue, setBillValue] = useState<InputValue>("");
  const [yourExpense, setYourExpense] = useState<InputValue>("");
  const [billPayer, setBillPayer] = useState<"you" | "yourFriend">("you");

  const toNumber = (value: InputValue) =>
    typeof value === "number" ? value : 0;

  const friendExpense =
    billValue !== "" && yourExpense !== ""
      ? toNumber(billValue) - toNumber(yourExpense)
      : "";

  const isValidSplit = () => {
    return (
      billValue !== "" &&
      yourExpense !== "" &&
      toNumber(yourExpense) >= 0 &&
      user !== undefined
    );
  };

  const reset = function () {
    setBillValue("");
    setYourExpense("");
    setBillPayer("you");
    onSetSelected(null);
  };
  const handleSplitBill = () => {
    if (!isValidSplit()) return;
    const numericYourExpense = toNumber(yourExpense);
    const numericFriendExpense = toNumber(friendExpense);

    if (user) {
      const newBalance =
        billPayer === "you"
          ? user.balance + numericFriendExpense
          : user.balance - numericYourExpense;
      onUpdateBalance(user.id, newBalance);
    }

    reset();
  };

  return user ? (
    <div className="container split">
      <h2 className="split-title">Split a bill with {user.name}</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSplitBill();
        }}
      >
        <div className="split-input">
          <label htmlFor="billValue">💰 Bill value</label>
          <input
            type="number"
            name="billValue"
            id="billValue"
            value={billValue}
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
            value={yourExpense}
            onChange={(e) =>
              setYourExpense(
                +e.target.value > +billValue ? yourExpense : +e.target.value
              )
            }
          />
        </div>
        <div className="split-input">
          <label htmlFor="friendExpense">👫 {user.name}'s expense: </label>
          <input
            type="number"
            name="friendExpense"
            id="friendExpense"
            value={friendExpense}
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
          <label></label>
          <button type="submit">Split Bill</button>
        </div>
      </form>
    </div>
  ) : null;
}
