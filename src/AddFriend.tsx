import { useState } from "react";
import type { Friend } from "./types";

type AddFriendProps = {
  onAddFriend: (user: Friend) => void;
};

export default function AddFriend({ onAddFriend }: AddFriendProps) {
  const [addFriendShown, setAddFriendShown] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      friendName: string;
      friendImage: string;
    };

    if (!data.friendName || !data.friendImage) return;

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: data.friendName,
      image: data.friendImage,
      balance: 0,
    };
    console.log(newFriend);
    onAddFriend(newFriend);

    setAddFriendShown(false);
  };

  return addFriendShown ? (
    <>
      <div className="container addFriend">
        <form onSubmit={handleSubmit}>
          <div className="add-input">
            <label htmlFor="friendName">👫 Friend's Name</label>
            <input type="text" name="friendName" id="friendName"  />
          </div>
          <div className="add-input">
            <label htmlFor="friendImage">📷 Friend's Image URL</label>
            <input
              type="text"
              name="friendImage"
              id="friendImage"
              defaultValue="https://i.pravatar.cc"
              
            />
          </div>
          <div className="add-input">
            <label></label>
            <button type="submit">Add</button>
          </div>
        </form>
      </div>

      <div className="close">
        <button onClick={() => setAddFriendShown(!addFriendShown)}>
          Close
        </button>
      </div>
    </>
  ) : (
    <div className="addFriend">
      <div className="add-input">
        <label></label>
        <button onClick={() => setAddFriendShown(!addFriendShown)}>
          Add Friend
        </button>
      </div>
    </div>
  );
}
