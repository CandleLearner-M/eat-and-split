export default function Split() {
  return (
    <div className="container split">
      <h2 className="split-title">Split a bill with X</h2>
      <form action="POST">
        <div className="split-input">
          <label htmlFor="billValue">💰 Bill value</label>
          <input type="text" name="billValue" id="billValue" />
        </div>
        <div className="split-input">
          <label htmlFor="yourExpense">🕺🏻 Your expense</label>
          <input type="text" name="yourExpense" id="yourExpense" />
        </div>
        <div className="split-input">
          <label htmlFor="friendExpense">👫 Sarah's expense: </label>
          <input type="text" name="friendExpense" id="friendExpense" />
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
  );
}
