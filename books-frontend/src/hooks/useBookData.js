import { useEffect, useState } from 'react';
import jsonAPI from '../api-config/jsonAPI';

export default function useBookData() {

  const [ books, setBooks ] = useState({});
  const [ activeBook, setActiveBook ] = useState({});
  
  useEffect(() => {
    jsonAPI.get('/books')
    .then(result => {
      setActiveBook(result.data[1])
      setBooks(result.data)
    })
    .catch(err => console.log('Error in getting book collection'))
  }, [])

  return { books, activeBook, setActiveBook };
};
