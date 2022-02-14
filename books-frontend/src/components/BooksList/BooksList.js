import './styles.scss';
import BooksListItem from '../BooksListItem/BooksListItem';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const BooksList = (props) => {
  const { books, setActiveBook } = props;
  const bookTitles = books.map((book, i) => {
    return (
      <BooksListItem
        key={i}
        book={book}
        setActiveBook={setActiveBook}
      />
    );
  });
  return (
    <aside>
      <Box
        sx={{
          height: '30%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: '1px solid rgb(45, 55, 72)'
          }}
      >
        <Typography
          variant="h3"
          color="white"
        >
          Book List
        </Typography>
      </Box>
      <List
        sx={{
          height: '100%',
          width: '100%',
          maxHeight: '100%',
          overflow: 'auto'
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {bookTitles}
      </List>
    </aside>
  );
};

export default BooksList;
