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

export default function Friends({onSelectFriend}: {onSelectFriend: () => void}) {
  return (
    <ul className="container friends">
      {initialFriends.map((friend) => (
        <Friend key={friend.id} {...friend} onSelectFriend={onSelectFriend} />
      ))}
    </ul>
  );
}
type FriendProps = {
  id?: number;
  name: string;
  image: string;
  balance: number;
  onSelectFriend: () => void;
};

function Friend({ image, name, balance, onSelectFriend} : FriendProps) {

  const [selected, setSelected] = useState(false);
  return (
    <li className="friend">
      <div className="friend-info">
        <div id="friend-avatar">
          <img src={image} alt={name} />
        </div>
        <p id="friend-name">
          <span className="friend-name">{name}</span>
          <span className="status">
            You owe {name} {balance}
          </span>
        </p>
      </div>
      <button id="friend-button" onClick={onSelectFriend}>Select</button>
    </li>
  );
}
