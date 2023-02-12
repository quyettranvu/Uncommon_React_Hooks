import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./Form";
import { useEffect, useRef } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  const myRef = useRef(); //holds behaviour to Dom and value

  useEffect(() => {
    //available access to function in child component
    //myRef.current.test();
    const user = myRef.current.test();
    console.log({ user });
  });

  const res = useFetch("https://reqres.in/api/users/2");
  console.log({ res });

  return (
    <>
      <h3>Demo Learning Application</h3>
      <Form ref={myRef} />
      <button onClick={() => myRef.current.submitForm()}>
        Login from Parent Components
      </button>
    </>
  );
}

export default App;
