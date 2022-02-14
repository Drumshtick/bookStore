import './BooksListItem.scss';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const BooksListItem = (props) => {
  const { book, setActiveBook} = props;
  const handleClick = () => {
    setActiveBook({...book});
  };

  return (
    <ListItemButton
      sx={{color: 'white'}}
    >
      <ListItemText
        primary={book.name}
        onClick={handleClick}  
      />
    </ListItemButton>
  );
};

export default BooksListItem;
