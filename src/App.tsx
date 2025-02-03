import AddFriend from "./AddFriend";
import "./App.css";
import Friends from "./Friends";
import Split from "./Split";
import AddFriendButtonShow from "./AddFriendButtonShow";
import { useState } from "react";
import type { Friend } from "./types";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  // State for the Users
  const [friends, setFriends] = useState<Friend[]>(initialFriends);

  // State for the AddFriend component
  const [addFriendShown, setAddFriendShown] = useState(false);

  const showAddFriend = function (showAddFriend: boolean) {
    setAddFriendShown(showAddFriend);
  };

  const addFriend = (user: Friend) => {
    setFriends((friends) => [...friends, user]);
    showAddFriend(false);
  };

  const updateBalance = (id: Friend["id"], balance: number) => {
    setFriends((friends) =>
      friends.map((friend) => {
        if (friend.id === id) {
          return { ...friend, balance };
        }
        return friend;
      })
    );
  };

  // State for the Friends component
  const [selected, setSelected] = useState<null | Friend["id"]>(null);

  const selectedUser = friends.find((friend) => friend.id === selected);

  // Split component State
  const [splitShown, setSplitShown] = useState(false);

  const showSplit = function (showSplit: boolean) {
    setSplitShown(showSplit);
  };

  return (
    <div className="App">
      <div className="left-section">
        <Friends
          onSetSelected={setSelected}
          onOpenSplit={showSplit}
          friends={friends}
          selectedFriend={selectedUser}
          splitShown={splitShown}
        />
        {!addFriendShown && (
          <AddFriendButtonShow onShowAddFriend={showAddFriend} />
        )}
        {addFriendShown && (
          <AddFriend onAddFriend={addFriend} onCloseAddFriend={showAddFriend} />
        )}
      </div>
      {splitShown && (
        <Split
          user={selectedUser}
          onCloseSplit={showSplit}
          onUpdateBalance={updateBalance}
          onSetSelected={setSelected}
        />
      )}
    </div>
  );
}
