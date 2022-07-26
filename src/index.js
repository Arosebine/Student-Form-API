require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const connectDB = require('./database/db');
const userRouter = require('./routes/user.routes');

const app = express();

connectDB();

//middleware
app.use(express.json()); //parses json objects
app.use(express.urlencoded({ extended: true })); // TODO
app.use(morgan('dev'));
app.use('/api', userRouter);

const port = process.env.PORT || 5555;

// Route handlers
app.get('/', (req, res) => res.send('Home page'));

app.all('*', (req, res) => {
  return res.status(404).json({ message: 'Oops page not found 🧨🧨🧨🧨🧨' });
});

app.listen(port, () => {
  console.log(`Server up and running on port http://localhost:${port}`);
});
