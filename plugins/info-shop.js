let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `╭「➻❥DROID-8-MD➻❥」
│➯➻❥ *TIENDA-COMPRAS*➻❥
│➯ *.busyall*
│➯ *.bus <cantidad>* 
│➯ *.buyall <gastas toda tu exp por 💎.>*
│➯ *.buy <cantidad>* 
│➯ *.dolares <te cobra 💎>*
︎╰─────────────╯
💎᭢━━━━━━━━━᭥💎᭢
╭「COMANDOS DE RECOMPENSAS DIARIAS」
│➯ /claim
│➯ /coffer 
│➯ /minar
│➯ /minar2 
│➯ /minar3
╰─────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥ *EXTR* ➻❥」
│➯ *.bal*
│➯ *.sell
│➯ *.listprem*
︎╰─────────────╯`.trim()   
let buttonMessage= {
'document': { url: `https://tiktok.com/@tony.1p` },
'mimetype': `application/${document}`,
'fileName': `DROID-8-MD`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://tiktok.com/@tony.1p',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://tiktok.com/@tony.1p' }},
'caption': text,
'footer': wm,
//'buttons':[
//{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '𝙼𝙴𝙽𝚄'}, type: 1}, 
//{buttonId: `${usedPrefix}donar`, buttonText: {displayText: '𝙳𝙾𝙽𝙰𝚁'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']
handler.command = /^(shop|Shop)$/i
handler.register = true
export default handler