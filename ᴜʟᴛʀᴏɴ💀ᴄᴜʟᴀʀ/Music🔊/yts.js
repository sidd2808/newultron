// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../แดสแดสแดษด/UltronSitreper`);
const โฮนัฮทั = require("../../แดสแดสแดษด/catch");
const getVideoId = require("get-video-id");
const yts = require(`yt-search`);
// โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
module.exports = {
  name: `yts`,
  commandType: "Music๐",
  description: `Get the first 10 recommendations from YouTube with their authorname, timestamp and link. Mention the FetchedLinks that are required to be searched along with the module.`,
  async handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc) {
    if (Arc.length === 0) {
      return await ฯโััฯฮทโฮนัฮทั
        .sendMessage(
          แดสแดสแดษด.chatId,
          {
            url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
          },
          MessageType.image,
          {
            mimetype: Mimetype.jpeg,
            caption: `*โ ๏ธSeems like someone forgot to give song-name!*

*Usage Example*
${UltronSitreper.ULTRONIX}yts <song-name>

*NOTE:*
You Can Get download audio by using ${UltronSitreper.ULTRONIX}ytdl <song-url>`,
          }
        )
        .catch((cแดสสแดส) => {
          โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        });
    }
    const FetchedLink = await yts(Arc.join(` `));
    const videos = FetchedLink.videos.slice(0, 5);
    var Fetched = ``;
    videos.forEach(function (youfound) {
      const { id } = getVideoId(youfound.url);
      Fetched =
        Fetched +
        `*๐ฅณ๐๐ข๐ญ๐ฅ๐โฌ* ${youfound.title}
*๐๐๐ข๐๐ฐ๐ฌโฌ* ${youfound.views}
*๐๐๐ฎ๐ซ๐๐ญ๐ข๐จ๐งโฌ* ${youfound.timestamp}
*๐๐๐ฎ๐ญ๐ก๐จ๐ซโฌ* ${youfound.author.name}
*๐๐๐ข๐ง๐คโฌ* ${youfound.url}
*๐ฅ๐๐จ๐ฐ๐ง๐ฅ๐จ๐๐๐ซโฌ* https://www.youtubepp.com/watch?v=${id}\n\n`;
    });
    if (Fetched === ``) {
      ฯโััฯฮทโฮนัฮทั
        .sendMessage(
          แดสแดสแดษด.chatId,
          `No videos could be found.`,
          MessageType.text
        )
        .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
      return;
    }
    const c = Arc.join(` `);
    ฯโััฯฮทโฮนัฮทั
      .sendMessage(
        แดสแดสแดษด.chatId,
        {
          url: `https://i.postimg.cc/D0N0BK4y/yts.png`,
        },
        MessageType.image,
        {
          mimetype: Mimetype.png,
          caption:
            `แดสแด๊ฑแด แดสแด แดสแด *๊ฐษชส๊ฑแด-5* แดแด๊ฑแด แดแดแดแดสษชษดษข ๊ฑแดแดสแดส สแด๊ฑแดสแด๊ฑ ๊ฐแดส:
*๐: ${c.toUpperCase()}*\n\n` + Fetched,
        }
      )
      .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
  },
};
// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
