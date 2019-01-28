const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // res.send('Hey! It works!');
  const info = {
    name: 'zanaty',
    age: 25,
    title: 'Frontend Developer'
  }
  res.json(info)
  // res.send(req.query)
  // res.status(500).json({error: 'message'})
  // res.redirect('http://google.com')
  // res.status(400).send('Bad Request');
});

router.get('/user/:id', (req, res) => {
  // res.send('User ' + [...req.params.id].reverse().join(''));
  console.log(req.baseUrl)
  res.status(200).send('Sucess')
})

module.exports = router;
