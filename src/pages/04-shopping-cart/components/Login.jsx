import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';
import { useUser } from '../contexts/UserContext';

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const { currentUser, setCurrentUser } = useUser();

  const [storedUsers, setStoredUsers] = useLocalStorage('users', {});

  if (currentUser.id) {
    return <Redirect to="/04" />;
  }

  const signup = () => {
    if (!userId || !password || !email) {
      alert('不可留空');
      return;
    }

    setStoredUsers((storedUsers) => {
      storedUsers[userId] = {
        id: userId,
        password,
        email,
      };
      return storedUsers;
    });

    setIsLogin(true);
  };

  const signin = () => {
    if (!userId || !password) {
      alert('不可留空');
      return;
    }

    if (!storedUsers[userId] || storedUsers[userId].password !== password) {
      alert('帳號或密碼有誤');
      return;
    }

    setCurrentUser(storedUsers[userId]);
  };

  return (
    <LoginContainer>
      {isLogin ? (
        <>
          <div>
            <label htmlFor="userId">User ID</label>
            <br />
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(event) => setUserId(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <button onClick={signin}>登入</button>
          <p className="switch">
            沒有帳戶？ <span onClick={() => setIsLogin(!isLogin)}>註冊</span>
          </p>
        </>
      ) : (
        <>
          <div>
            <label htmlFor="userId">User ID</label>
            <br />
            <input
              type="text"
              id="userId"
              value={userId}
              onChange={(event) => setUserId(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <button onClick={signup}>註冊</button>
          <p className="switch">
            已有帳戶？ <span onClick={() => setIsLogin(!isLogin)}>登入</span>
          </p>
        </>
      )}
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  width: 400px;
  margin: 0 auto;
  padding-top: 50px;

  div {
    margin: 15px 0;
  }

  label {
    font-size: 18px;
  }

  input {
    margin-top: 10px;
    height: 35px;
    width: 400px;
    font-size: 16px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid #777;
  }

  button {
    display: block;
    width: 100px;
    height: 40px;
    font-size: 18px;
    color: #555;
    margin-top: 30px;
    border-radius: 5px;
    border: 1px solid #777;
    background-color: #f7f7f7;
    letter-spacing: 1px;

    &:hover {
      color: #333;
      background-color: #fff;
    }
  }

  .switch {
    margin-top: 30px;

    span {
      padding-bottom: 3px;
      border-bottom: 1px solid #333;
      cursor: pointer;

      &:hover {
        color: #aaa;
        border-color: #aaa;
      }
    }
  }
`;
