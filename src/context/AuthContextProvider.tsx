import authService from '@/services/authService';
import { Models } from 'appwrite';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface AuthContextProps {
  user: Models.Session | Models.User<Models.Preferences> | null;
  setUser: (user: Models.Session | null) => void;
  logout: () => void;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
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
    getUser();
  }, []);

  const register = async (email: string, password: string) => {
    try {
      const response = await authService.register(email, password);
      return response;
    } catch (error) {
      const err = error as Error;
      console.error('logout() :: Failed to register :: ', err.message);
    }
  };
  const logout = async () => {
    try {
      await authService.logout();
    } catch (error) {
      const err = error as Error;
      console.error('logout() :: Failed to logout :: ', err.message);
    } finally {
      setUser(null);
    }
  };
  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login(email, password);
      if (response) setUser(response);
    } catch (error) {
      const err = error as Error;
      console.error('logout() :: Failed to login :: ', err.message);
    }
  };
  const getUser = async () => {
    try {
      const currentUser = await authService.getUser();
      if (currentUser) setUser(currentUser);
    } catch (error) {
      const err = error as Error;
      console.error('logout() :: Failed to get current user :: ', err.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
