const conf = {
  base_url: import.meta.env.VITE_APPWRITE_URL,
  project_id: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  database_id: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  collection_id: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
  bucket_id: import.meta.env.VITE_APPWRITE_BUCKET_ID,
};

export default conf;
