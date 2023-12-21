let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isRegistered }) => {
  let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
  let [_, code] = link.match(linkRegex) || []

  if (!code) throw '*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] ERROR VUELVA A INTENTARLO VERIFIQUES QUE SU ENLACE NO ESTÉ VENCIDO UN EJEMPLO\n\n/join https://chat.whatsapp.com/GQnDkiNEyio2euVeq9FMkV'

  if (isRegistered) {
    // Assuming a function deductDiamonds(userId, amount) to deduct diamonds from user
    const userId = m.sender.split('@')[0]
    const diamondsToDeduct = 10

    // Check if user has enough diamonds
    // If not, you can throw an error or handle it accordingly
    // If yes, deduct diamonds and proceed with joining the group
    // Example: deductDiamonds(userId, diamondsToDeduct)

    let res = await conn.groupAcceptInvite(code)
    await m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚄𝙽𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾, 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙴 𝙳𝙴𝙻 𝙱𝙾𝚃! ✔️*\n\n\n THE BOT HAS JOINED SUCCESSFULLY ENJOY THE BOT✔️`)
  } else {
    await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙽𝚄𝙴𝚅𝙰 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝚄𝙳 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾 [❗𝐈𝐍𝐅𝐎❗]*\n\n*—◉ 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴𝙻 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝙽𝚃𝙴:* ' + 'wa.me/' + m.sender.split('@')[0] + '\n*—◉ 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙾𝙽𝙳𝙴 𝚂𝙴 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝙰𝙽𝚃𝙴:*\n\n\n*[❗𝐈𝐍𝐅𝐎❗] BOT REQUEST FOR A GROUP [❗𝐈𝐍𝐅O❗]*\n\n*—◉ REQUEST NUMBER:* ' + 'wa.me/' + m.sender.split('@')[ 0] + '\n*—◉ LINK WHERE THE BOT IS REQUESTED*' + link)
  }
}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|nuevogrupo$/i
handler.register = true
handler.limit = 10
export default handler