module.exports = {
    plugins: [
        '@babel/plugin-proposal-class-properties'
    ],
    presets: [
        [
            '@babel/env',
            {
                targets: {
                    browsers: [
                        '> 2%',
                        'ie 11',
                        'safari > 9'
                    ]
                }
            }
        ],
        '@babel/preset-react'
    ]
};
