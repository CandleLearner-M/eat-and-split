import type { Friend } from "./types";

type FriendsProps = {
  onSetSelected: (id: Friend['id']) => void;
  friends:Friend[];
};

export default function Friends({ onSetSelected, friends }: FriendsProps) {
  return (
    <ul className="container friends">
      {friends.map((friend) => (
        <Friend key={friend.id} {...friend} setSelected={onSetSelected} />
      ))}
    </ul>
  );
}
type FriendProps = Friend & {
  setSelected: (id: Friend['id']) => void;
};

function Friend({ id, image, name, balance, setSelected }: FriendProps) {
  return (
    <li className="friend">
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
          console.log(id);
          setSelected(id);
        }}
      >
        Select
      </button>
    </li>
  );
}
