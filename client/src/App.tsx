import { useEffect, useState } from "react";
import "./App.css";

type Message = {
  content: string;
};

type UserInfo = {
  username: string;
  email: string;
  pictureUrl: string;
};

function App() {
  const [message, setMessage] = useState("");

  const [privateMessage, setPrivateMessage] = useState("");

  const [userInfo, setUserInfo] = useState<UserInfo>();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/api/message/public`
      );
      const data = await response.json();

      if ("content" in data && typeof data.content === "string") {
        const messageData = data as Message;
        setMessage(messageData.content);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/api/message/private`,
        {
          credentials: "include",
        }
      );
      const data = await response.json();

      if ("content" in data && typeof data.content === "string") {
        const messageData = data as Message;
        setPrivateMessage(messageData.content);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/api/user`,
        {
          credentials: "include",
        }
      );
      const data = await response.json();

      if ("username" in data && typeof data.username === "string") {
        const userData = data as UserInfo;
        setUserInfo(userData);
      }
    })();
  }, []);

  return (
    <div>
      <h1>Public Page</h1>
      <a
        href={`${import.meta.env.VITE_BASE_API_URL}/oauth2/authorization/auth0`}
      >
        Login
      </a>
      <p>Message: {message}</p>
      <p>Private Message: {privateMessage ?? "None"}</p>

      Email: {userInfo?.email}
    </div>
  );
}

export default App;
