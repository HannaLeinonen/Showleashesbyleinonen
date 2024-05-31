const express = require('express'),
path = require('path'),
dotenv = require('dotenv'),
  { Client } = require('pg'),
  cors = require('cors');

dotenv.config();

const client = new Client({
    connectionString: process.env.PGURI
})

client.connect(err => {
    if (err) {
      console.error('Failed to connect to database:', err);
    } else {
      console.log('Connected to database');
    }
});

const app = express()


app.use(cors())
app.use(express.json());

app.post('/contact', async (req, res) => {
    const { firstName, lastName, email, message } = req.body

    try {
        const result = await client.query('INSERT INTO contact (first_name, last_name, email, message) VALUES ($1, $2, $3, $4) RETURNING *', [firstName, lastName, email, message]);
        res.status(201).send('201 created');

    }catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Endpoint för att hämta prislistan
app.get('/pricelist', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM pricelist');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.use(express.static(path.join(path.resolve(), 'dist')))

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
