import React, { useRef } from "react";

const UseRefHook = () => {
  const inputNameRef = useRef(null);
  const inputEmailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  let array = [];

  const sendData = () => {
    array.push({
      name: inputNameRef.current.value,
      email: inputEmailRef.current.value,
      password: inputPasswordRef.current.value,
    });

    inputNameRef.current.value = "";
    inputEmailRef.current.value = "";
    inputPasswordRef.current.value = "";

    console.log(array);
  };

  return (
    <div>
      <h1>Personal details</h1>
      <div>
        <label>Name: </label>
        <input type="text" placeholder="Your name" ref={inputNameRef} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" placeholder="Your email" ref={inputEmailRef} />
      </div>
      <div>
        <label>Password: </label>
        <input
          type="password"
          placeholder="Your password"
          ref={inputPasswordRef}
        />
      </div>
      <button onClick={sendData}>Send</button>
    </div>
  );
};

export default UseRefHook;
