import  AddFriend  from "./AddFriend";
import "./App.css";
import Friends from "./Friends";
import Split from "./Split";
import { useState } from "react";

export default function App() {

  // State for the Split component
  const [splitShown, setSplitShown] = useState(true);

  const toggleSplit = function () {
    setSplitShown(!splitShown);
  }


  return (
    <div className="App">
      <div className="left-section">
        <Friends onSelectFriend={toggleSplit} />
        <AddFriend />
      </div>
      <Split splitShown={splitShown} onToggleSplit={toggleSplit} />
    </div>
  );
}
