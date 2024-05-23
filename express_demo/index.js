const express = require('express');
const users = require('./MOCK_DATA.json');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');
const {addAnEntry, deleteAnEntry, updateAnEntry} = require('./add_json_data.js');

const app = express();
const PORT = 8000;
app.set('port', PORT);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/user/:id', (req, res) => {
  let userData;
  users.forEach((user) => {
    if(user.id == req.params.id){
      userData = user;
    }
  });
  res.send(userData);
});

app.get('/user', (req, res) => {
  let userData;
  let key = Object.keys(req.query)[0];
  let value = Object.values(req.query)[0];
  users.forEach((user) => {
    if(user[key] == value){
      userData = user;
    }
  });
  console.log(req.params.id);
  res.send(userData);
});

app.post('/createUser', (req, res) => {
  let userData = req.body;
  const userId = uuidv4();
  userData.id = userId;
  try {
    addAnEntry(userData);
    res.send(userData);
  } catch (error) {
    res.send('Something went wrong');
  }
});

app.put('/update/:id', (req, res) => {
  let updates = req.body;
  let userId = req.params.id;
  try {
    let updatedData = updateAnEntry(userId, updates);
    res.send(updatedData);
  } catch (error) {
    res.send('Something went wrong');
  }
});

app.delete('/delete/:id', (req, res) => {
  let userId = req.params.id;
  let userData = deleteAnEntry(userId);
    res.send(userData);
  try {
    let userData = deleteAnEntry(userId);
    res.send(userData);
  } catch (error) {
    res.send('Something went wrong');
  }
});

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`));