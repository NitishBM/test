import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success")
  };

  const handleLwClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success")
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Text has been cleared", "success")
  };

  const handleCopyClick = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success")
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra space Removed!", "success")
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  

  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color : props.mode === 'light' ? '#161623' : 'white'}}>
      <h1>{props.heading}</h1>

      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode === 'dark' ? '#161623' : 'white', color : props.mode === 'dark' ? 'white' : '#161623'}}></textarea>
      </div>

      <button className="btn btn-primary btn-sm mx-1" onClick={handleUpClick}>
        Convert UpperCase
      </button>

      <button className="btn btn-primary btn-sm mx-1" onClick={handleLwClick}>
        Convert LowerCase
      </button>

      <button className="btn btn-primary btn-sm mx-1" onClick={handleClearClick}>
        Clear Text
      </button>

      <button className="btn btn-primary btn-sm mx-1" onClick={handleCopyClick}>
        Copy Text
      </button>

      <button className="btn btn-primary btn-sm mx-1" onClick={handleExtraSpace}>
        Remove Extra Space
      </button>

    </div>

    <div className="container my-4" style={{color : props.mode === 'light' ? '#161623' : 'white'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>

    </>
  );
}
