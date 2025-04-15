import conf from '@/conf';
import { database } from './appwrite';

const databaseId = conf.database_id;
const collectionId = conf.collection_id;

class DatabaseService {
  async listDocuments() {
    try {
      const response = await database.listDocuments(databaseId, collectionId);
      return response.documents;
    } catch (error) {
      console.error('getBooks() :: ', error);
    }
  }
  async createDocument() {
    try {
    } catch (error) {
      console.error('createBook() :: ', error);
    }
  }
}

const databaseService = new DatabaseService();

export default databaseService;
