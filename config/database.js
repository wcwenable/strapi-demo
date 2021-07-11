module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '106.75.218.161'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', 'Sjz%@)lagou515'),
      },
      options: {
        "pool":{
          "min":0,
          "max":15,
          "idleTimeoutMillis":30000,
          "createTimeoutMillis":30000,
          "acquireTimeoutMillis":30000
        }
      },
    },
  },
});