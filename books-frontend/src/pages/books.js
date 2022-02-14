import { useState } from 'react';
import './styles/books.scss';
import BooksList from '../components/BooksList/BooksList';
import BookDetails from '../components/BookDetails/BookDetails';
import NewBook from '../components/NewBook/NewBook';
import Box from '@mui/material/Box'

const books = [
  {
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
    isbn: '0439023483',
    year: 2009,
    description: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love"
  },
  {
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '0446310492',
    year: 2006,
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. 'To Kill A Mockingbird' became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic."
  },
  {
    name: 'Animal Farm',
    author: 'George Orwell',
    isbn: '0451526341',
    year: 1996,
    description: "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned –a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible."
  },
  {
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
    isbn: '0439023483',
    year: 2009,
    description: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love, In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love"
  },
  {
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '0446310492',
    year: 2006,
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. 'To Kill A Mockingbird' became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic."
  },
  {
    name: 'Animal Farm',
    author: 'George Orwell',
    isbn: '0451526341',
    year: 1996,
    description: "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned –a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible."
  },
  {
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
    isbn: '0439023483',
    year: 2009,
    description: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love"
  },
  {
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '0446310492',
    year: 2006,
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. 'To Kill A Mockingbird' became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic."
  },
  {
    name: 'Animal Farm',
    author: 'George Orwell',
    isbn: '0451526341',
    year: 1996,
    description: "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned –a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible."
  },
  {
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
    isbn: '0439023483',
    year: 2009,
    description: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love"
  },
  {
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '0446310492',
    year: 2006,
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. 'To Kill A Mockingbird' became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic."
  },
  {
    name: 'Animal Farm',
    author: 'George Orwell',
    isbn: '0451526341',
    year: 1996,
    description: "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned –a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible."
  },
  {
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
    isbn: '0439023483',
    year: 2009,
    description: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV. Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love"
  },
  {
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    isbn: '0446310492',
    year: 2006,
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. 'To Kill A Mockingbird' became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic."
  },
  {
    name: 'Animal Farm',
    author: 'George Orwell',
    isbn: '0451526341',
    year: 1996,
    description: "A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned –a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible."
  }
];

const Books = (props) => {
  const [ activeBook, setActiveBook ] = useState({...books[0]})

  console.log("active book: ", activeBook)
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
      <NewBook />
    </Box>
    </div>
  )
};

export default Books
