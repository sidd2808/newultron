// ===============================================================================
// đŽá´Ęá´Ęá´É´â˘ đđĽđˇđ˘đŻđ¤đŚ đđŠđ˘đľđ´đ˘đąđą đđ´đŚđłđŁđ°đľ đđŞđľđŠ 80+ đđ°đŽđŽđ˘đŻđĽđ´ đ§đ°đł đŁđ°đľđŠ đđłđŞđˇđ˘đľđŚ đ˘đŻđĽ đđśđŁđ­đŞđ¤..
// ===============================================================================
const fs = require(`fs`);
const { Sequelize } = require(`sequelize`);
if (fs.existsSync(`á´Ęá´Ęá´É´.env`)) {
  require(`dotenv`).config({
    path: `./á´Ęá´Ęá´É´.env`,
  });
} else {
  require(`dotenv`);
}
// ===============================================================================
// đŽá´Ęá´Ęá´É´â˘ đđĽđˇđ˘đŻđ¤đŚ đđŠđ˘đľđ´đ˘đąđą đđ´đŚđłđŁđ°đľ đđŞđľđŠ 80+ đđ°đŽđŽđ˘đŻđĽđ´ đ§đ°đł đŁđ°đľđŠ đđłđŞđˇđ˘đľđŚ đ˘đŻđĽ đđśđŁđ­đŞđ¤..
// ===============================================================================
const env = {
  ULTRON: process.env.ULTRON === undefined ? `` : process.env.ULTRON,
  HEROKU_API:
    process.env.HEROKU_API === undefined ? "Null" : process.env.HEROKU_API,
  HEROKU_BOT_NAME:
    process.env.HEROKU_BOT_NAME === undefined
      ? "Null"
      : process.env.HEROKU_BOT_NAME,
  IMDB: process.env.IMDB === undefined ? `5e36f0db` : process.env.IMDB,
  ULTRONIX:
    process.env.ULTRONIX === undefined ? `^[!]` : `^[${process.env.ULTRONIX}]`,
  CCD: process.env.CCD === undefined ? `91` : process.env.CCD,
  OCR: process.env.OCR === undefined ? `9ffb44def388957` : process.env.OCR,
  WAPSI:
    process.env.CURRENT_WEATHER_API_KEY === undefined
      ? `6729ac2b2e2bb5c686ff427a2f06df92`
      : process.env.CURRENT_WEATHER_API_KEY,
  DATABASE_URL: (process.env.DATABASE_URL =
    process.env.DATABASE_URL === undefined
      ? `./á´Ęá´Ęá´É´.db`
      : process.env.DATABASE_URL),
  POSTQL:
    process.env.DATABASE_URL === `./á´Ęá´Ęá´É´.db`
      ? new Sequelize({
          dialect: `sqlite`,
          storage: process.env.DATABASE_URL,
        })
      : new Sequelize(process.env.DATABASE_URL, {
          dialect: `postgres`,
          protocol: `postgres`,
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
        }),
  PRIVACY: process.env.PRIVACY === undefined ? `public` : process.env.PRIVACY,
  SUDO: process.env.KING === undefined ? `` : process.env.KING,
};
module.exports = env;
// ===============================================================================
// đŽá´Ęá´Ęá´É´â˘ đđĽđˇđ˘đŻđ¤đŚ đđŠđ˘đľđ´đ˘đąđą đđ´đŚđłđŁđ°đľ đđŞđľđŠ 80+ đđ°đŽđŽđ˘đŻđĽđ´ đ§đ°đł đŁđ°đľđŠ đđłđŞđˇđ˘đľđŚ đ˘đŻđĽ đđśđŁđ­đŞđ¤..
// ===============================================================================
