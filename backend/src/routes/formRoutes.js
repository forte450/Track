const express = require('express');
const router = express.Router();
const { insertFormData } = require('../models/formModel');

router.post('/', (req, res) => {
  const formData = req.body;
  insertFormData(formData, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ message: 'Form submitted', data: results });
  });
});

module.exports = router;
