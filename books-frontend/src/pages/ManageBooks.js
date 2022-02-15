import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MUIButton from '@mui/material/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import './styles/manageBooks.scss';
import "react-datepicker/dist/react-datepicker.css";
const ManageBooks = () => {
  const [ state, setState ] = useState({
    name: '',
    author: '',
    isbn: '',
    year: '',
    description: '',
    date: 2022
  });
  const { id } = useParams();
  const navigate  = useNavigate ();
  const handleSubmit = (e) => {
    console.log(e)
  };

  const handleClick = (props) => {
    navigate('/')
  };
  return (
    <main>
      <Card
        sx={{
          height: 'auto',
          width: 'auto',
          minWidth: '400px',
        }}
      >
        <CardContent>
        <Typography
          variant="h5"
          textAlign="center"
          mb="15px"
        >
          Create new book
        </Typography>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="bookName">
            <Form.Label>Book name</Form.Label>
            <Form.Control
              required
              type="text"
              value={state.name}
              onChange={(e) => setState({...state, name: e.target.value})}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control
              required
              type="text"
              value={state.author}
              onChange={(e) => setState({...state, author: e.target.value})}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="isbn">
            <Form.Label>ISBN&nbsp;&nbsp;(i.e 0439023483)</Form.Label>
            <Form.Control required type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="published">
            <Form.Label>Year published&nbsp;&nbsp;(i.e 2022)</Form.Label>
            <DatePicker
              className="datepicker form-control"
              showYearPicker
              dateFormat="yyyy"
              selected={state.date}
              onChange={(date) => setState({...state, date})}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              value={state.description}
              onChange={(e) => setState({...state, description: e.target.value})}
              as="textarea"
            />
          </Form.Group>
          <div className='text-center'>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
          </Form>
        </CardContent>
      </Card>
      <div className="back-btn">
        <MUIButton
          onClick={handleClick}
        >
        
          <ArrowBackIcon
            fontSize="large"
          />
        </MUIButton>
      </div>
    </main>
  )
};

export default ManageBooks
