import { useState } from "react";

type SplitProps ={ user: {
  id: number;
  name: string;
  image: string;
  balance: number;
} | undefined}


export default function Split({user} : SplitProps) {
  const [billValue, setBillValue] = useState<null | number>(null);
  const [yourExpense, setYourExpense] = useState<null | number>(null);

  const friendExpense = billValue && yourExpense && billValue - yourExpense;

  return user ? (
    <div className="container split">
      <h2 className="split-title">Split a bill with {user.name}</h2>
      <form>
        <div className="split-input">
          <label htmlFor="billValue">💰 Bill value</label>
          <input type="number" name="billValue" id="billValue" value={billValue ?? ''} onChange={(e) => setBillValue(+e.target.value)} required />
        </div>
        <div className="split-input">
          <label htmlFor="yourExpense">🕺🏻 Your expense</label>
          <input type="number" name="yourExpense" id="yourExpense" value={yourExpense ?? ''} onChange={(e) => setYourExpense(+e.target.value)} />
        </div>
        <div className="split-input">
          <label htmlFor="friendExpense">👫 {user.name}'s expense: </label>
          <input
            type="number"
            name="friendExpense"
            id="friendExpense"
            value={friendExpense ?? ''}
            disabled
          />
        </div>
        <div className="split-input">
          <label htmlFor="">🤑 Who is paying the bill? </label>
          <select name="billPayer" id="billPayer">
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
