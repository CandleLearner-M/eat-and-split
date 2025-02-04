import type { Friend } from "./types";

type FriendsProps = {
  onSetSelected: (user: Friend | null) => void;
  friends: Friend[];
  selectedFriend: Friend | null;
};

export default function Friends({
  onSetSelected,
  friends,
  selectedFriend,
}: FriendsProps) {
  return (
    <ul className="container friends">
      {friends.map((friend) => {
        return (
          <Friend
            key={friend.id}
            friend={friend}
            setSelected={onSetSelected}
            selectedFriend={selectedFriend}
          />
        );
      })}
    </ul>
  );
}
type FriendProps = {
  friend: Friend;
  setSelected: (user: Friend | null) => void;
  selectedFriend: Friend | null;
};

function Friend({ friend, setSelected, selectedFriend }: FriendProps) {


  const { id, image, name, balance } = friend;

  const isSelected = selectedFriend?.id === id;
  return (
    <li className={`friend ${isSelected ? "selected" : ""}`}>
      <div className="friend-info">
        <div id="friend-avatar">
          <img src={image} alt={name} />
        </div>
        <p id="friend-name">
          <span className="friend-name">{name}</span>
          {balance > 0 && (
            <span className="status green">
              {name} owes you {balance} MAD
            </span>
          )}
          {balance < 0 && (
            <span className="status red">
              You owe {name} {Math.abs(balance)} MAD
            </span>
          )}
          {balance === 0 && (
            <span className="status">You and {name} are even</span>
          )}
        </p>
      </div>

      <button
        id="friend-button"
        onClick={() => {
          if (isSelected) {
            setSelected(null);
          }

          if (!isSelected) {
            setSelected(friend);
          }
        }}
      >
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
}
