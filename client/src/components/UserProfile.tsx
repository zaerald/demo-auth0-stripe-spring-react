import { UserInfo } from "../hooks/useUserInfo";

type UserProfileProps = {
  isAuthenticated: boolean;
  userInfo?: UserInfo;
};

export const UserProfile = ({
  userInfo,
  isAuthenticated,
}: UserProfileProps) => {
  return (
    <div>
      {isAuthenticated ? (
        <>
          {userInfo?.pictureUrl && (
            <img
              src={userInfo?.pictureUrl}
              alt="User picutre"
              width="100"
              height="100"
            />
          )}
          <p>Username: {userInfo?.username}</p>
          <p>Email: {userInfo?.email}</p>
        </>
      ) : (
        <h3>GUEST</h3>
      )}
    </div>
  );
};
