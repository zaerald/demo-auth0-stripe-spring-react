import { useEffect, useState } from "react";
import "./App.css";
import { AuthAction } from "./components/AuthAction";
import { useUserInfo } from "./hooks/useUserInfo";

export type Message = {
  content: string;
};

function App() {
  const [message, setMessage] = useState<string>();

  const [privateMessage, setPrivateMessage] = useState<string>();

  const { userInfo, isAuthenticated } = useUserInfo();

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

  const onSubscribeHandler = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API_URL}/api/subscription/subscribe`,
      {
        method: "POST",
        credentials: "include",
      }
    );
    const data = await response.json();

    console.log({data})
  };

  return (
    <div>
      <h1>Public Page</h1>
      <AuthAction isAuthenticated={isAuthenticated} />

      <br />

      <p>Message: {message}</p>
      {privateMessage && <p>Private Message: {privateMessage}</p>}

      {isAuthenticated ? <p>Email: {userInfo?.email}</p> : <h3>GUEST</h3>}

      {isAuthenticated && (
        <>
          <button onClick={onSubscribeHandler}>Subscribe</button>
          <br />
          <br />
        </>
      )}

      <a href="/member">Go to member page</a>
    </div>
  );
}

export default App;
