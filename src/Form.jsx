import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";

function Form(props, ref) {
  const [userInfo, setUserInfo] = useState({
    username: "quyettranvu",
    password: "13112000Nhatrang",
  });

  const [username, setUsername] = useState(userInfo.username);
  const [password, setPassword] = useState(userInfo.password);
  const [errorMessage, setErrorMessage] = useState("");

  //Handle on changes
  //   const updateUserName = (username) => {
  //     setUserInfo((prevState) => ({
  //       ...prevState,
  //       username: username,
  //     }));
  //   };

  //   const updateUserPassword = (password) => {
  //     setUserInfo((prevState) => ({
  //       ...prevState,
  //       password: password,
  //     }));
  //   };

  //Only calls to this when both username and password not passed
  const memorizedErrorMessage = useMemo(() => {
    if (!username || !password) {
      alert("Please enter a username or password!");
    } else {
      return "";
    }
  }, [username, password]);

  //Handle Submit(only recreated only if memorizedErrorMessage is changed)
  const handleSubmit = useCallback(() => {
    console.log("App re-rendered");
    if (!memorizedErrorMessage) {
      setUserInfo({
        username: username,
        password: password,
      });
      alert("Submitted");
    } else {
      setErrorMessage(memorizedErrorMessage);
    }
  }, [memorizedErrorMessage]);

  console.log({ ref });

  //Allow to pass props to father component
  useImperativeHandle(ref, () => {
    return {
      test: () => {
        return userInfo;
      },
      submitForm: handleSubmit,
    };
  });
  return (
    <div>
      <h4>Login Form</h4>
      <form>
        <label htmlFor="user-name">USER NAME</label>
        <input
          id="user-name"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label htmlFor="password">PASSWORD</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}

export default forwardRef(Form);
