// ===============================================================================
// ð®á´Êá´Êá´É´â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
const imdb = require("imdb-api");
const âÎ¹ÑÎ·Ñ = require("../../á´Êá´Êá´É´/catch");
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../á´Êá´Êá´É´/UltronSitreper`);
// ââââââââââââââââââââââââââââââââââââââââââââ
module.exports = {
  name: `imdb`,
  commandType: "Funâ¡",
  description: `This module was built to find any IMDB movie/series.`,
  async handle(ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ, chat, á´Êá´Êá´É´, Arc) {
    if (Arc.length === 0) {
      await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ.sendMessage(á´Êá´Êá´É´.chatId, "â", MessageType.text);
      await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ
        .sendMessage(
          á´Êá´Êá´É´.chatId,
          {
            url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*â ï¸Seems like someone forgot to give Movie/Series name!*
  
  *Usage Example*
  .imdb <movie/series>`,
          }
        )
        .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ, á´Êá´Êá´É´));
      return;
    }
    const imob = new imdb.Client({
      apiKey: UltronSitreper.IMDB,
    });
    let movie = await imob.get({
      name: Arc.join(" "),
    });
    const Litol = `*ð¡ðð¢ð­ð¥ðâ*  ${movie.title.toUpperCase()}
*ððð¢ð¦ðâ*  ${movie.runtime}
*ðððð§ð«ðð¬â*  ${movie.genres}
*ðððð­ð¨ð«ð¬â*  ${movie.actors}
*ðð½ðð¨ð­ðð¬â*  ${movie.votes}
*â­ððð­ð¢ð§ð â*  ${movie.rating}
*ð©ðð²ð©ðâ*  ${movie.type}
*ððð¨ð®ð§ð­ð«ð²â*  ${movie.country}
*ð¥ðð¢ð«ððð­ð¨ð«â*  ${movie.director}
*âï¸ðð«ð¢ð­ðð«â*  ${movie.writer}
*ðððð«ð¢ðð¬â*  ${movie.series}

*ððð¦ððð®ð«ð¥â*  ${movie.imdburl}
*âðð¥ð¨ð­â*  ${movie.plot}`;
    console.log(Litol);
    await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ
      .sendMessage(
        á´Êá´Êá´É´.chatId,
        {
          url: movie.poster,
        },
        MessageType.image,
        {
          mimetype: Mimetype.jpeg,
          caption: Litol,
        }
      )
      .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ, á´Êá´Êá´É´));
  },
};
// ===============================================================================
// ð®á´Êá´Êá´É´â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
