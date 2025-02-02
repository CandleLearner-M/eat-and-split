export default function AddFriend() {
  return (
    <div className="container addFriend">
      <form action="POST">
        <div className="add-input">
          <label htmlFor="friendName">👫 Friend's Name</label>
          <input type="text" name="friendName" id="friendName" />
        </div>
        <div className="add-input">
          <label htmlFor="friendImage">📷 Friend's Image URL</label>
          <input type="email" name="friendImage" id="friendImage" />
        </div>
        <div className="add-input">
          <label></label>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
