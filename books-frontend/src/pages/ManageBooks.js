import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import './styles/manageBooks.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Typography from '@mui/material/Typography';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const ManageBooks = () => {
  return (
    <main>
      <Card
        sx={{
          height: '90vh',
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
        <Form>
          <Form.Group className="mb-3" controlId="bookName">
            <Form.Label>Book name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="author">
            <Form.Label>Author</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="isbn">
            <Form.Label>ISBN</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="published">
            <Form.Label>Year published</Form.Label>
            <DatePicker className="datepicker form-control"
              // selected={startDate}
              // onChange={date => setStartDate(date)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" />
          </Form.Group>
          <div className='text-center'>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
          </Form>
        </CardContent>
      </Card>
    </main>
  )
};

export default ManageBooks
