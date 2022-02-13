import './BookDetails.scss';

const BookDetails = (props) => {
  return (
    <article>
      <header className='details-header'>
        <h1>Name</h1>
        <h3>Author</h3>
      </header>
      <section>
        <div>
          <p>----ISBN----</p>
          <p>----1994----</p>
        </div>
          <p>"A farm is taken over by its overworked, mistreated animals. With flaming idealism and stirring slogans, they set out to create a paradise of progress, justice, and equality. Thus the stage is set for one of the most telling satiric fables ever penned –a razor-edged fairy tale for grown-ups that records the evolution from revolution against tyranny to a totalitarianism just as terrible."</p>
      </section>
    </article>
  );
};

export default BookDetails;
