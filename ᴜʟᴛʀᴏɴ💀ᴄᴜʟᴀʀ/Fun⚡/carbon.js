// ===============================================================================
// ð®á´Êá´Êá´É´â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Carbon = require(`unofficial-carbon-now`);
const âÎ¹ÑÎ·Ñ = require("../../á´Êá´Êá´É´/catch");
const UltronSitreper = require(`../../á´Êá´Êá´É´/UltronSitreper`);
// ââââââââââââââââââââââââââââââââââââââââââââ
module.exports = {
  name: `carbon`,
  commandType: "Funâ¡",
  description: `This module can be used to convert text/code into carbon images.
Example Usage,
*${UltronSitreper.ULTRONIX}carbon <text>* 
*${UltronSitreper.ULTRONIX}carbon*  and reply to a text message.
Use the -t flag after  *${UltronSitreper.ULTRONIX}carbon*  to get the list of themes availble.
In order to specify the theme, use  *${UltronSitreper.ULTRONIX}carbon <text> -t <theme>* .`,
  async handle(ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ, chat, á´Êá´Êá´É´, Arc) {
    try {
      let themes = [
        `3024 night`,
        `a11y dark`,
        `blackboard`,
        `base 16 (dark)`,
        `base 16 (light)`,
        `cobalt`,
        `duotone`,
        `hopscotch`,
        `lucario`,
        `material`,
        `monokai`,
        `night owl`,
        `nord`,
        `oceanic next`,
        `one light`,
        `one dark`,
        `panda`,
        `paraiso`,
        `seti`,
        `shades of purple`,
        `solarized (dark)`,
        `solarized (light)`,
        `synthwave '84`,
        `twilight`,
        `verminal`,
        `vscode`,
        `yeti`,
        `zenburn`,
      ];
      var code = ``;
      if (Arc[0] == null && !á´Êá´Êá´É´.isReply) {
        await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ
          .sendMessage(
            á´Êá´Êá´É´.chatId,
            {
              url: `https://i.postimg.cc/MGkpdxHT/ltr-Args.png`,
            },
            MessageType.image,
            {
              mimetype: Mimetype.jpeg,
              caption: `*â¢ï¸á´Êá´Êá´É´*\n\nNo input provided.
Please use the module  
*${UltronSitreper.ULTRONIX}carbon <text> -t <theme>*  
or reply to a text message with  
*${UltronSitreper.ULTRONIX}carbon*  to carbonize the text.

*----> ðððððð <----*
_3024 night_  *|*  _a11y dark_  
_blackboard_  *|*  _base 16 (dark)_ 
_base 16 (light)_  *|*  _cobalt_ 
_duotone_  *|*  _hopscotch_
_lucario_  *|*  _material_ 
_monokai_  *|*  _night owl_ 
_nord_  *|*  _oceanic next_
_one light_  *|*  _one dark_
_panda_  *|*  _paraiso_
_seti_  *|*  _shades of purple_ 
_solarized (dark)_ 
_solarized (light)_
_synthwave '84_  *|*  _twilight_
_verminal_  *|*  _vscode_  
_yeti_  *|*  _zenburn_`,
            }
          )
          .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ, á´Êá´Êá´É´));
        return;
      } else if (á´Êá´Êá´É´.isReply && !á´Êá´Êá´É´.replyMessage) {
        await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ
          .sendMessage(
            á´Êá´Êá´É´.chatId,
            `*â¢ï¸á´Êá´Êá´É´*\n\nThe replied message should be text.`,
            MessageType.text
          )
          .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ, á´Êá´Êá´É´));
        return;
      } else if (á´Êá´Êá´É´.isReply) {
        code = á´Êá´Êá´É´.replyMessage;
        themeInput = themes[Math.floor(Math.random() * themes.length)];
      } else {
        try {
          var text = á´Êá´Êá´É´.body.replace(
            á´Êá´Êá´É´.body[0] + á´Êá´Êá´É´.moduleName + ` `,
            ``
          );
          if (text[0] === `-` && text[1] === `t`) {
            if (text[2] == null) {
              let counter = 1;
              var message = `*â¢ï¸á´Êá´Êá´É´*\n\nAvailable themes: `;
              themes.forEach((theme) => {
                message += `\n${counter}. ${theme}`;
                counter += 1;
              });
              await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ.sendMessage(
                á´Êá´Êá´É´.chatId,
                `` + message + ``,
                MessageType.text
              );
              return;
            } else {
              await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ
                .sendMessage(
                  á´Êá´Êá´É´.chatId,
                  `*â¢ï¸á´Êá´Êá´É´*\n\nNo input provided.
Please use the module  *${UltronSitreper.ULTRONIX}carbon <text>*  or reply to a text message with  *${UltronSitreper.ULTRONIX}carbon*  to carbonize the text.`,
                  MessageType.text
                )
                .catch((cá´ÊÊá´Ê) => {
                  âÎ¹ÑÎ·Ñ.catch((cá´ÊÊá´Ê, ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ, á´Êá´Êá´É´));
                });
              return;
            }
          }
          var body = á´Êá´Êá´É´.body.split(`-t`);
          code = body[0].replace(á´Êá´Êá´É´.body[0] + á´Êá´Êá´É´.moduleName + ` `, ``);
          themeInput = body[1].substring(1);
          if (!themes.includes(themeInput)) {
            await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ
              .sendMessage(
                á´Êá´Êá´É´.chatId,
                `*â¢ï¸á´Êá´Êá´É´*\n\nPlease enter a valid theme.
Do note that theme names are  *case sensitive*${UltronSitreper.ULTRONIX}`,
                MessageType.text
              )
              .catch((cá´ÊÊá´Ê) => {
                âÎ¹ÑÎ·Ñ.catch((cá´ÊÊá´Ê, ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ, á´Êá´Êá´É´));
              });
            return;
          }
        } catch (cá´ÊÊá´Ê) {
          if (cá´ÊÊá´Ê instanceof TypeError) {
            code = á´Êá´Êá´É´.body.replace(
              á´Êá´Êá´É´.body[0] + á´Êá´Êá´É´.moduleName + ` `,
              ``
            );
            themeInput = themes[Math.floor(Math.random() * themes.length)];
          }
        }
      }
      try {
        await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ
          .sendMessage(
            á´Êá´Êá´É´.chatId,
            `*â¢ï¸á´Êá´Êá´É´*\n\nConverting your text into a code snippet. Please wait...`,
            MessageType.text
          )
          .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ, á´Êá´Êá´É´));
        const carbon = new Carbon.createCarbon()
          .setCode(code)
          .setPrettify(true)
          .setTheme(themeInput);
        const output = await Carbon.generateCarbon(carbon);
        await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ
          .sendMessage(á´Êá´Êá´É´.chatId, output, MessageType.image, {
            mimetype: Mimetype.png,
            caption: `*â¢ï¸á´Êá´Êá´É´*\n\n
*<< Here's your carbon image! >>*
Colour Scheme: {}`.format(themeInput),
          })
          .catch((error) => âÎ¹ÑÎ·Ñ.catch(error, ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ, á´Êá´Êá´É´));
      } catch (cá´ÊÊá´Ê) {
        throw cá´ÊÊá´Ê;
      }
    } catch (cá´ÊÊá´Ê) {
      await ÏâÑÑÏÎ·âÎ¹ÑÎ·Ñ.sendMessage(
        á´Êá´Êá´É´.chatId,
        `*ð®á´Êá´Êá´É´â¢* ðð¢ðð§'ð­ ð°ð¨ð«ð¤ ðð¬ ðð±ð©ððð­ððâ

ð¡ðð²ð¿ð² ð¶ð ð® ððºð®ð¹ð¹ ð²ð¿ð¿ð¼ð¿ ð¿ð²ð½ð¼ð¿ð ð®ð»ð± ðð¼ ð¹ð¼ð´ ððµð² ð¿ð²ð½ð¼ð¿ð ððð² ${UltronSitreper.ULTRONIX}ð¿ð²ð½ð¼ð¿ð
â ï¸ðð¿ð¿ð¼ð¿
â¢ ${cá´ÊÊá´Ê}`,
        MessageType.text
      );
    }
  },
};
// ===============================================================================
// ð®á´Êá´Êá´É´â¢ ðð¥ð·ð¢ð¯ð¤ð¦ ðð©ð¢ðµð´ð¢ð±ð± ðð´ð¦ð³ð£ð°ðµ ððªðµð© 80+ ðð°ð®ð®ð¢ð¯ð¥ð´ ð§ð°ð³ ð£ð°ðµð© ðð³ðªð·ð¢ðµð¦ ð¢ð¯ð¥ ðð¶ð£ð­ðªð¤..
// ===============================================================================
