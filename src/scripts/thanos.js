import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const thanos = async () => {
  const data = await fs.readFile(PATH_DB);
  const contacts = JSON.parse(data, null, 2);
  contacts.forEach((product, index) => {
    const random = Math.random();
    if (random < 0.5) {
      contacts.splice(index, 1);
    }
  });
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};

await thanos();
