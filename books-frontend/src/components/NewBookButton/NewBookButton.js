import Button from '@mui/material/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate  } from "react-router-dom";

const NewBookButton = () => {

  const navigate  = useNavigate ();

  const handleClick = () => {
    navigate('/new')
  };

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
        onClick={handleClick}
      >
        <AddIcon
          fontSize='large'      
        />
      </Button>
    </Tooltip>

  );
};

export default NewBookButton;
