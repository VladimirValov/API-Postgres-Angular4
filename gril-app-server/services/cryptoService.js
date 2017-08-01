const crypto = require('crypto');

const { passSecretKey } = require('../config/security');


function encrypt(password) {
    return crypto.createHmac('sha256', passSecretKey).update(password).digest('hex');
}

module.exports = { encrypt }
