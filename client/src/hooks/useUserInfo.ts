import { useEffect, useState } from "react";

export type UserInfo = {
  username: string;
  email: string;
  pictureUrl: string;
};

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);

      try {
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
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return {
    userInfo,
    loading,
    isAuthenticated: !!userInfo?.username && !loading,
  };
};
