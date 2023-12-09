let handler = async (m, { conn, usedPrefix }) => {
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let text = `╭「➻❥DROID-8-MD➻❥」
│➯➻❥ *TIENDA-COMPRAS* ➻❥
│➯ *.busyall
│➯ *.bus <cantidad>* 💎
│➯ *.buyall
│➯ *.buy <cantidad>* 🧿
│➯ *.dolares te cobra diamantes*
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「COMANDOS DE RECOMPENSAS DIARIAS」
│➯ /claim
│➯ /coffer 
│➯ /minar
│➯ /minar2 
│➯ /minar3
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭「➻❥ *🪙DINERO🪙* ➻❥」
│➯ *para ver todo tu dinero usa el comando*
│➯ *.bal*
│➯ *.dinero*
│➯ *Para ver tu tiempo de premium*
│➯ *.listprem*
︎╰───────────────╯`.trim()   
let buttonMessage= {
'document': { url: `https://github.com/OFC-YOVANI/HADES-BOT-OMEGA` },
'mimetype': `application/${document}`,
'fileName': `⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://github.com/OFC-YOVANI/HADES-BOT-OMEGA',
'mediaType': 2,
'previewType': 'pdf',
'title': 'ᴇʟ ᴍᴇᴊᴏʀ ʙᴏᴛ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ⁩',
'body': wm,
'thumbnail': imagen1,
'sourceUrl': 'https://youtu.be/4eA5nDxPjOA' }},
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
handler.command = /^(shop|Shop|sell|Sell)$/i
handler.register = true
export default handler