// Import modules
const express = require('express');
const cors = require('cors');
const dataStore = require('./dataStore'); // renamed correctly (was append)

// Create server
const server = express();

// Middleware
server.use(express.json());
server.use(cors());

// Sample task
let todo = {
  title: "write some code",
  status: "typing",
  dueDate: "16th-October-2025"
};

// Append initial data
dataStore.append(todo);

// Fetch data
server.get('/data', (req, res) => {
  let data = dataStore.fetch();
  res.send(data);
});

// Post new data
server.post('/data', (req, res) => {
  let newTask = req.body;
  dataStore.append(newTask);
  res.send("Successfully added task");
});

// Server port
const PORT = 5003;

// Start server
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
