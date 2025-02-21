module.exports = (req, res) => {
    const { data, filters } = req.body;
  
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: 'Invalid input format',
        data: ''
      });
    }
  
    const numbers = [];
    const alphabets = [];
  
    data.forEach(value => {
      if (/^[0-9]+$/.test(value)) {
        numbers.push(value);
      } else if (/^[a-zA-Z]$/.test(value)) {
        alphabets.push(value);
      }
    });
    
    let highest_alphabet = '';
    if (alphabets.length > 0) {
      highest_alphabet = alphabets.reduce((a, b) => (a.toLowerCase() > b.toLowerCase() ? a : b));
    }

    const filteredResponse = {};
    if (filters.includes('Numbers')) filteredResponse.numbers = numbers;
    if (filters.includes('Alphabets')) filteredResponse.alphabets = alphabets;
    if (filters.includes('Highest Alphabet')) filteredResponse.highest_alphabet = highest_alphabet ? [highest_alphabet] : [];
  
    res.status(200).json({
      is_success: true,
      ...filteredResponse,
      message: 'Filtered data fetched successfully'
    });
  };  