module.exports = {
    keys: 'xueand',
    secret: '09314567301',
    mongoose: {
        url: 'mongodb://jwt:token@192.168.3.10:27017/egg_jwt',
        options: {
            server: {
                auto_reconnect: true,
                poolSize: 10
            }
        }
    },
    security: {
        csrf: {
            ignoreJSON: true,
        },
    },
}