import './BooksList.scss';

const BooksList = (props) => {
  const { books } = props;
  const bookTitles = books.map(book => {
    
  });
  return (
    <aside>
      <header>
        <h3>Books List</h3>
      </header>
      <section>

      </section>
    </aside>
  );
};

export default BooksList;
