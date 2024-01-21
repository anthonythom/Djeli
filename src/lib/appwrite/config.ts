import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  url: "https://cloud.appwrite.io/v1",
  projectId: "65ad8dcc7ba552b16e53",
  databaseId: "65ad8ed87ed2b553efc3",
  storageId: "65ad8e975b7d020e1e2a",
  userCollectionId: "65ad8f420eb2bf975749",
  postCollectionId: "65ad8f1a2ef4ad264640",
  savesCollectionId: "65ad8f54a0257926baff",
};

export const client = new Client();

client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
