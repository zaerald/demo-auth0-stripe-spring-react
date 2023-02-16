type AuthActionProps = {
  isAuthenticated?: boolean;
};

export const AuthAction = ({ isAuthenticated = false }: AuthActionProps) => {
  return (
    <div>
      {isAuthenticated ? (
        <a href={`${import.meta.env.VITE_BASE_API_URL}/logout`}>Logout</a>
      ) : (
        <a
          href={`${
            import.meta.env.VITE_BASE_API_URL
          }/oauth2/authorization/auth0`}
        >
          Login
        </a>
      )}
    </div>
  );
};
