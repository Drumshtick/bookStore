import Button from '@mui/material/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@mui/material/Tooltip';
const NewBook = () => {
  return (
    <Tooltip
      title="New Book"
      placement="left"
    >
      <Button
        sx={{
          color: '#fff',
          borderRadius: '100%',
          height: '64px',
          backgroundColor: '#333'
        }}
        variant="contained"
      >
        <AddIcon
          fontSize='large'      
        />
      </Button>
    </Tooltip>

  );
};

export default NewBook;
