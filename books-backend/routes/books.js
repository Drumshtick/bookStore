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

router.post('/', verifyNewBookParams, function(req, res) {
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
    result[id + 1] = {
      id: id + 1,
      name,
      author,
      isbn,
      year,
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
  })

})

function verifyNewBookParams(req, res, next) {
  if (
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
