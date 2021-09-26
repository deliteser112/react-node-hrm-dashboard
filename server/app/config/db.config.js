module.exports = {
  HOST: 'localhost',
  USER: 'root',
  PASSWORD: 'Deliteser112!!@',
  DB: 'db_thimble',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
