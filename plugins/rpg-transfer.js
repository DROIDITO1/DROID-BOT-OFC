const items=['limit','exp','joincount'],confirmation={};async function handler(_0x1495ac,{conn:_0x3d5b9f,args:_0x2d9681,usedPrefix:_0x159a3a,command:_0x2da0e3}){if(confirmation[_0x1495ac['sender']])return _0x3d5b9f['sendMessage'](_0x1495ac['chat'],{'text':'[❗]\x20parece\x20que\x20todavia\x20hay\x20fondos\x20en\x20transferencia,\x20Espere\x20un\x20momento.\x20','mentions':[_0x1495ac['sender']]},{'quoted':_0x1495ac});const _0x30e5a2=global['db']['data']['users'][_0x1495ac['sender']],_0xd6dde0=items['filter'](_0x514ff1=>_0x514ff1 in _0x30e5a2&&typeof _0x30e5a2[_0x514ff1]=='number'),_0x289862=('乂✰Transfer\x20Items✰乂\x0a乂✰limit\x20=\x20diamante\x20ღ\x0a乂✰exp\x20=\x20experiencia\x20ღ\x0a乂✰joincount\x20=\x20dolares\x20ღ\x0a\x0a✳️\x20Command\x20usage\x0a'+(_0x159a3a+_0x2da0e3)+'\x20[TIPO]\x20[CANTIDAD]\x20[@user]\x0a📌\x20EJEMPLO:\x20:\x20'+(_0x159a3a+_0x2da0e3)+'\x20exp\x2065\x20@'+_0x1495ac['sender']['split']('@')[0x0]+'\x20')['trim'](),_0x318069=(_0x2d9681[0x0]||'')['toLowerCase']();if(!_0xd6dde0['includes'](_0x318069))return _0x3d5b9f['sendMessage'](_0x1495ac['chat'],{'text':_0x289862,'mentions':[_0x1495ac['sender']]},{'quoted':_0x1495ac});const _0x3ec393=Math['min'](Number['MAX_SAFE_INTEGER'],Math['max'](0x1,isNumber(_0x2d9681[0x1])?parseInt(_0x2d9681[0x1]):0x1))*0x1,_0x107049=_0x1495ac['mentionedJid']&&_0x1495ac['mentionedJid'][0x0]?_0x1495ac['mentionedJid'][0x0]:_0x2d9681[0x2]?_0x2d9681[0x2]['replace'](/[@ .+-]/g,'')+'@s.whatsapp.net':'';if(!_0x107049)return _0x3d5b9f['sendMessage'](_0x1495ac['chat'],{'text':'[❗]\x20Menciona\x20al\x20usuario\x20que\x20quiera\x20Realizarle\x20la\x20transferencia.','mentions':[_0x1495ac['sender']]},{'quoted':_0x1495ac});if(!(_0x107049 in global['db']['data']['users']))return _0x3d5b9f['sendMessage'](_0x1495ac['chat'],{'text':'[❗]\x20The\x20user\x20'+_0x107049+'\x20It\x20is\x20not\x20in\x20the\x20database.','mentions':[_0x1495ac['sender']]},{'quoted':_0x1495ac});if(_0x30e5a2[_0x318069]*0x1<_0x3ec393)return _0x3d5b9f['sendMessage'](_0x1495ac['chat'],{'text':'[❗]\x20No\x20Tienes\x20recursos\x20para\x20'+_0x318069+'\x20Para\x20transferir\x20','mentions':[_0x1495ac['sender']]},{'quoted':_0x1495ac});const _0x176c8a=('¿Estás\x20seguro\x20de\x20que\x20quieres\x20transferir?\x20'+_0x3ec393+'\x20'+_0x318069+'\x20a\x20@'+(_0x107049||'')['replace'](/@s\.whatsapp\.net/g,'')+'?\x0aTienes\x2060\x20segundos\x20para\x20confirmar\x0a\x0aEscribe:\x20\x0asi\x20=\x20Para\x20aceptar\x0ano\x20=\x20para\x20cancelar*')['trim']();await _0x3d5b9f['sendMessage'](_0x1495ac['chat'],{'text':_0x176c8a,'mentions':[_0x107049]},{'quoted':_0x1495ac}),confirmation[_0x1495ac['sender']]={'sender':_0x1495ac['sender'],'to':_0x107049,'message':_0x1495ac,'type':_0x318069,'count':_0x3ec393,'timeout':setTimeout(()=>(_0x3d5b9f['sendMessage'](_0x1495ac['chat'],{'text':'[❗]\x20Time\x20ran\x20out,\x20no\x20response\x20received.\x20Transfer\x20cancelled.','mentions':[_0x1495ac['sender']]},{'quoted':_0x1495ac}),delete confirmation[_0x1495ac['sender']]),0x3c*0x3e8)};}handler['before']=async _0x47e771=>{if(_0x47e771['isBaileys'])return;if(!(_0x47e771['sender']in confirmation))return;if(!_0x47e771['text'])return;const {timeout:_0x1f2347,sender:_0xbb9e47,message:_0x228e04,to:_0x4e8ebe,type:_0x413040,count:_0x462b2e}=confirmation[_0x47e771['sender']];if(_0x47e771['id']===_0x228e04['id'])return;const _0x4f5ab7=global['db']['data']['users'][_0xbb9e47],_0x5bad3d=global['db']['data']['users'][_0x4e8ebe];if(/^No|no$/i['test'](_0x47e771['text']))return clearTimeout(_0x1f2347),delete confirmation[_0xbb9e47],conn['sendMessage'](_0x47e771['chat'],{'text':'[❗]\x20Canceled,\x20the\x20transfer\x20will\x20not\x20be\x20made.','mentions':[_0x47e771['sender']]},{'quoted':_0x47e771});if(/^Si|si$/i['test'](_0x47e771['text'])){const _0x466c2b=_0x4f5ab7[_0x413040]*0x1,_0x184bd9=_0x5bad3d[_0x413040]*0x1;_0x4f5ab7[_0x413040]-=_0x462b2e*0x1,_0x5bad3d[_0x413040]+=_0x462b2e*0x1,_0x466c2b>_0x4f5ab7[_0x413040]*0x1&&_0x184bd9<_0x5bad3d[_0x413040]*0x1?conn['sendMessage'](_0x47e771['chat'],{'text':'[❗]\x20Fueron\x20Transferidos\x20exitosa\x20Mente\x20'+_0x462b2e+'\x20'+_0x413040+'\x20a\x20@'+(_0x4e8ebe||'')['replace'](/@s\.whatsapp\.net/g,''),'mentions':[_0x4e8ebe]},{'quoted':_0x47e771}):(_0x4f5ab7[_0x413040]=_0x466c2b,_0x5bad3d[_0x413040]=_0x184bd9,conn['sendMessage'](_0x47e771['chat'],{'text':'[❗]\x20Error\x20al\x20transferir\x20'+_0x462b2e+'\x20'+_0x413040+'\x20a\x20@'+(_0x4e8ebe||'')['replace'](/@s\.whatsapp\.net/g,''),'mentions':[_0x4e8ebe]},{'quoted':_0x47e771})),clearTimeout(_0x1f2347),delete confirmation[_0xbb9e47];}},handler['help']=['transfer']['map'](_0x1718fc=>_0x1718fc+'\x20[tipo]\x20[cantidad]\x20[@tag]'),handler['tags']=['xp'],handler['command']=['payxp','transfer','darxp','transferir'],handler['disabled']=![];export default handler;function special(_0x3e0858){const _0x50ded4=_0x3e0858['toLowerCase'](),_0x1dfcd0=['common','uncommon','mythic','legendary','pet']['includes'](_0x50ded4)?'\x20Crate':'';return _0x1dfcd0;}function isNumber(_0x4f794f){return!isNaN(_0x4f794f);}