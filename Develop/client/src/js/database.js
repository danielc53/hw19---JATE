import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content, id) => {
  const request = await openDB('jate', 1)
    .transaction('jate', 'readwrite')
    .objectStore('jate')
    .add({ content: content, number: id })
  const output = await request
  console.log('Data saved to the database', output)
}


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const request = await openDB('jate', 1)
  .transaction('jate', 'readonly')
  .objectStore('jate')
  .getAll();
  const output = await request
  console.log('Data retrieved successfully', output)
};

initdb();
