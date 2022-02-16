import { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import jsonAPI from '../../api-config/jsonAPI';

const DeleteBookButton = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { activeBook, setBooks } = props;
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#111827',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: '#fff'
  };

  const handleDelete = () => {
    setOpen(false);
    deleteBook();
  };

  const deleteBook = () => {
    jsonAPI.delete('/books', {data: {id: activeBook.id}})
    .then(resp => {
      console.log("success!");
      setBooks(prev => {
        console.log(prev)
        delete prev[activeBook.id];
        console.log(prev)
        return {
          ...prev
        };
      })
    })
    .catch(err => {
      console.log("ERR: ", err);
    });
  };

  return (

    <>
          <Tooltip
      title="Delete Book"
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
          paddingRight: '25px',
        }}
        variant="text"
        onClick={handleOpen}
      >
        <DeleteForeverIcon
          fontSize='large'
          sx={{
            color: 'red'
          }}
        />
      </Button>
    </Tooltip>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to delete<br/><u>{activeBook.name}?</u>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            There is no turning back.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: '20px'
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={handleDelete}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              onClick={handleClose}
            >
              No
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DeleteBookButton;
