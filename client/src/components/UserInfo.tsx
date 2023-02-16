import { useEffect, useState } from 'react'

type UserInfo = {
  username: string;
  email: string;
  pictureUrl: string;
};

export const UserInfo = () => {

  const [userInfo, setUserInfo] = useState<UserInfo>();

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
      Email: {userInfo?.email}
    </div>
  )
}
