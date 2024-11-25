import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  if (contacts.length > 0) {
    contacts.pop();
    await writeContacts(contacts);
    console.log('Last contact deleted.');
  } else {
    console.log('There are no contacts to delete.');
  }
};

removeLastContact();
