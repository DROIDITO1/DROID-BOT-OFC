import{createHash}from'crypto';import _0x2fa966 from'awesome-phonenumber';import _0x1e9c93 from'node-fetch';let handler=async(_0x1700d9,{conn:_0x249676,usedPrefix:_0x356e4a,participants:_0x93fe2c,isPrems:_0xbb1844})=>{let _0xdc68bc='https://i.imgur.com/HE1dWt6.png',_0x265900=_0x1700d9['mentionedJid']&&_0x1700d9['mentionedJid'][0x0]?_0x1700d9['mentionedJid'][0x0]:_0x1700d9['fromMe']?_0x249676['user']['jid']:_0x1700d9['sender'];if(!(_0x265900 in global['db']['data']['users']))throw'El\x20usuario\x20que\x20está\x20mencionando\x20no\x20está\x20registrado\x20en\x20mi\x20base\x20de\x20datos';try{_0xdc68bc=await _0x249676['profilePictureUrl'](_0x265900);}catch(_0x2c3d55){}finally{let {name:_0x2c65bc,role:_0x4a8d7c,level:_0x9ced39,limit:_0x2ecec3,money:_0x5bc267,exp:_0xa5846e,joincount:_0x247d9f,lastclaim:_0x2e9040,registered:_0x45ac2f,regTime:_0x18d0a6,age:_0xb3a4a5,premiumTime:_0x8711ce}=global['db']['data']['users'][_0x265900],_0x345e45=_0x249676['getName'](_0x265900),_0x534533=global['prems']['includes'](_0x265900['split']`@`[0x0]),_0x4b7372=createHash('md5')['update'](_0x265900)['digest']('hex'),_0x4ba8cf='⟥⟝⟢⟨\x20*TU-PERFIL*\x20⟩⟣⟞⟤\x0a•\x20*NOMBRE:*\x20'+_0x345e45+'\x20'+(_0x45ac2f?'('+_0x2c65bc+')\x20':'')+'\x0a•\x20*🌐LINK:*\x20wa.me/'+_0x265900['split']`@`[0x0]+(_0x45ac2f?'\x0a*EDAD:*\x20'+_0xb3a4a5+'\x20años':'')+'\x0a•\x20*📝NUMERO\x20DE\x20SERIE:*\x20*'+_0x4b7372+'*\x0a'+no;_0x249676['sendMessage'](_0x1700d9['chat'],{'image':{'url':_0xdc68bc},'caption':_0x4ba8cf},{'quoted':_0x1700d9});}};handler['help']=['profile\x20[@user]'],handler['tags']=['xp'],handler['command']=/^perfil|profile?$/i;export default handler;