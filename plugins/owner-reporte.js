let handler=async(_0x5336de,{conn:_0x50747d,text:_0x3e7091,usedPrefix:_0x206480,command:_0x48bd20})=>{let _0x4c7853={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x5336de['sender']['split']('@')[0x0]+':'+_0x5336de['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'};if(!_0x3e7091)return _0x50747d['reply'](_0x5336de['chat'],'[❗𝐈𝐍𝐅𝐎❗]ENTER\x20A\x20REPORT\x0a\x0a\x20EXAMPLE:\x0a{usedPrefix\x20+\x20command}\x20the\x20'+_0x206480+'play\x20command\x20does\x20not\x20send\x20anything',_0x4c7853,_0x5336de);if(_0x3e7091['length']<0xa)return _0x50747d['reply'](_0x5336de['chat'],'[❗]\x20THE\x20REPORT\x20MUST\x20BE\x20A\x20MINIMUM\x20OF\x2010\x20CHARACTERISTICS',_0x4c7853,_0x5336de);if(_0x3e7091['length']>0x3e8)return _0x50747d['reply'](_0x5336de['chat'],'[❗]\x20THE\x20REPORT\x20MUST\x20BE\x20MAXIMUM\x20CHARACTERS!*',_0x4c7853,_0x5336de);let _0x4ddfe9='❒═════[𝐑𝐄𝐏𝐎𝐑𝐓𝐄]═════❒\x0a┬\x0a├\x20number:*\x20wa.me/'+_0x5336de['sender']['split']`@`[0x0]+'\x0a┴\x0a┬\x0a├\x20message\x20'+_0x3e7091+'\x0a┴';_0x50747d['reply']('50240289706@s.whatsapp.net',_0x5336de['quoted']?_0x4ddfe9+_0x5336de['quoted']['text']:_0x4ddfe9,null,{'contextInfo':{'mentionedJid':[_0x5336de['sender']]}}),_0x50747d['reply'](_0x5336de['chat'],'[\x20✔️\x20]\x20\x20REPORT\x20SENT\x20SUCCESSFULLY\x20BY\x20THE\x20CREATOR\x20OF\x20THE\x20BOT,\x20YOUR\x20REPORT\x20WILL\x20BE\x20ATTENDED\x20AS\x20SOON\x20AS\x20POSSIBLE,\x20IF\x20IT\x20IS\x20A\x20FAILURE\x20OR\x20JOKE,\x20YOU\x20SHOULD\x20JUST\x20IGNORE*',_0x4c7853,_0x5336de);};handler['help']=['reporte','request']['map'](_0x468573=>_0x468573+'\x20<teks>'),handler['tags']=['info'],handler['command']=/^(report|request|reporte|bugs|bug|report-owner|reportes)$/i;export default handler;