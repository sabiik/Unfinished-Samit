const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
    name: "admin",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "ULLASH", //don't change my credit 
    description: "Show Owner Info",
    commandCategory: "info",
    usages: "",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    var time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

    var callback = () => api.sendMessage({
        body: `
┏━━━━━━━━━━━━━━━━━━━━━┓
┃      🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟      
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 👤 𝐍𝐚𝐦𝐞      : Samit ッ
┃ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥𝐞
┃ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : Pure Signle
┃ 🎂 𝐀𝐠𝐞       : 20
┃ 🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
┃ 🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : Running
┃ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : Rangpur,𝐁𝐚𝐧𝐠𝐥𝐚𝐝𝐞𝐬𝐡
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🎭 Website : https://sites.google.com/view/unheard-samit/home
┃ 📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : https://t.me/Freeinternetforce
┃ 🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/profile.php?id=61576304950996
┣━━━━━━━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━━━━━━━┛
        `,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")
    }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));
  
    return request(encodeURI(`https://https://scontent.frjh7-2.fna.fbcdn.net/v/t39.30808-1/507123193_122117449598876831_8880824418305430775_n.jpg?stp=c81.0.1080.1080a_dst-jpg_s200x200_tt6&_nc_cat=100&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGZOvpCWL772QdqPx-3QeRpquctm1uL5OWq5y2bW4vk5ZapOaja4g_VXotQ6ODzkKw0YnfxtmgX5aatDTNKipoL&_nc_ohc=UJQpCDN32MIQ7kNvwEQKP5F&_nc_oc=AdlbFworyqcghIZRcTOZU2tP9bMjCZuituGVSl56Crlv6Fa_LyUkAUrUWewpQvgpeok&_nc_zt=24&_nc_ht=scontent.frjh7-2.fna&_nc_gid=pAnCRxSGtNJ8ChMmHGdN9g&oh=00_AfRRhZpap3Viaee3H6Skbx-_uZg03WtLLe_iqL3M7beI8A&oe=68816DE8`))
        .pipe(fs.createWriteStream(__dirname + '/cache/1.png'))
        .on('close', () => callback());
};
