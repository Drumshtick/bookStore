const express = require('express');
const router = express.Router();
const { readFile, writeFile } = require('fs');

router.get('/', function(req, res) {
  readFile('./util/data/bookData.json', 'utf-8', (err, data) => {
    if (err) {
      console.log("Error in ReadFile /books: ", err)
      return res.status(400).json({ error: err })
    }
    return res.status(200).json(JSON.parse(data))
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

router.post('/', function(req, res) {
  if (
    !name ||
    !author ||
    !isbn ||
    !year
    ) {
      return res.status(400).json({ error: `Missing required parameters` })
  }

  const {
    name,
    author,
    isbn,
    year
  } = req.body;

  console.log(    name,
    author,
    isbn,
    year)
    return res.status(200).json({ok: 'yes'})

})
module.exports = router;
