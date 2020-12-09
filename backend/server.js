const mongoose = require(`mongoose`);

const express = require('express');
const cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// const exercisesRouter = require('./routes/exercises');
const sendersRouter = require('./routes/sender');
const receiversRouter = require('./routes/receiver');
const createshipmentsRouter = require('./routes/createshipments');



// app.use('/exercises', exercisesRouter);
app.use('/sender', sendersRouter)
app.use('/receiver', receiversRouter)
app.use('/createshipments', createshipmentsRouter)



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});