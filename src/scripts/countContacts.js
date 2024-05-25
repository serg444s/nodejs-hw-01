import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const contacts = JSON.parse(data);
    return contacts.length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
