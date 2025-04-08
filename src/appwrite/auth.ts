import conf from '@/conf';
import { UserInfo } from '@/interfaces';
import { Client, Account } from 'appwrite';

class AppwriteAuth {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.endpoint_id).setProject(conf.project_id);
    this.account = new Account(this.client);
  }

  async createUser(userInfo: UserInfo) {
    try {
      return await this.account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password,
      );
    } catch (error) {
      console.error('createUser() :: ', error);
    }
  }
  async deleteSessions() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error('deleteSessions() :: ', error);
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error('deleteSessions() :: ', error);
    }
  }
}

const appwriteAuth = new AppwriteAuth();

export default appwriteAuth;
