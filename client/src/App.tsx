import { useEffect, useState } from "react";
import "./App.css";

type Message = {
  content: string;
};

function App() {
  const [message, setMessage] = useState("");

  const [privateMessage, setPrivateMessage] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/public`);
      const data = await response.json();

      if ("content" in data && typeof data.content === "string") {
        const messageData = data as Message;
        setMessage(messageData.content);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${import.meta.env.VITE_BASE_API_URL}/api/private`, {
        credentials: "include",
      });
      const data = await response.json();

      if ("content" in data && typeof data.content === "string") {
        const messageData = data as Message;
        setPrivateMessage(messageData.content);
      }
    })();
  }, []);

  return (
    <div>
      <a href={`${import.meta.env.VITE_BASE_API_URL}/oauth2/authorization/auth0`}>Login</a>
      <p>Message: {message}</p>
      <p>Private Message: {privateMessage ?? "None"}</p>
    </div>
  );
}

export default App;
