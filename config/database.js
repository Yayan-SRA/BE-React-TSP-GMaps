// buat heroku
const {
  DB_USER = '',
  DB_PASSWORD = '',
  DB_NAME = '',
  DB_HOST = '',
  DB_PORT = ''
} = process.env
module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: `${DB_NAME}`,
    host: DB_HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }

}


/** Destruct environment variable to get database configuration */
// Buat local
// const {
//   DB_USERNAME = "postgres",
//   DB_PASSWORD = "123",
//   DB_HOST = "127.0.0.1",
//   DB_NAME = "skripsi-algen",
// } = process.env;

// module.exports = {
//   development: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: `${DB_NAME}_development`,
//     host: DB_HOST,
//     dialect: "postgres",
//   },
//   test: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: `${DB_NAME}_test`,
//     host: DB_HOST,
//     dialect: "postgres",
//   },
//   production: {
//     username: DB_USERNAME,
//     password: DB_PASSWORD,
//     database: `${DB_NAME}_production`,
//     host: DB_HOST,
//     dialect: "postgres",
//   },
// };
