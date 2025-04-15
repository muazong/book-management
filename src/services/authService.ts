import { ID } from 'appwrite';
import { account } from './appwrite';

class AuthService {
  async register(email: string, password: string) {
    try {
      const response = await account.create(ID.unique(), email, password);
      return response;
    } catch (error) {
      const err = error as Error;
      console.error('register() :: Failed to register :: ', err.message);
    }
  }
  async login(email: string, password: string) {
    try {
      const response = await account.createEmailPasswordSession(
        email,
        password,
      );
      return response;
    } catch (error) {
      const err = error as Error;
      console.error('logout() :: Failed to login :: ', err.message);
    }
  }
  async logout() {
    try {
      await account.deleteSessions();
    } catch (error) {
      const err = error as Error;
      console.error('logout() :: Failed to logout :: ', err.message);
    }
  }
  async getUser() {
    try {
      const response = await account.get();
      return response;
    } catch (error) {
      const err = error as Error;
      console.error('logout() :: Failed to get current user :: ', err.message);
    }
  }
}

const authService = new AuthService();

export default authService;
