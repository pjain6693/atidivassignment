import "./App.css";
import UserList from "./Components/UserList";

function App() {
  const userList = [
    {
      id: 1,
      name: "Pooja",
      team: "DE",
    },
    {
      id: 2,
      name: "Vaishali",
      team: "Management",
    },
    {
      id: 3,
      name: "Vidhya",
      team: "HR",
    },
    {
      id: 4,
      name: "Raj",
      team: "Accounts",
    },
  ];
  return (
    <div className="App">
      <UserList userList={userList} />
    </div>
  );
}

export default App;
