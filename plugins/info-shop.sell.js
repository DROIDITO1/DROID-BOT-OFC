let handler = async (m, {usedPrefix}) => {         
 let who 
 if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender 
 else who = m.sender 
 let name = conn.getName(who)  
 m.reply(`╭「➻❥𝐃𝐑𝐎𝐈𝐃-8-𝐌𝐃➻❥」 
 │   *TIENDA* 🏪  
 │┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈ 
 │🧑🏻‍💻 *HOLA:* ${name} 
 │compras de *diamantes/dólares*
 │💎 /buy [cantidad]
 │💎 /buyall 
 │💎 /bus
 │💵 /dólares <cantidad>
 │ *--------------------*
 │👑 Compras  *precio* 👇
 │/prem1 <cantidad> *[15  dolares]*
 │/prem2 <cantidad> *[25  dolares]*
 │/prem3 <cantidad> *[35  dolares]*
 │/prem4 <cantidad> *[50  dolares]*
 │/prem5 <cantidad> *[60  dolares]*
 │/prem6 <cantidad> *[70  dolares]*
 │/prem7 <cantidad> *[80  dolares]*
 │/prem8 <cantidad> *[100 dolares]*
 │ *Compras premium*  ⬆️
 ╭「
 │/bal [para ver toda tú xp/💎/💵] 
 ╰──────────────╯`) 
 } 
 handler.help = ['sell'] 
 handler.tags = ['xp'] 
 handler.command = ['sell', 'sell1', 'premium', 'shop3', 'shop2']  
 handler.register = true 
 export default handler