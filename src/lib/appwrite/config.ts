import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: 'https://cloud.appwrite.io/v1',
  projectId: '65a7d377f41ef526827f',
  databaseId: 'v1',
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: '65a83bd245419b1bc1d8',
  postCollectionId: '65a83ba6a030c0b735a6',
  savesCollectionId: '65a83bf0008c43241892',

  
};

export const client = new Client();




  

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);

