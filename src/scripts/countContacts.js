import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const contacts = await readContacts();
  console.log(`Total number of contacts: ${contacts.length}`);
  return contacts.length;
};

countContacts();
