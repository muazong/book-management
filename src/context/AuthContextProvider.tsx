import authService from '@/services/authService';
import { Models } from 'appwrite';
import { createContext, ReactNode, useEffect, useState } from 'react';

interface AuthContextProps {
  user: Models.Session | Models.User<Models.Preferences> | null;
  isRegistering: boolean;
  errorMessage: string;
  setUser: (user: Models.Session | null) => void;
  setIsRegistering: (value: boolean) => void;
  setErrorMessage: (error: string) => void;
  logout: () => void;
  login: (email: string, password: string) => void;
  register: (email: string, password: string, name: string) => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextProps | null>(null);

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<
    Models.Session | Models.User<Models.Preferences> | null
  >(null);
  const [isRegistering, setIsRegistering] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    getUser();
  }, []);

  const register = async (email: string, password: string, name: string) => {
    try {
      const response = await authService.register(email, password, name);
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
      if ('error' in response) {
        setErrorMessage(response.error);
      } else {
        setUser(response);
      }
    } catch (error) {
      const err = error as Error;
      console.error('logout() :: Failed to logout :: ', err.message);
    }
  };
  const getUser = async () => {
    try {
      const currentUser = await authService.getUser();
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    } catch (error) {
      const err = error as Error;
      console.error('logout() :: Failed to get current user :: ', err.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        register,
        isRegistering,
        setIsRegistering,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
