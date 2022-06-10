import React, { useState, useEffect } from "react";
import "../App.css";
import { db } from "../firebase";
import validator from 'validator'; 



const Contact = () => {

  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[error,setError]=useState("");
  const[mobile,setmobile]=useState("");
  const[subject,setSubject]=useState("");
  const[message,setMessage]=useState(""); 
  const [isError,setIsError]=useState(false); 
  const [emailError,setEmailError]=useState(false);
  const checkEmail=(e)=>{
  var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Please Enter valid Email!')
    } 
    
}

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name:name,
        email:email,
        mobile:mobile,
        subject:subject,
        message:message,
      })
      
      .then(() => {
        setLoader(false);
        alert("Your detail has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

      setName("");
      setEmail("");
      setmobile("");
      setSubject("");
      setMessage("");

       e.target.reset();
  };
  
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>
      <label>Name</label>
       <input 
        placeholder='Name'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        required />

       <label>E-mail</label> 
       {emailError}
       <input 
        type="text" placeholder='E-mail id' 
         onChange={(e)=>checkEmail(e)}
       required /> 
       
         <label>Mobile Number</label>
         <input
        type="number"
        placeholder="Mobile Number"
        error={isError}
        value={mobile}
        label="Enter Phone Number"
        onChange={(e) => {
          setmobile(e.target.value);
          if (e.target.value.length > 10) {
            setIsError(true);
          }
        }}
      />

       <label>Subject</label>
       <input
        placeholder='Subject'
        value={subject}
        onChange={(e)=>setSubject(e.target.value)}
         required />
       
       <label>Message</label>
       <textarea
        placeholder='Message'
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
       required ></textarea>
      
      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
    
};

export default Contact;


