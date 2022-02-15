import Button from '@mui/material/Button';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";

const EditBookButton = (props) => {
  let navigate = useNavigate();
  
  console.log(props.activeBook.id)
  const handleClick = () => {
    navigate(`/edit/${props.activeBook.id}`, {
      replace: true,
      state: props.activeBook
    });
  };

  return (
    <Tooltip
      title="Edit Book"
      placement="right"
    >
      <Button
        sx={{
          color: '#333',
          height: '94px',
          width: '94px',
          backgroundColor: 'rgba(51, 51, 51, 0.082)',
          borderRadius: '100%',
          paddingTop: '25px',
          paddingLeft: '25px',
        }}
        variant="text"
        onClick={handleClick}
      >
        <EditIcon
          fontSize='large' 
        />
      </Button>
    </Tooltip>

  );
};

export default EditBookButton;
