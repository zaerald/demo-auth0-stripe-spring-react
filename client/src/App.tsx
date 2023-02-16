import { useEffect, useState } from "react";
import "./App.css";
import { useUserInfo } from "./hooks/useUserInfo";

type Message = {
  content: string;
};

function App() {
  const [message, setMessage] = useState("");

  const [privateMessage, setPrivateMessage] = useState("");

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

  return (
    <div>
      <h1>Public Page</h1>

      {!isAuthenticated && (
        <a
          href={`${
            import.meta.env.VITE_BASE_API_URL
          }/oauth2/authorization/auth0`}
        >
          Login
        </a>
      )}

      <p>Message: {message}</p>
      <p>Private Message: {privateMessage ?? "None"}</p>

      {isAuthenticated ? <p>Email: {userInfo?.email}</p> : <p>Guest</p>}

      <a href="/member">Go to member page</a>
    </div>
  );
}

export default App;
