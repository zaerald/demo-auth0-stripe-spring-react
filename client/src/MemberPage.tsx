import { useState } from "react";
import { Message } from "./App";
import { AuthAction } from "./components/AuthAction";
import { useUserInfo } from "./hooks/useUserInfo";

export const MemberPage = () => {
  const { userInfo, isAuthenticated } = useUserInfo();

  const [privateMessage, setPrivateMessage] = useState<string>();

  const onRequestHandler = () => {
    (async () => {
      try {
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
      } catch (e) {
        alert('Unauthorized error!');
      }
    })();
  };

  return (
    <div>
      <h1>Member Only Page</h1>
      <AuthAction isAuthenticated={isAuthenticated} />

      <br />

      {isAuthenticated ? (
        <>
          <img
            src={userInfo?.pictureUrl}
            alt="User picutre"
            width="100"
            height="100"
          />
          <p>Username: {userInfo?.username}</p>
          <p>Email: {userInfo?.email}</p>
        </>
      ) : (
        <h3>GUEST</h3>
      )}

      <button onClick={onRequestHandler}>Make RESTful request.</button>
      {privateMessage && <p style={{color: 'green'}}>Private Message: {privateMessage}</p>}

      <br /><br />

      <a href="/">Go to public page</a>
    </div>
  );
};
