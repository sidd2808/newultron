// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../แดสแดสแดษด/UltronSitreper`);
const โฮนัฮทั = require("../../แดสแดสแดษด/catch");
const got = require(`got`);
// โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
module.exports = {
  name: `lyrics`,
  commandType: "Music๐",
  description: `Use this module to find the lyrics of a song by using  *${UltronSitreper.ULTRONIX}lyrics*  module.`,
  async handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc) {
    var song = ``;
    if (แดสแดสแดษด.isReply) {
      song = แดสแดสแดษด.replyMessage;
    } else if (Arc.length === 0) {
      return await ฯโััฯฮทโฮนัฮทั
        .sendMessage(
          แดสแดสแดษด.chatId,
          {
            url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*โ ๏ธSeems like someone forgot to give song name!*

*Usage Example*
${UltronSitreper.ULTRONIX}lyrics <song-name>`,
          }
        )
        .catch((cแดสสแดส) => {
          โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        });
    } else {
      song = Arc.join(` `);
    }
    await ฯโััฯฮทโฮนัฮทั
      .sendMessage(
        แดสแดสแดษด.chatId,
        `Searching. Please wait....`,
        MessageType.text
      )
      .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
    let API = await got(`https://some-random-api.ml/lyrics/?title=${song}`);
    let APIData = JSON.parse(API.body);
    let caption =
      `*Title :* ` +
      APIData.title +
      `\n*Author :* ` +
      APIData.author +
      `\n*Lyrics :*\n` +
      APIData.lyrics;
    await ฯโััฯฮทโฮนัฮทั
      .sendMessage(
        แดสแดสแดษด.chatId,
        {
          url: APIData.thumbnail.genius,
        },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          caption: caption,
        }
      )
      .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
  },
};
// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
