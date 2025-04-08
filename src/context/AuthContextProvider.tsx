import { createContext, ReactNode, useState } from 'react';

interface AuthContextProps {
  user: boolean | null;
  setUser: React.Dispatch<React.SetStateAction<boolean | null>>;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | null>(null);

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<boolean | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
