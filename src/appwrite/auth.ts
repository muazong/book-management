import conf from '@/conf';
import { Client, Account } from 'appwrite';

class AppwriteAuth {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(conf.endpoint_id).setProject(conf.project_id);
    this.account = new Account(this.client);
  }
}

const appwriteAuth = new AppwriteAuth();

export default appwriteAuth;
