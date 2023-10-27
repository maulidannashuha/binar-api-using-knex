// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'learning',
      user:     'binar',
      password: 'halo123'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: "postgres://maulidan:28sHnMz67XSdmd5KqRFKn1tiSQ74dNtm@dpg-ckstft0168ec73e6rq7g-a/baru_gxkb",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
