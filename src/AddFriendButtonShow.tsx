type AddFriendButtonShowProps = {
  onShowAddFriend: (showAddFriend: boolean) => void;
}

export default function AddFriendButtonShow({ onShowAddFriend }: AddFriendButtonShowProps) {
  return (
    <div className="addFriend">
      <div className="add-input">
        <label></label>
        <button onClick={() => onShowAddFriend(true)}>
          Add Friend
        </button>
      </div>
    </div>
  );
}
