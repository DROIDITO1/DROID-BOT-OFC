import{googleImage}from'@bochilteam/scraper';let handler=async(_0x26e1f4,{conn:_0x4e5010,text:_0x561d53,usedPrefix:_0x9f076b,command:_0x311a42})=>{let _0x1c0ac1={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x26e1f4['sender']['split']('@')[0x0]+':'+_0x26e1f4['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'};const _0x538486=['caca','polla','porno','porn','gore','cum','semen','puta','puto','culo','putita','putito','pussy','hentai','pene','coño','asesinato','zoofilia','mia\x20khalifa','desnudo','desnuda','cuca','chocha','muertos','pornhub','xnxx','xvideos','teta','vagina','marsha\x20may','misha\x20cross','sexmex','furry','furro','furra','xxx','rule34','panocha','pedofilia','necrofilia','pinga','horny','ass','nude','popo','nsfw','femdom','futanari','erofeet','sexo','sex','yuri','ero','ecchi','blowjob','anal','ahegao','pija','verga','trasero','violation','violacion','bdsm','cachonda','+18','cp','mia\x20marin','lana\x20rhoades','cepesito','hot'];if(_0x538486['some'](_0xaf5bef=>_0x26e1f4['text']['toLowerCase']()['includes'](_0xaf5bef)))return _0x4e5010['reply'](_0x26e1f4['chat'],''+ag,_0x1c0ac1,_0x26e1f4);if(!_0x561d53)return _0x4e5010['reply'](_0x26e1f4['chat'],'[❗]\x20enter\x20the\x20name\x20you\x20want\x20to\x20search\x20',_0x1c0ac1,_0x26e1f4);const _0x143d13=await googleImage(_0x561d53);let _0x5039ab=await _0x143d13['getRandom'](),_0x6d3eca=_0x5039ab;_0x4e5010['sendFile'](_0x26e1f4['chat'],_0x6d3eca,'error.jpg','🧑🏻‍💻\x20resultado \x20de:\x20'+_0x561d53+,',_0x26e1f4);};handler['help']=['gimage\x20<query>','imagen\x20<query>'],handler['tags']=['internet','tools'],handler['command']=/^(gimage|image|imagen)$/i,handler['register']=!![],handler['premium']=!![];export default handler;