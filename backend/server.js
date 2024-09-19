const express = require('express');
const cors = require('cors');
const app = express();
const formRoutes = require('./src/routes/formRoutes');
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/forms', formRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
