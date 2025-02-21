export default function handler(req, res) {
    if (req.method === 'GET') {
      return res.status(200).json({ operation_code: 1 });
    }
  
    if (req.method === 'POST') {
      const data = req.body.data || [];
      const numbers = data.filter((item) => !isNaN(item));
      const alphabets = data.filter((item) => /^[a-zA-Z]$/.test(item));
      const highestAlphabet = alphabets.length
        ? [alphabets.sort((a, b) => b.toUpperCase().charCodeAt(0) - a.toUpperCase().charCodeAt(0))[0]]
        : [];
  
      return res.status(200).json({
        is_success: true,
        user_id: "john_doe_17091999",
        email: "john@xyz.com",
        roll_number: "ABCD123",
        numbers,
        alphabets,
        highest_alphabet: highestAlphabet,
      });
    }
  
    res.status(405).end(); // Method Not Allowed
  }