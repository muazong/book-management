import conf from '@/conf';
import { Client, Databases } from 'appwrite';

class AppwriteDataBase {
  client = new Client();
  database;

  constructor() {
    this.client.setEndpoint(conf.base_url).setProject(conf.project_id);
    this.database = new Databases(this.client);
  }

  async getBooks() {
    try {
      return this.database.listDocuments(conf.database_id, conf.collection_id);
    } catch (error) {
      console.error('getBooks() :: ', error);
    }
  }

  async createBook() {
    try {
    } catch (error) {
      console.error('createBook() :: ', error);
    }
  }
}

const appWriteDatabase = new AppwriteDataBase();

export default appWriteDatabase;
