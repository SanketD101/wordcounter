import React, { useState } from "react";

const WordCount = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <main className="word-counter">
      <div className="word-counter_">
        <div className="heading">
          <h1>Word Counter</h1>
          <p>Free online character and word counter</p>
        </div>
        <textarea
          name=""
          id=""
          cols="70"
          rows="10"
          draggable="true"
          placeholder="Type or pest your text"
          value={text}
          onChange={handleChange}
        ></textarea>
        <div>
          <button onClick={() => setText("")}>Clear</button>
        </div>
      </div>
      <div className="btn_">
        <div>Word:{text ? text.split(" ").length : 0}</div>
        <div>Char:{text.length}</div>
      </div>
    </main>
  );
};

export default WordCount;
