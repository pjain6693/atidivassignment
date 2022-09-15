import { useState } from "react";
const UserList = (props) => {
  const [currentValue, setCurrentValue] = useState(props.userList[0].team);

  const dropdownValueChangeHandler = (event) => {
    setCurrentValue(event.target.value);
    alert(event.target.value);
  };

  
  return (
    <div>
      <select value={currentValue} onChange={dropdownValueChangeHandler}>
        {props.userList.map((item) => (
          <option key={item.id} value={item.team}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default UserList;
