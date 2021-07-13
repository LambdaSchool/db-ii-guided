module.exports = { // which one is used depends on value of an env variable (NODE_ENV ?)
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/produce.db3', // with other SQLs it'd be a URL
    },
    useNullAsDefault: true, // only required in sqlite
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds'
    },
  },
  production: {},
  staging: {},
  testing: {},
}
