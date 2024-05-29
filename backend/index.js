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
const port = process.env.PORT || 10000;

app.use(cors())
app.use(express.json());

// Endpoint för att hämta prislistan
app.get('/api/pricelist', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM pricelist');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.use(express.static(path.join(path.resolve(), 'dist')))

app.listen(port, () => console.log(`Server is running on port ${port}`))
