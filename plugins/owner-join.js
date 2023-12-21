let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, isOwner, isRegistered }) => {
  let link = (m.quoted ? m.quoted.text ? m.quoted.text : text : text) || text
  let [_, code] = link.match(linkRegex) || []

  if (!code) throw '*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] ERROR VUELVA A INTENTARLO VERIFIQUES QUE SU ENLACE NO ESTÉ VENCIDO UN EJEMPLO\n/join https://chat.whatsapp.com/BgyxmpSY2VYE3MT0UbLAgf*\n\n\n*[ ⚠️ 𝐀𝐋𝐄𝐑𝐓𝐀 ⚠️ ] ERROR TRY AGAIN CHECK THAT YOUR LINK IS NOT EXPIRED AN EXAMPLE\n/join https://chat.whatsapp.com/BgyxmpSY2VYE3MT0UbLAgf'

  if (isOwner) {
    // Si el remitente es el creador, unir al bot al grupo sin cobrar
    let res = await conn.groupAcceptInvite(code)
    await m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚄𝙽𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾, 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙴 𝙳𝙴𝙻 𝙱𝙾𝚃! ✔️*\n\n\n THE BOT HAS JOINED SUCCESSFULLY ENJOY THE BOT✔️`)
  } else if (isRegistered) {
    // Si el remitente es registrado, verificar y cobrar
    const userId = m.sender.split('@')[0]
    const diamondsRequired = 10

    if (checkDiamonds(userId, diamondsRequired)) {
      // Deduce los diamantes
      deductDiamonds(userId, diamondsRequired)

      // Une al bot al grupo
      let res = await conn.groupAcceptInvite(code)
      await m.reply(`*𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚄𝙽𝙸𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾, 𝙳𝙸𝚂𝙵𝚁𝚄𝚃𝙴 𝙳𝙴𝙻 𝙱𝙾𝚃! ✔️*\n\n\n THE BOT HAS JOINED SUCCESSFULLY ENJOY THE BOT✔️`)
    } else {
      // Responder si el usuario no tiene suficientes diamantes
      await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀𝙎 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎 𝙋𝙊𝙍: 𝙏𝙐𝙎 𝘿𝙄𝘼𝙈𝘼𝙉𝙏𝙀𝙎 𝙉𝙊 𝘼𝙇𝘾𝘼𝙉𝙕𝘼𝙉 𝙋𝘼𝙍𝘼 𝚀𝚄𝙴 𝙈𝙀 𝙋𝚄𝙀𝘿𝙊 𝚄𝙉𝙄𝙍 𝙖 𝚃𝚄 𝙶𝚁𝙾𝚄𝙿𝙾. 𝙉𝙀𝘾𝙀𝙎𝙄𝙏𝘼𝙎 10 𝙙𝙞𝙖𝙢𝙖𝙣𝙩𝙚𝙨*')
    }
  } else {
    // Responder si el remitente no es el creador ni está registrado
    await m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙉𝙊 𝙏𝙄𝙀𝙉𝙀𝙎 𝙎𝙐𝙁𝙄𝘾𝙄𝙀𝙉𝙏𝙀𝙎*')
  }
}

handler.help = ['join [chat.whatsapp.com]']
handler.tags = ['premium']
handler.command = /^join|nuevogrupo$/i
handler.register = true
handler.limit = 2
export default handler