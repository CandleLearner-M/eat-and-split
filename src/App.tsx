import AddFriend from "./AddFriend";
import "./App.css";
import Friends from "./Friends";
import Split from "./Split";
import { useState } from "react";

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
  const [friends, setFriends] = useState(initialFriends);

  const addFriend = (user: {
    id: number;
    name: string;
    image: string;
    balance: number;
  }) => {
    setFriends([...friends, user]);
  };

  const updateBalance = (id: number, balance: number) => {
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
  const [selected, setSelected] = useState<null | number>(null);

  const selectedUser = friends.find((friend) => friend.id === selected);

  return (
    <div className="App">
      <div className="left-section">
        <Friends onSetSelected={setSelected} friends={friends} />
        <AddFriend onAddFriend={addFriend} />
      </div>
      <Split user={selectedUser} onUpdateBalance={updateBalance} />
    </div>
  );
}
