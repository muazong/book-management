import appwriteAuth from '@/appwrite/auth';
import { UserInfo } from '@/interfaces';
import { Models } from 'appwrite';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface AuthContextProps {
  user: Models.Session | Models.User<Models.Preferences> | null;
  setUser: (user: Models.Session | null) => void;
  authLogout: () => void;
  authLogin: (userInfo: UserInfo) => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | null>(null);

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<
    Models.Session | Models.User<Models.Preferences> | null
  >(null);

  useEffect(() => {
    checkUserStatus();
  }, []);

  const authLogout = async () => {
    try {
      await appwriteAuth.deleteSessions();
    } catch (error) {
      console.error('authLogout() :: ', error);
    } finally {
      setUser(null);
    }
  };
  const authLogin = async (userInfo: UserInfo) => {
    try {
      await appwriteAuth.deleteSessions();
      const response = await appwriteAuth.createUser(userInfo);

      if (response) setUser(response);
    } catch (error) {
      console.error('authLogin() :: ', error);
    }
  };
  const checkUserStatus = async () => {
    try {
      const currentUser = await appwriteAuth.getCurrentUser();

      if (currentUser) setUser(currentUser);
    } catch (error) {
      console.error('checkUserStatus() :: ', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, authLogout, authLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
