const express = require('express');
const router = express.Router();

// GET /bfhl - returns operation_code
router.get('/', (req, res) => {
  res.status(200).json({ operation_code: 1 });
});

// POST /bfhl - processes input data
router.post('/', (req, res) => {
  const data = req.body.data || [];
  const numbers = data.filter(item => !isNaN(item));
  const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
  const highestAlphabet = alphabets.length
    ? [alphabets.sort((a, b) => b.toUpperCase().charCodeAt(0) - a.toUpperCase().charCodeAt(0))[0]]
    : [];

  res.status(200).json({
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_alphabet: highestAlphabet,
  });
});

module.exports = router;