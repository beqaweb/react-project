if (process.env.NODE_ENV === 'production') {
    module.exports = require('./firebase-keys.prod');
} else if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    module.exports = require('./firebase-keys.dev');
} else {
    throw new Error('Unrecognized node environment');
}
