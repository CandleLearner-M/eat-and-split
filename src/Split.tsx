

export default function Split({splitShown, onToggleSplit} : {splitShown: boolean, onToggleSplit: () => void}) {
  

  return splitShown ? (
    <div className="container split">
      <h2 className="split-title">Split a bill with X</h2>
      <form>
        <div className="split-input">
          <label htmlFor="billValue">💰 Bill value</label>
          <input type="number" name="billValue" id="billValue" required />
        </div>
        <div className="split-input">
          <label htmlFor="yourExpense">🕺🏻 Your expense</label>
          <input type="number" name="yourExpense" id="yourExpense" />
        </div>
        <div className="split-input">
          <label htmlFor="friendExpense">👫 Sarah's expense: </label>
          <input
            type="number"
            name="friendExpense"
            id="friendExpense"
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
          <button type="submit" onClick={onToggleSplit}>Split Bill</button>
        </div>
      </form>
    </div>
  ) : null;
}
