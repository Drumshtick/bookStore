import './styles/books.scss';
import BooksList from '../components/BooksList/BooksList';
import BookDetails from '../components/BookDetails/BookDetails';
import NewBookButton from '../components/NewBookButton/NewBookButton';
import Box from '@mui/material/Box'
import useBookData from '../hooks/useBookData'

const Books = (props) => {
  const { books, activeBook, setActiveBook } = useBookData();
  
  return (
    <div className="books-container">
      <BooksList
        books={books}
        setActiveBook={setActiveBook}
      />
      <BookDetails
        activeBook={activeBook}
      />
    <Box
      sx={{
        position: 'absolute',
        bottom: '15px',
        right: '15px'
      }}
    >
      <NewBookButton />
    </Box>
    </div>
  )
};

export default Books
