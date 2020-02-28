import ReactDOM from "react-dom";
import React from "react";
import "./styl.css";

function App() {
  return (
    <div className="container">
      <div className="ekran" />
      <div className="przyciski">
        <div>
          <button>Power</button>
          <button>%</button>
          <button>C</button>
          <button>delete</button>
        </div>
        <div>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>/</button>
        </div>
        <div>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>*</button>
        </div>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
        </div>
        <div>
          <button>0</button>
          <button>.</button>
          <button>=</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
