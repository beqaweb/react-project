if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configure-store.prod');
} else if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test') {
    module.exports = require('./configure-store.dev');
} else {
    throw new Error('Unrecognized node environment');
}
