import { useState } from "react";
const UserList = (props) => {
  const [currentValue, setCurrentValue] = useState();

  const dropdownValueChangeHandler = (event) => {
    setCurrentValue(event.target.value);
  };

  alert(currentValue);
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
