const express = require('express');
const router = express.Router();
const { readFile, writeFile, write } = require('fs');

router.get('/', function(req, res) {
  getAllBooks()
  .then(result => {
    return res.status(200).json(result);
  })
  .catch(err => {
    console.log("Error in ReadFile /books: ", err)
    return res.status(400).json({ error: "Error in reading data" });
  })
});

router.get('/:id', function(req, res) {
  const { id } = req.params
  readFile('./util/data/bookData.json', 'utf-8', (err, data) => {
    if (err) {
      console.log("Error in ReadFile /books/:id : ", err)
      return res.status(400).json({ error: err })
    }
    const bookData = JSON.parse(data);
    
    if (!bookData[id]) {
      return res.status(400).json({ error: `Book with id of ${id} not found` })
    }

    return res.status(200).json(bookData[id])
  });
});

router.get('/:id', function(req, res) {
  const { id } = req.params
  readFile('./util/data/bookData.json', 'utf-8', (err, data) => {
    if (err) {
      console.log("Error in ReadFile /books/:id : ", err)
      return res.status(400).json({ error: err })
    }
    const bookData = JSON.parse(data);
    
    if (!bookData[id]) {
      return res.status(400).json({ error: `Book with id of ${id} not found` })
    }

    return res.status(200).json(bookData[id])
  });
});

router.post('/', verifyBookParams, function(req, res) {
  const {
    name,
    author,
    isbn,
    year,
    description
  } = req.body;

  getAllBooks()
  .then(result => {
    const count = Object.keys(result);
    const id = Number(count[count.length - 1]);
    let adjustedYear;

    if (typeof year === "string") {
      adjustedYear = new Date(year);
      console.log(adjustedYear);
    }
    
    if (typeof year === "object") {
      console.log("HERE2!");
      adjustedYear = year;
    }
    
    result[id + 1] = {
      id: id + 1,
      name,
      author,
      isbn,
      year: adjustedYear.getFullYear(),
      description
    }
    
    writeBook(result)
    .then(() => {
      return res.status(200).json({ message: "success" });
    })
    .catch(err => {
      console.log("Error writing book: ", err)
      return res.status(400).json({ error: 'Failed to write book' });
    });
  });

});

router.put('/', verifyBookParams, (req, res) => {
  const {
    name,
    author,
    isbn,
    year,
    description,
    id
  } = req.body;

  getAllBooks()
  .then(bookData => {
    let adjustedYear = new Date(year);

    if (!bookData[id]) {
      return res.status(400).json({ error: `Book with id of ${id} not found` })
    }

    bookData[id] = {
      name,
      author,
      isbn,
      year: adjustedYear.getFullYear(),
      description,
      id
    }
    console.log(bookData[id])
    writeBook(bookData)
    .then(() => {
      return res.status(200).json({ message: "success" });
    })
    .catch(err => {
      console.log("Error writing book: ", err)
      return res.status(400).json({ error: 'Failed to write book' });
    });
  })
  .catch(err => {
    return res.status(400).json({ error: err });
  });

});

function verifyBookParams(req, res, next) {
  if (
    req.method === 'PUT' &&
    !req.body.name ||
    !req.body.author ||
    !req.body.isbn ||
    !req.body.year ||
    !req.body.id
    ) {
      console.log("Put to /books missing params")
      return res.status(400).json({ error: `Missing required parameters` })
  }


  if (
    req.method !== 'PUT' &&
    !req.body.name ||
    !req.body.author ||
    !req.body.isbn ||
    !req.body.year
    ) {
      console.log("Post to /books missing params")
      return res.status(400).json({ error: `Missing required parameters` })
  }

  next();
}

function getAllBooks() {
  return new Promise((res, rej) => {
    readFile('./util/data/bookData.json', 'utf-8', (err, data) => {
      if (err) {
        rej("Error reading file: ", err);
      }
      res(JSON.parse(data))
    });
  });
};

function writeBook(book) {
  return new Promise((res, rej) => {
    writeFile('./util/data/bookData.json', JSON.stringify(book), err => {
      if (err) {
        rej("Error writing file: ", err);
      }
      res();
    });
  });
};

module.exports = router;
