import { createContext, ReactNode, useState } from 'react';

interface AuthContextProps {
  user: boolean | null;
  setUser: React.Dispatch<React.SetStateAction<boolean | null>>;
  authLogout: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | null>(null);

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<boolean | null>(true);

  const authLogout = () => {
    setUser(false);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, authLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
