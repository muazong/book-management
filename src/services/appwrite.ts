import conf from '@/conf';
import { Account, Client, Databases } from 'appwrite';

const client = new Client()
  .setEndpoint(conf.endpoint_id)
  .setProject(conf.project_id);

const database = new Databases(client);
const account = new Account(client);

export { database, account, client };
