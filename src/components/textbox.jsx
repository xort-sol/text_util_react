import React from "react";
import { useState } from "react";
import { useRef } from "react";

import { ModeSwitch } from "./switch";

export default function TextForm(props) 
{
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [typingSpeed, setTypingSpeed] = useState(0);
  const typingRef = useRef(null);
  const [MyStyle, ModifiedMystyle]= useState ({color : "black", backgroundColor : "white"});
  const [modeText, setModeText] = useState("Go To light Mode");



  const handleOnChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    console.log("chaging");
    if (!startTime) {
      setStartTime(new Date().getTime());
    }

    clearTimeout(typingRef.current);

    typingRef.current = setTimeout(() => {
      if (startTime) {
        const endTime = new Date().getTime();
        const timeInSeconds = (endTime - startTime) / 1000;
        const charactersTyped = newText.length;

        const speed = charactersTyped / timeInSeconds;
        setTypingSpeed(speed);
      }
    }, 500); // Adjust this delay as needed
  };

  const handleUpClick = (event) => {
    // setText(event.target.value);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = (event) => {
    // setText(event.target.value);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClsClick =(event) =>{
    setText("");
  }

  const handleModeClick =(event)=>{
    if(MyStyle.color == "black")
    {
      ModifiedMystyle({
        color : "white",
        backgroundColor : "black"
      })
      setModeText("Convert To Light Mode");
    }
    
    else 
    {
      ModifiedMystyle({
        color : "black",
        backgroundColor : "white"
      })
      setModeText("Convert To Dark Mode");
    }
}
  
  return (
    // <div className='container'>
    < div >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="from-control container"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          row="8"
          style={{
            height: "300px",
          }}
        ></textarea>
        <br></br>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Upper Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lower Case
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClsClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" style = {MyStyle} onClick={handleModeClick}>
          {modeText}
        </button>

        <div>
          <h2>Insights</h2>
          <p>
            {text.trim() === ""
              ? "0 Words 0 Characters"
              : `${text.split(" ").length} Words ${text.length} Characters`}
          </p>
          <p>Typing Speed: {typingSpeed.toFixed(2)} characters per second</p>
        </div>
      </div>
    </div>
  );
}
