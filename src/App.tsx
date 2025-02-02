import  AddFriend  from "./AddFriend";
import "./App.css";
import Friends from "./Friends";
import Split from "./Split";

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
