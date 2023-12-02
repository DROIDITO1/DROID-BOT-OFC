import fs from "fs"
let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
if (/^Hola bot| HOLA BOT$/i.test(m.text) && !chat.isBanned) { 
conn.sendPresenceUpdate('recording', m.chat)   
await m.reply(`*Hola, ¿en qué puedo ayudarte hoy?* 
 Si eres un nuevo usuario, puedes registrarte en mi base de datos para aprovechar todos mis comandos.

Puedo ayudarte a crear stickers, descargar videos o música, y responder cualquier tipo de pregunta. Para crear un sticker, usa el comando */s* y para ver mi menú de comandos, utiliza */menu*

o sí quieres registrarte usa el siguiente comando 
: */reg*   `)
conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', seconds: '4556', ptt: true }, { quoted: m })
}
return !0
}
export default handler