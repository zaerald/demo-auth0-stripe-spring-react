import { useEffect, useState } from "react";
import "./App.css";

type Message = {
  content: string;
};

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:8080/api/hello");
      const data = await response.json();

      if ("content" in data && typeof data.content === "string") {
        const messageData = data as Message;
        setMessage(messageData.content);
      }
    })();
  }, []);

  return <div>Message: {message}</div>;
}

export default App;
