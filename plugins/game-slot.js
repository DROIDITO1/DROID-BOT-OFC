let handler = async (m, { args, usedPrefix, command }) => {
let fa = `
*[❗] ingresa la cantidad que desea apostar*

*📌 Ejemplo:*
*${usedPrefix + command} 100*`.trim()
if (!args[0]) throw fa
if (isNaN(args[0])) throw fa
let apuesta = parseInt(args[0])
let users = global.db.data.users[m.sender]
let time = users.lastslot + 10000
if (new Date - users.lastslot < 10000) throw `*⏳ ESPERA ${msToTime(time - new Date())} PARA VOLVER A APOSTAR*`
if (apuesta < 100) throw '*[❗] EL MÍNIMO PARA APOSTAR ES DE 100 XP*'
if (users.exp < apuesta) {
throw `*[❗] Tu xp no es suficiente para apostar esa cantidad, Interactua conmigo o juega otros juegos para ganar xp*`
}
let emojis = ["🦋", "🦢", "🐉"];
let a = Math.floor(Math.random() * emojis.length);
let b = Math.floor(Math.random() * emojis.length);
let c = Math.floor(Math.random() * emojis.length);
let x = [],
y = [],
z = [];
for (let i = 0; i < 3; i++) {
x[i] = emojis[a];
a++;
if (a == emojis.length) a = 0;
}
for (let i = 0; i < 3; i++) {
y[i] = emojis[b];
b++;
if (b == emojis.length) b = 0;
}
for (let i = 0; i < 3; i++) {
z[i] = emojis[c];
c++;
if (c == emojis.length) c = 0;
}
let end;
if (a == b && b == c) {
end = `*GANASTE! 🎁 +${apuesta + apuesta} XP*`
users.exp += apuesta
} else if (a == b || a == c || b == c) {
end = `*🔮 𝙲𝙰𝚂𝙸 𝙻𝙾 𝙻𝙾𝙶𝚁𝙰𝚂!, 𝚂𝙸𝙶𝚄𝙴 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝙽𝙳𝙾*\n*𝚃𝙾𝙼𝙰 +10 XP*`
users.exp += 10
} else {
end = `*❌ PERDISTE -${apuesta} XP*`
users.exp -= apuesta
}
users.lastslot = new Date * 1
return await m.reply(
        `
🎰 | *SLOTS* 
────────
${x[0]} : ${y[0]} : ${z[0]}
${x[1]} : ${y[1]} : ${z[1]}
${x[2]} : ${y[2]} : ${z[2]}
────────
🎰 | ${end}`) 
}
handler.help = ['slot <apuesta>']
handler.tags = ['game']
handler.command = ['slot']
handler.register = true
export default handler

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds

return minutes + " m " + seconds + " s "
}

