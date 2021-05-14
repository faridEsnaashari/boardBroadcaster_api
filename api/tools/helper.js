const generateRandomVerificationCode = digit =>  {
    let digitA = 1;
    let digitB = 9; 
    for(let i = 1; i < digit; i++){
        digitA *= 10;
        digitB *= 10;
    }
    return Math.floor(Math.floor(digitA + Math.random() * digitB)) + 1;
};

module.exports = {
    generateRandomVerificationCode,
};
