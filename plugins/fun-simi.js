import translate from '@vitalets/google-translate-api'
import fetch from "node-fetch"
let handler = async (m, { text, command, args, usedPrefix }) => {
  if (!text) throw `*Hola quiere hablar un rato conmigo?* *escriba un texto para hablar conmigo*\n\n*Ejemplo: ${usedPrefix + command} Hola bot*`
  try {
  await conn.sendPresenceUpdate('composing', m.chat)
  let api = await fetch("https://api.simsimi.net/v2/?text=" + text + "&lc=es"))

}
handler.help = ['simsimi']
handler.tags = ['General']
handler.command = ['bot', 'simi', 'simsimi', 'preg', 'pregunta'] 
export default handler