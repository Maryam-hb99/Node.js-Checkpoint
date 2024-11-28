const generatePassword = require('generate-password');

const password = generatePassword.generate({
    length: 8,
    numbers: true,
    symbols: true,
    uppercase: false,
});

console.log('Generated Password:', password);