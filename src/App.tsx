import "./App.css";
import  Split from "./Split";

export default function App() {
  return (
    <div className="App">
      <div className="left-section">
        <Friends />
        <AddFriend />
      </div>
      <Split />
    </div>
  );
}

function Friends() {
  return <div className="container friends">
    <Friend />
    <Friend />
    <Friend />
  </div>;
}

function Friend () {
  return <div className="friend">
    <div id="friend-avatar">
      <img src="" alt="" />
    </div>
    <div id="friend-name">a</div>
    <button id="friend-button">Select</button>
  </div>
}

function AddFriend() {
  return <div className="container addFriend"></div>;
}
