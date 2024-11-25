import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (data) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
};
