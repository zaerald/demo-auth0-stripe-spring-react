import { useUserInfo } from "./hooks/useUserInfo";

export const MemberPage = () => {
  const { userInfo, isAuthenticated } = useUserInfo();

  return (
    <div>
      <h1>Member Only Page</h1>
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
        <p>Guest</p>
      )}

      <a href="/">Go to public page</a>
    </div>
  );
};
