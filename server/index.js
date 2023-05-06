const path = require('path');
const express = require('express');



// Node serves the files for the built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// APIs
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});