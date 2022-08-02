import { useState } from "react";
import "./ToDoList.css";

const ToDoList = () => {
  const [items, setItem] = useState([
    // { id: 1, text: "아침에 사과 먹기" },
    // { id: 2, text: "운동하기" },
    // { id: 3, text: "리액트 공부하기" },
  ]);
  const [inputTxt, setInput] = useState("");
  const [newId, setNewId] = useState(4);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onClick = () => {
    const newItems = items.concat({
      id: newId,
      text: inputTxt,
    });
    setNewId(newId + 1);
    setItem(newItems);
    setInput("");
  };

  const onPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  const onRemove = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItem(newItems);
  };

  const mkList = items.map((item) => (
    <li className="itemList" key={item.id}>
      {item.text}
      <button className="rmNextItem" onClick={() => onRemove(item.id)}>
        ❌
      </button>
    </li>
  ));

  return (
    <div className="mainDiv">
      <div className="clock">시계</div>

      <div className="inputDiv">
        <input
          className="inputTag"
          value={inputTxt}
          onChange={onChange}
          onKeyPress={onPress}
          placeholder="할 일을 입력하세요."
        />
        <button className="addBt" onClick={onClick}>
          추가
        </button>
      </div>
      <div>
        <ul>{mkList}</ul>
      </div>
    </div>
  );
};

export default ToDoList;
