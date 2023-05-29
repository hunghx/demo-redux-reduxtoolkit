import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSlice } from "../redux/reducer";


export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const dispatch = useDispatch();
  const [status, setStatus] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(status){
    dispatch(userSlice.actions.login({ username, password }));
    }else{
        dispatch(userSlice.actions.register({ username, password ,fullname}));
        setStatus(true)
        setUsername("")
        setPassword("")
    }
  };
  return (
    <>
      {status ? (
        <form onSubmit={(e) => handleSubmit(e)} style={{ padding: "30px" }}>
          <h2>Login</h2>
          <table
            border={1}
            cellPadding={5}
            cellSpacing={0}
            style={{ width: "60%", margin: "0 auto" }}
          >
            <tr>
              <th>Username</th>
              <td>
                <input
                  type="text"
                  placeholder="username..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <input
                  type="password"
                  placeholder="password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type="submit">login</button>
              </td>
            </tr>
          </table>
          <a onClick={e=>setStatus(false)}>register</a>
        </form>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)} style={{ padding: "30px" }}>
          <h2>Register</h2>
          <table
            border={1}
            cellPadding={5}
            cellSpacing={0}
            style={{ width: "60%", margin: "0 auto" }}
          >
            <tr>
              <th>Username</th>
              <td>
                <input
                  type="text"
                  placeholder="username..."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>Password</th>
              <td>
                <input
                  type="password"
                  placeholder="password..."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <th>FullName</th>
              <td>
                <input
                  type="text"
                  placeholder="fullname..."
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type="submit">Register</button>
              </td>
            </tr>
          </table>
          <a onClick={e=>setStatus(true)}>login</a>
        </form>
      )}
    </>
  );
};
