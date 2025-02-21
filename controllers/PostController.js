module.exports = (req, res) => {
    const { data } = req.body;
    
    if(!data || !Array.isArray(data)) {
        return res.status(400).json({ 
            is_success: false, 
            data: "",
            message: 'Invalid input format'
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
    if(alphabets.length>0) {
        highest_alphabet=alphabets.reduce((a, b) => (a.toLowerCase() > b.toLowerCase() ? a : b));
    }
    
    const response = {
        is_success: true,
        user_id: 'ayush_vatsa_14072004', 
        email: '22bcs13651@cuchd.in',
        roll_number: '22bcs13651',
        numbers,
        alphabets,
        highest_alphabet: highest_alphabet ? [highest_alphabet] : []
    };
    
    res.status(200).json({
        is_success: true,
        data: response,
        message: 'Data fetched successfullly'
    });
};