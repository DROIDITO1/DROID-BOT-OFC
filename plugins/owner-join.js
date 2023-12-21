let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isMods, isOwner, isPrems }) => {
let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
let [_, code] = link.match(linkRegex) || []

if (!code) throw '🧑🏻‍💻 Ocurrió un error, por favor verifica que tu enlace no esté restablecido. Por ejemplo:\n\n*/join https://chat.whatsapp.com/GQnDkiNEyio2euVeq9FMkV*  Inténtalo de nuevo.'

}
let res = await conn.groupAcceptInvite(code)
await m.reply(`*Ya me he unido a tu grupo. Espero poder serte de mucha ayuda. 🤖`)
} else {
const data = global.owner.filter(([id]) => id)

for (let jid of data.map(([id]) => [id] + '@s.whatsapp.net').filter(v => v != conn.user.jid)) await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝚄𝙴𝚅𝙰 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝚄𝙳 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾 [❗𝐈𝐍𝐅𝐎❗]*\n\n*—◉ 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝙽𝚃𝙴:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙾𝙽𝙳𝙴 𝚂𝙴 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰 𝙴𝙻 𝙱𝙾𝚃:*\n\n\n*[❗𝐈𝐍𝐅𝐎❗] BOT REQUEST FOR A GROUP [❗𝐈𝐍𝐅O❗]*\n\n*—◉ REQUEST NUMBER:* ' + 'wa.me/' + m.sender.split('@')[ 0] + '\n*—◉ LINK WHERE THE BOT IS REQUESTED*' + link, jid)
await m.reply('*Hubo un error. El error ha sido enviado al creador.* 🧑🏻‍💻')}}
handler.help = ['join [chat.whatsapp.com]']
handler.command = /^join|nuevogrupo|unirse|entrar$/i
handler.register = true
handler.limit = 2
export default handler