import fetch from 'node-fetch'
import axios from 'axios'

let handler = async (m, { conn, args, usedPrefix, command }) => {
m.react(rwait)

let type = (command).toLowerCase()

switch (type) {

        case 'loli':
             let img = await conn.getFile(global.API('fgmods', '/api/loli', {}, 'apikey'))
             let loli = img.data 
             conn.sendButton(m.chat, `🧑🏻‍💻️ aquí tienes ${command}`, igfg, loli, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]], m)
             m.react(dmoji) 
        break

case 'waifu':
case 'megumin':
case 'neko':
  let res = await fetch(`https://api.waifu.pics/sfw/${command}`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '📵 Error'
    conn.sendButton(m.chat, `✔️ Aqui tienes ${command}`, igfg, json.url, [['▷▷ SIGUIENTE', `${usedPrefix + command}`]], m)
   m.react(dmoji) 
break


default:
 }
}

handler.help = ['waifu2', 'neko2', 'megumin2', 'loli']
handler.tags = ['nime']
handler.command = ['waifu2', 'neko2', 'megumin2', 'loli'] 

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}