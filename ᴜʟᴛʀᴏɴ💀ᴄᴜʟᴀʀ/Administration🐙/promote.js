// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
const โฮนัฮทั = require("../../แดสแดสแดษด/catch");
const { MessageType } = require(`@adiwajshing/baileys`);
const UltronSitreper = require(`../../แดสแดสแดษด/UltronSitreper`);
// โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ
module.exports = {
  name: `promote`,
  commandType: "Administration๐",
  description: `Use this module to promote a member to admin. You can enter the person's mobile number as per the format below. Valid Syntaxes -
1. XXXXXXXXXX
2. YYXXXXXXXXXX ()
For example- *${UltronSitreper.ULTRONIX}promote 9861212121*`,
  async handle(ฯโััฯฮทโฮนัฮทั, chat, แดสแดสแดษด, Arc) {
    try {
      if (!แดสแดสแดษด.isGroup) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `This module is only applicable in a group chat.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      if (!แดสแดสแดษด.isBotGroupAdmin) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Sorry, dont have the permission to do so since I am not an admin.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      if (!แดสแดสแดษด.isReply && typeof Arc[0] == `undefined`) {
        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Reply/tag/enter contact number of the person to be promoted.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
      const reply = chat.message.extendedTextMessage;
      if (แดสแดสแดษด.isReply) {
        var contact = reply.contextInfo.participant.split(`@`)[0];
      } else {
        var contact = async (Arc, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด) => {
          var JoinIDNum = ``;
          var countryCode = UltronSitreper.COUNTRY_CODE;
          if (isNaN(Arc[0]) || Arc[0][0] === `+`) {
            if (Arc[0][0] === `@` || Arc[0][0] === `+`) {
              JoinIDNum = Arc[0].substring(1, Arc[0].length + 1);
            } else {
              await ฯโััฯฮทโฮนัฮทั
                .sendMessage(แดสแดสแดษด.chatId, "โ", MessageType.text)
                .catch((cแดสสแดส) => {
                  โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
                });
              await ฯโััฯฮทโฮนัฮทั
                .sendMessage(
                  แดสแดสแดษด.chatId,
                  {
                    url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
                  },
                  MessageType.image,
                  {
                    mimetype: Mimetype.jpeg,
                    caption: `*โ?๏ธSeems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
                  }
                )
                .catch((cแดสสแดส) => {
                  โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
                });
              return;
            }
          } else {
            JoinIDNum = Arc[0];
          }

          if (JoinIDNum.length < 8 || JoinIDNum.length > 13) {
            await ฯโััฯฮทโฮนัฮทั
              .sendMessage(แดสแดสแดษด.chatId, "โ", MessageType.text)
              .catch((cแดสสแดส) => {
                โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
              });
            await ฯโััฯฮทโฮนัฮทั
              .sendMessage(
                แดสแดสแดษด.chatId,
                {
                  url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
                },
                MessageType.image,
                {
                  mimetype: Mimetype.jpeg,
                  caption: `*โ?๏ธSeems like someone forgot to give Movie/Series name!*

*Usage Example*
.imdb <movie/series>`,
                }
              )
              .catch((cแดสสแดส) => {
                โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
              });
            return;
          } else if (JoinIDNum.length === 10) {
            JoinIDNum = countryCode + JoinIDNum;
          }
          var isOnWhatsApp = await ฯโััฯฮทโฮนัฮทั.isOnWhatsApp(JoinIDNum);
          if (isOnWhatsApp === undefined) {
            throw `NumberInvalid`;
          }
          return JoinIDNum;
        };
      }

      var admin = false;
      var isMember = async (chatId, groupMembers) => {
        var isMember = false;
        if (!(chatId === undefined)) {
          for (const index in groupMembers) {
            if (chatId == groupMembers[index].jid.split(`@`)[0]) {
              isMember = true;
            }
          }
          return isMember;
        } else {
          return isMember;
        }
      };
      for (const index in แดสแดสแดษด.groupMembers) {
        if (contact == แดสแดสแดษด.groupMembers[index].jid.split(`@`)[0]) {
          if (แดสแดสแดษด.groupMembers[index].isAdmin) {
            admin = true;
          }
        }
      }
      if (isMember) {
        if (!admin == true) {
          const arr = [contact + `@s.whatsapp.net`];
          ฯโััฯฮทโฮนัฮทั.groupMakeAdmin(แดสแดสแดษด.chatId, arr);
          ฯโััฯฮทโฮนัฮทั
            .sendMessage(
              แดสแดสแดษด.chatId,
              `*` + contact + ` promoted to admin*`,
              MessageType.text
            )
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
            });
        } else {
          ฯโััฯฮทโฮนัฮทั
            .sendMessage(
              แดสแดสแดษด.chatId,
              `*` + contact + ` is already an admin*`,
              MessageType.text
            )
            .catch((cแดสสแดส) => {
              โฮนัฮทั.catch((cแดสสแดส, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
            });
        }
      }
      if (!isMember) {
        if (contact === undefined) {
          return;
        }

        ฯโััฯฮทโฮนัฮทั
          .sendMessage(
            แดสแดสแดษด.chatId,
            `Person is not in the group.`,
            MessageType.text
          )
          .catch((error) => โฮนัฮทั.catch(error, ฯโััฯฮทโฮนัฮทั, แดสแดสแดษด));
        return;
      }
    } catch (cแดสสแดส) {
      if (cแดสสแดส === `NumberInvalid`) {
        ฯโััฯฮทโฮนัฮทั.sendMessage(
          แดสแดสแดษด.chatId,
          `*๐ฎแดสแดสแดษดโข* ๐๐ข๐๐ง'๐ญ ๐ฐ๐จ๐ซ๐ค ๐๐ฌ ๐๐ฑ๐ฉ๐๐๐ญ๐๐โ

๐ก๐๐ฒ๐ฟ๐ฒ ๐ถ๐ ๐ฎ ๐๐บ๐ฎ๐น๐น ๐ฒ๐ฟ๐ฟ๐ผ๐ฟ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐ฎ๐ป๐ฑ ๐๐ผ ๐น๐ผ๐ด ๐๐ต๐ฒ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐๐๐ฒ ${UltronSitreper.ULTRONIX}๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐
โ?๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${cแดสสแดส}`,
          MessageType.text
        );
      } else {
        await ฯโััฯฮทโฮนัฮทั.sendMessage(
          แดสแดสแดษด.chatId,
          `*๐ฎแดสแดสแดษดโข* ๐๐ข๐๐ง'๐ญ ๐ฐ๐จ๐ซ๐ค ๐๐ฌ ๐๐ฑ๐ฉ๐๐๐ญ๐๐โ

๐ก๐๐ฒ๐ฟ๐ฒ ๐ถ๐ ๐ฎ ๐๐บ๐ฎ๐น๐น ๐ฒ๐ฟ๐ฟ๐ผ๐ฟ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐ฎ๐ป๐ฑ ๐๐ผ ๐น๐ผ๐ด ๐๐ต๐ฒ ๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐ ๐๐๐ฒ ${UltronSitreper.ULTRONIX}๐ฟ๐ฒ๐ฝ๐ผ๐ฟ๐
โ?๏ธ๐๐ฟ๐ฟ๐ผ๐ฟ
โข ${cแดสสแดส}`,
          MessageType.text
        );
      }
    }
  },
};
// ===============================================================================
// ๐ฎแดสแดสแดษดโข ๐๐ฅ๐ท๐ข๐ฏ๐ค๐ฆ ๐๐ฉ๐ข๐ต๐ด๐ข๐ฑ๐ฑ ๐๐ด๐ฆ๐ณ๐ฃ๐ฐ๐ต ๐๐ช๐ต๐ฉ 80+ ๐๐ฐ๐ฎ๐ฎ๐ข๐ฏ๐ฅ๐ด ๐ง๐ฐ๐ณ ๐ฃ๐ฐ๐ต๐ฉ ๐๐ณ๐ช๐ท๐ข๐ต๐ฆ ๐ข๐ฏ๐ฅ ๐๐ถ๐ฃ๐ญ๐ช๐ค..
// ===============================================================================
