const path = require('path');

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
    webpack: {
        alias: {
            '@components': resolvePath('./src/components/*'),
            '@main': resolvePath('./src/pages/main/*'),
            '@utils': resolvePath('./src/utils/*')
        }
    },
}