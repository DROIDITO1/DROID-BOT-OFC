const toxicRegex=/puto|puta|rata|estupido|imbecil|rctmre|mrd|verga|vrga|maricon|puto|whore|stupid|idiot|rctmre|mrd|dick|vrga|faggot/i;export async function before(_0x8cd905,{isAdmin:_0x4aa750,isBotAdmin:_0x513046,isOwner:_0x15f4db}){if(_0x8cd905['isBaileys']&&_0x8cd905['fromMe'])return!0x0;if(!_0x8cd905['isGroup'])return!0x1;let _0x1e148a=global['db']['data']['users'][_0x8cd905['sender']],_0x5500f6=global['db']['data']['chats'][_0x8cd905['chat']],_0x59e8f4=global['db']['data']['settings'][this['user']['jid']]||{};const _0x5bd1e0=toxicRegex['exec'](_0x8cd905['text']);if(_0x5bd1e0&&_0x5500f6['antiToxic']&&!_0x15f4db&&!_0x4aa750){_0x1e148a['warn']+=0x1;if(!(_0x1e148a['warn']>=0x5))await _0x8cd905['reply']((_0x1e148a['warn']==0x1?'Hola\x20*@'+_0x8cd905['sender']['split']`@`[0x0]+'*':'*@'+_0x8cd905['sender']['split']`@`[0x0]+'*')+',\x20decir\x20la\x20palabra\x20('+_0x5bd1e0+')\x20está\x20prohibido\x20en\x20este\x20grupo\x20*'+_0x1e148a['warn']+'/5*\x20advertencia',![],{'mentions':[_0x8cd905['sender']]});if(!(_0x1e148a['warn']>=0x5))await _0x8cd905['reply']((_0x1e148a['warn']==0x1?'Hello\x20*@'+_0x8cd905['sender']['split']`@`[0x0]+'*':'*@'+_0x8cd905['sender']['split']`@`[0x0]+'*')+',\x20say\x20the\x20word\x20('+_0x5bd1e0+')\x20is\x20prohibited\x20in\x20this\x20bot\x20*'+_0x1e148a['warn']+'/5*\x20warning',![],{'mentions':[_0x8cd905['sender']]});}return _0x1e148a['warn']>=0x5&&(_0x1e148a['warn']=0x0,await _0x8cd905['reply']('Hollo\x20@'+_0x8cd905['sender']['split']`@`[0x0]+',\x20you\x20did\x20not\x20obey\x20the\x20warnings\x20that\x20were\x20indicated,\x20you\x20will\x20be\x20eliminated\x20and\x20blocked\x20from\x20the\x20bot',![],{'mentions':[_0x8cd905['sender']]}),_0x1e148a['banned']=!![],await this['groupParticipantsUpdate'](_0x8cd905['chat'],[_0x8cd905['sender']],'remove')),!0x1;}