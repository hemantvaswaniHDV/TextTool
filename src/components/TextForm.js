import { useState } from "react";

export default function TextForm(pro) {
  const [text, setText] = useState("");
  const enterText = (e) => {
    setText(e.target.value);
  };
  const handleUpClick = () => {
    setText(text.toUpperCase());
    pro.alert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    setText(text.toLowerCase());
    pro.alert("Converted to lowercase", "success");
  };
  const handleClearClick = () => {
    setText("");
    pro.alert("Text cleared", "success");
  };
  const copyText = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    pro.alert("Copied to clipboard", "success");
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    pro.alert("Extra spaces removed successfully", "success");
  };

  return (
    <>
      <div
        className={`container text-${pro.mode === "light" ? "dark" : "light"}`}
      >
        <h1 className={`text-${pro.mode === "light" ? "dark" : "light"}`}>
          {pro.title}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={enterText}
            style={{
              backgroundColor: pro.mode === "light" ? "white" : "#303235",
              color: pro.mode === "light" ? "black" : "white",
            }}
            value={text}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear text
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={copyText}>
          Copy Text
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div
        className={`container my-2 text-${
          pro.mode === "light" ? "dark" : "light"
        }`}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ")[text.split(" ").length - 1] === ""
            ? text.split(" ").length - 1
            : text.split(" ").length}{" "}
          words and {text.length} characters
        </p>
        <p>
          {text.split(" ")[text.split(" ").length - 1] === ""
            ? (text.split(" ").length - 1) * 0.008
            : 0.008 * text.split(" ").length}{" "}
          Minutes read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in th text area above to preview it"}
        </p>
      </div>
    </>
  );
}
