import { useEffect, useState } from 'react';
import jsonAPI from '../api-config/jsonAPI';

export default function useBookData() {

  const [ books, setBooks ] = useState({});
  const [ activeBook, setActiveBook ] = useState({});
  
  
  useEffect(() => {
    jsonAPI.get('/books')
    .then(result => {
      const bookKeys = Object.keys(result.data)
      setActiveBook(result.data[bookKeys[0]])
      setBooks(result.data)
    })
    .catch(err => console.log('Error in getting book collection'))
  }, [])

  useEffect(() => {
    const bookKeys = Object.keys(books)
    if (bookKeys.length === 0) {
      setActiveBook({});
    }
  }, [books]);

  return { books, activeBook, setActiveBook, setBooks };
};
