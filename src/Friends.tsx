import type { Friend } from "./types";

type FriendsProps = {
  onSetSelected: (id: Friend["id"] | null) => void;
  friends: Friend[];
  onOpenSplit: (isShown: boolean) => void;
  selectedFriend: Friend | undefined;
  splitShown: boolean;
};

export default function Friends({
  onSetSelected,
  friends,
  onOpenSplit,
  selectedFriend,
  splitShown,
}: FriendsProps) {
  return (
    <ul className="container friends">
      {friends.map((friend) => {
        const isSelected = selectedFriend?.id === friend.id;
        return (
          <Friend
            key={friend.id}
            {...friend}
            setSelected={onSetSelected}
            onOpenSplit={onOpenSplit}
            splitShown={splitShown}
            isSelected={isSelected}
          />
        );
      })}
    </ul>
  );
}
type FriendProps = Friend & {
  setSelected: (id: Friend["id"] | null) => void;
  onOpenSplit: (isShown: boolean) => void;
  isSelected: boolean;
  splitShown: boolean;
};

function Friend({
  id,
  image,
  name,
  balance,
  setSelected,
  onOpenSplit,
  splitShown,
  isSelected,
}: FriendProps) {
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
          if (isSelected) {
            setSelected(null);
            onOpenSplit(false);
          }

          if (!isSelected) {
            setSelected(id);
            onOpenSplit(true);
          }
        }}
      >
        {isSelected && splitShown ? "Close" : "Select"}
      </button>
    </li>
  );
}
