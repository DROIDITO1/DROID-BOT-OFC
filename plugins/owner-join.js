let linkRegex=/chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i,handler=async(_0x2dfc8b,{conn:_0x1c6165,text:_0x34d773,isMods:_0x186caf,isOwner:_0x47a671,isRegistered:_0x246328})=>{let _0x1f1f94=(_0x2dfc8b['quoted']?_0x2dfc8b['quoted']['text']?_0x2dfc8b['quoted']['text']:_0x34d773:_0x34d773)||_0x34d773,[_0x3933cc,_0x2c74d6]=_0x1f1f94['match'](linkRegex)||[];if(!_0x2c74d6)throw'🧑🏻‍💻\x20Ocurrió \x20un\x20error.\x20Por\x20favor,\x20inténtalo\x20de\x20nuevo.';if(_0x246328||_0x186caf||_0x47a671||_0x2dfc8b['fromMe']){let _0x368347=await _0x1c6165['groupAcceptInvite'](_0x2c74d6);await _0x2dfc8b['reply']('THE\x20BOT\x20HAS\x20JOINED\x20SUCCESSFULLY\x20ENJOY\x20THE\x20BOT✔️');}else{const _0x33f568=global['o
register']['filter'](([_0x5cafbf])=>_0x5cafbf);for(let _0x12927a of _0x33f568['map'](([_0x18bc89])=>[_0x18bc89]+'@s.whatsapp.net')['filter'](_0x3069d8=>_0x3069d8!=_0x1c6165['user']['jid']))await _0x2dfc8b['reply']('[❗𝐈𝐍𝐅𝐎❗]\x20BOT\x20REQUEST\x20FOR\x20A\x20GROUP\x20[❗𝐈𝐍𝐅O❗]*\x0a\x0a*—◉\x20REQUEST\x20NUMBER:*\x20'+'wa.me/'+_0x2dfc8b['sender']['split']('@')[0x0]+'\x0a*—◉\x20LINK\x20WHERE\x20THE\x20BOT\x20IS\x20REQUESTED*'+_0x1f1f94,_0x12927a);await _0x2dfc8b['reply']('El comando tiene un error; inténtelo más tarde.');}};handler['help']=['join\x20[chat.whatsapp.com]'],handler['tags']=['register'],handler['command']=/^join|nuevogrupo$/i,handler['register']=!![],handler['register']=!![];handler['xp']=!![],handler['limit']=0x5;export default handler;