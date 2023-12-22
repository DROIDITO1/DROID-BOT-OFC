let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
    let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text;
    let [_, code] = link.match(linkRegex) || [];

    if (!code) throw '*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] ERROR VUELVA A INTENTARLO VERIFIQUES QUE SU ENLACE NO ESTÉ VENCIDO UN EJEMPLO';

    if (isPrems || isMods || isOwner || m.fromMe) {
        let res = await conn.groupAcceptInvite(code);
        await m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚄𝙽𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾, 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙴 𝙳𝙴𝙻 𝙱𝙾𝚃! ✔️*\n\n\n THE BOT HAS JOINED SUCCESSFULLY ENJOY THE BOT✔️`);
    } else {
        const diamondsRequired = 5;

        // Verificar si m.mentionedJidList está definido y tiene al menos 5 diamantes
        if (m.mentionedJidList && m.mentionedJidList.length >= diamondsRequired) {
            await conn.groupAcceptInvite(code);
            await m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚄𝙽𝙸Ó 𝙳𝙴𝙻 𝙻𝙸𝙽𝙺 𝙿𝙾𝚁 𝙲𝙾𝙽𝙴𝚇𝙸𝙾𝙽 𝙳𝙴 ${diamondsRequired} 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 ✔️*\n\n\n THE BOT HAS JOINED SUCCESSFULLY ENJOY THE BOT✔️`);
        } else {
            await m.reply(`*[❗𝐈𝐍𝐅𝐎❗] SE REQUIEREN AL MENOS ${diamondsRequired} DIAMANTES PARA QUE EL BOT SE UNA AL GRUPO [❗𝐈𝐍𝐅𝐎❗]*`);
        }
    }
};

handler.help = ['join [chat.whatsapp.com]'];
handler.tags = ['register'];
handler.command = /^join|nuevogrupo$/i;
handler.register = true;
handler.limit = 2;
export default handler;