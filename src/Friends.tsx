export default function Friends() {
  return (
    <div className="container friends">
      <Friend />
      <Friend />
      <Friend />
    </div>
  );
}
function Friend() {
  return (
    <div className="friend">
      <div className="friend-info">
        <div id="friend-avatar">
          <img
            src="https://avatars.githubusercontent.com/u/154463223?s=400&u=aac3c8b9a836664a509cfa74aa9c1b7c19549cd1&v=4"
            alt="Mostafa"
          />
        </div>
        <p id="friend-name">
          <span className="friend-name">Mostafa El Issati</span>
          <span className="status">You owe Mostafa 76DH</span>
        </p>
      </div>
      <button id="friend-button">Select</button>
    </div>
  );
}
