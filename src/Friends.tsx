import type { Friend } from "./types";
import { useState } from "react";

type FriendsProps = {
  onSetSelected: (id: Friend["id"]) => void;
  friends: Friend[];
  onOpenSplit: (isShown: boolean) => void;
};

export default function Friends({
  onSetSelected,
  friends,
  onOpenSplit,
}: FriendsProps) {
  return (
    <ul className="container friends">
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          {...friend}
          setSelected={onSetSelected}
          onOpenSplit={onOpenSplit}
        />
      ))}
    </ul>
  );
}
type FriendProps = Friend & {
  setSelected: (id: Friend["id"]) => void;
  onOpenSplit: (isShown: boolean) => void;
};

function Friend({
  id,
  image,
  name,
  balance,
  setSelected,
  onOpenSplit,
}: FriendProps) {
  const [currentFriendIsSplitShown, setCurrentFriendIsSplitShown] =
    useState(false);
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
      {currentFriendIsSplitShown && (
        <button
          id="friend-button"
          onClick={() => {
            onOpenSplit(false);
            setCurrentFriendIsSplitShown(false);
          }}
        >
          Close
        </button>
      )}

      {!currentFriendIsSplitShown && (
        <button
          id="friend-button"
          onClick={() => {
            setSelected(id);
            onOpenSplit(true);
            setCurrentFriendIsSplitShown(true);
          }}
        >
          Select
        </button>
      )}
    </li>
  );
}
