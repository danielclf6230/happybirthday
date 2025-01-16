import { useState } from "react";
import "./styles.css";

export function HappyBirthday({ onSubmit }) {
  const [newItem, setNewItem] = useState("");
  const [clickedIndices, setClickedIndices] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleButtonClick(index) {
    setClickedIndices([...clickedIndices, index]);
  }

  function getAge(year, index) {
    const baseAge = 17;
    const birthYear = parseInt(year.substr(0, 4));
    return baseAge + index;
  }

  const dates = [
    "2014/9/16", "2015/9/16", "2016/9/16", "2017/9/16",
    "2018/9/16", "2019/9/16", "2020/9/16", "2021/9/16",
    "2022/9/16", "2023/9/16", "2024/9/16"
  ];

  const colors = [
    "#ffcccc", "#cceeff", "#ccffcc", "#e0ccff", "#ffd8b1",
    "#b3e6e6", "#d4a59a", "#ffcce6", "#e6ffcc", "#ccffff", "#ffccff"
  ];

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <h2>補祝生日</h2>
      <div className="form-row">
        {dates.map((date, index) => (
          <div className="date-row" key={index}>
            <span>{date}:</span>
            {clickedIndices.includes(index) ? (
              <span className="happy-birthday" style={{ color: colors[index % colors.length] }}>
                {getAge(date, index)}歲生日快樂🎂
              </span>
            ) : (
              <button
                type="button"
                className="btn"
                onClick={() => handleButtonClick(index)}
              >
                Press me
              </button>
            )}
          </div>
        ))}
      </div>
    </form>
  );
}
