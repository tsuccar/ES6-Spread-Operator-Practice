import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);
  function handleChange(event) {
    const newItem = event.target.value;
    console.log(newItem);
    setItem(newItem);
  }

  function handleClick() {
    setList((preValue) => {
      console.log(preValue);
      console.log(item);
      return [...preValue, item];
    });
    // event.preventDefault()   just incase needed later with form
    setItem(""); // just to clear previous text in the imput
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input value={item} onChange={handleChange} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((listItem) => (
            <li>{listItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
