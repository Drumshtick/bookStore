import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import EditBook from '../EditBook/EditBook';
import './BookDetails.scss';

const BookDetails = (props) => {
  const { activeBook } = props;
  console.log(activeBook)
  return (
    <article>
      <Card
        sx={{
          maxWidth: '95%',
          maxHeight: '90%',
          margin: '0 auto',
          overflowY: 'auto'
        }}
      >
        <div className='edit'>
          <EditBook />
        </div>
        <CardContent>
        <Box
        sx={{
          marginTop: '20px',
          height: 'auto',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          }}
      >
        <Typography
          variant="h3"
          color="black"
          sx={{
            marginBottom: '15px',
            textAlign: 'center'
          }}
        >
          {activeBook.name}
        </Typography>
        <Typography
          variant="h5"
          color="black"
        >
          Author: {activeBook.author}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <h5 className="book-publishing-data">IBSN: {activeBook.isbn}</h5>
          <h5 className="book-publishing-data">Year published: {activeBook.year}</h5>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'start'
          }}
        >
          <Typography
                variant="p"
                sx={{
                  paddingLeft: '10px'
                }}
              >
              Description:
            </Typography>
            <Typography
              variant="p"
              sx={{
                padding: '20px'
              }}
            >
              {activeBook.description}
            </Typography>
        </Box>
      </Box>
        </CardContent>
      </Card>
    </article>
  );
};

export default BookDetails;
