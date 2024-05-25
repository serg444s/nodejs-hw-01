import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    let contacts = JSON.parse(data);
    if (contacts.length > 0) {
      contacts = [];
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    }
  } catch (error) {
    console.error(error);
  }
};

await removeAllContacts();
