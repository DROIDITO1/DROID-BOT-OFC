let handler = async (m, {usedPrefix}) => {          
  let who  
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender  
  else who = m.sender  
  let name = conn.getName(who)   
  m.reply(` 
  🧑🏻‍💻 *Hola:*  ${name}  
  *Aquí tienes mi link*
 https://wa.me/message/IRT5INPY7NEDE1 😻

Únete al canal de mi creador:
https://whatsapp.com/channel/0029Va80EZC5fM5f8fXgsQ0F
`)  
  }  
  handler.help = ['link']  
  handler.tags = ['xp']  
  handler.command = ['Link', 'link', 'botlink', 'ENLACE', 'enlace']   
  handler.register = true  
  export default handler