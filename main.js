
const _0x5bc8b9=_0x15b2;(function(_0x332bbb,_0x56e953){const _0x11e3be=_0x15b2,_0x715fdc=_0x332bbb();while(!![]){try{const _0x50ed1f=parseInt(_0x11e3be(0x157))/0x1*(-parseInt(_0x11e3be(0xd9))/0x2)+-parseInt(_0x11e3be(0xf0))/0x3+-parseInt(_0x11e3be(0xe9))/0x4+parseInt(_0x11e3be(0x11a))/0x5+parseInt(_0x11e3be(0x11e))/0x6*(-parseInt(_0x11e3be(0xe4))/0x7)+parseInt(_0x11e3be(0x106))/0x8*(parseInt(_0x11e3be(0x11c))/0x9)+parseInt(_0x11e3be(0x122))/0xa*(parseInt(_0x11e3be(0x142))/0xb);if(_0x50ed1f===_0x56e953)break;else _0x715fdc['push'](_0x715fdc['shift']());}catch(_0x4100e3){_0x715fdc['push'](_0x715fdc['shift']());}}}(_0x3569,0xd4087),process[_0x5bc8b9(0xf4)][_0x5bc8b9(0x108)]='0');import'./config.js';import'./api.js';import{createRequire}from'module';import _0x4b58e0,{join}from'path';import{fileURLToPath,pathToFileURL}from'url';import{platform}from'process';import*as _0x2d8169 from'ws';import{readdirSync,statSync,unlinkSync,existsSync,readFileSync,rmSync,watch}from'fs';import _0x22c89f from'yargs';import{spawn}from'child_process';import _0x3a3c0a from'lodash';import _0x40537b from'chalk';import _0x1b10bf from'syntax-error';import{tmpdir}from'os';import{format}from'util';import _0x4a45ff from'pino';import _0x2950d2 from'pino';import{Boom}from'@hapi/boom';import{makeWASocket,protoType,serialize}from'./lib/simple.js';import{Low,JSONFile}from'lowdb';import{mongoDB,mongoDBV2}from'./lib/mongoDB.js';import _0x38611a from'./lib/store.js';const {proto}=(await import(_0x5bc8b9(0xe7)))[_0x5bc8b9(0xff)],{DisconnectReason,useMultiFileAuthState,MessageRetryMap,fetchLatestBaileysVersion,makeCacheableSignalKeyStore}=await import(_0x5bc8b9(0xe7)),{CONNECTING}=_0x2d8169,{chain}=_0x3a3c0a,PORT=process['env'][_0x5bc8b9(0xf7)]||process[_0x5bc8b9(0xf4)][_0x5bc8b9(0x13b)]||0xbb8;protoType(),serialize(),global[_0x5bc8b9(0x158)]=function filename(_0x1b142f=import.meta[_0x5bc8b9(0x18e)],_0x23333f=platform!==_0x5bc8b9(0x163)){const _0x503249=_0x5bc8b9;return _0x23333f?/file:\/\/\//[_0x503249(0x168)](_0x1b142f)?fileURLToPath(_0x1b142f):_0x1b142f:pathToFileURL(_0x1b142f)[_0x503249(0x169)]();},global[_0x5bc8b9(0x115)]=function dirname(_0x5477b0){return _0x4b58e0['dirname'](global['__filename'](_0x5477b0,!![]));},global[_0x5bc8b9(0x15b)]=function require(_0x50bb24=import.meta[_0x5bc8b9(0x18e)]){return createRequire(_0x50bb24);},global['API']=(_0x2f078f,_0x354cec='/',_0x5ba534={},_0x3c38c0)=>(_0x2f078f in global[_0x5bc8b9(0xfe)]?global[_0x5bc8b9(0xfe)][_0x2f078f]:_0x2f078f)+_0x354cec+(_0x5ba534||_0x3c38c0?'?'+new URLSearchParams(Object['entries']({..._0x5ba534,..._0x3c38c0?{[_0x3c38c0]:global[_0x5bc8b9(0x173)][_0x2f078f in global[_0x5bc8b9(0xfe)]?global[_0x5bc8b9(0xfe)][_0x2f078f]:_0x2f078f]}:{}})):''),global[_0x5bc8b9(0x107)]={'start':new Date()},global[_0x5bc8b9(0x180)]=[],global[_0x5bc8b9(0x110)]=[];const __dirname=global[_0x5bc8b9(0x115)](import.meta[_0x5bc8b9(0x18e)]);global[_0x5bc8b9(0x16e)]=new Object(_0x22c89f(process['argv']['slice'](0x2))[_0x5bc8b9(0x130)](![])[_0x5bc8b9(0x189)]()),global[_0x5bc8b9(0xf2)]=new RegExp('^['+(opts[_0x5bc8b9(0xf2)]||_0x5bc8b9(0x139))[_0x5bc8b9(0x177)](/[|\\{}()[\]^$+*?.\-\^]/g,'\x5c$&')+']'),global['db']=new Low(/https?:\/\//[_0x5bc8b9(0x168)](opts['db']||'')?new cloudDBAdapter(opts['db']):new JSONFile((opts['_'][0x0]?opts['_'][0x0]+'_':'')+'database.json')),global[_0x5bc8b9(0xde)]=global['db'],global[_0x5bc8b9(0x112)]=async function loadDatabase(){const _0x3deb11=_0x5bc8b9;if(global['db'][_0x3deb11(0x118)])return new Promise(_0x1a0ed7=>setInterval(async function(){const _0x8072f5=_0x3deb11;!global['db'][_0x8072f5(0x118)]&&(clearInterval(this),_0x1a0ed7(global['db'][_0x8072f5(0x179)]==null?global[_0x8072f5(0x112)]():global['db'][_0x8072f5(0x179)]));},0x1*0x3e8));if(global['db'][_0x3deb11(0x179)]!==null)return;global['db'][_0x3deb11(0x118)]=!![],await global['db'][_0x3deb11(0xe8)]()[_0x3deb11(0x13e)](console['error']),global['db'][_0x3deb11(0x118)]=null,global['db'][_0x3deb11(0x179)]={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},'settings':{},...global['db']['data']||{}},global['db'][_0x3deb11(0xed)]=chain(global['db'][_0x3deb11(0x179)]);},loadDatabase(),global['chatgpt']=new Low(new JSONFile(_0x4b58e0[_0x5bc8b9(0x161)](__dirname,_0x5bc8b9(0xf8)))),global['loadChatgptDB']=async function loadChatgptDB(){const _0x28d3bd=_0x5bc8b9;if(global[_0x28d3bd(0x121)][_0x28d3bd(0x118)])return new Promise(_0x84c99b=>setInterval(async function(){const _0x211d9a=_0x28d3bd;!global[_0x211d9a(0x121)]['READ']&&(clearInterval(this),_0x84c99b(global[_0x211d9a(0x121)]['data']===null?global[_0x211d9a(0x18b)]():global[_0x211d9a(0x121)][_0x211d9a(0x179)]));},0x1*0x3e8));if(global[_0x28d3bd(0x121)][_0x28d3bd(0x179)]!==null)return;global[_0x28d3bd(0x121)][_0x28d3bd(0x118)]=!![],await global['chatgpt'][_0x28d3bd(0xe8)]()[_0x28d3bd(0x13e)](console[_0x28d3bd(0x128)]),global['chatgpt'][_0x28d3bd(0x118)]=null,global[_0x28d3bd(0x121)][_0x28d3bd(0x179)]={'users':{},...global[_0x28d3bd(0x121)][_0x28d3bd(0x179)]||{}},global[_0x28d3bd(0x121)]['chain']=_0x3a3c0a[_0x28d3bd(0xed)](global[_0x28d3bd(0x121)][_0x28d3bd(0x179)]);},loadChatgptDB(),global[_0x5bc8b9(0x182)]='Session-activa';const {state,saveState,saveCreds}=await useMultiFileAuthState(global[_0x5bc8b9(0x182)]),msgRetryCounterMap=_0x513665=>{},{version}=await fetchLatestBaileysVersion(),connectionOptions={'printQRInTerminal':!![],'patchMessageBeforeSending':_0x913dc7=>{const _0x3495c4=_0x5bc8b9,_0x550ae7=!!(_0x913dc7[_0x3495c4(0x154)]||_0x913dc7['templateMessage']||_0x913dc7[_0x3495c4(0x126)]);return _0x550ae7&&(_0x913dc7={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x913dc7}}}),_0x913dc7;},'getMessage':async _0x196f99=>{const _0x1fe625=_0x5bc8b9;if(_0x38611a){const _0x4c0673=await _0x38611a[_0x1fe625(0x17b)](_0x196f99[_0x1fe625(0xfb)],_0x196f99['id']);return conn[_0x1fe625(0xfc)][_0x196f99['remoteJid']]&&conn[_0x1fe625(0xfc)][_0x196f99['remoteJid']]['messages'][_0x196f99['id']]?conn[_0x1fe625(0xfc)][_0x196f99['remoteJid']]['messages'][_0x196f99['id']]['message']:undefined;}return proto[_0x1fe625(0x104)][_0x1fe625(0x10e)]({});},'msgRetryCounterMap':msgRetryCounterMap,'logger':_0x2950d2({'level':'silent'}),'auth':{'creds':state['creds'],'keys':makeCacheableSignalKeyStore(state[_0x5bc8b9(0x136)],_0x2950d2({'level':_0x5bc8b9(0x17a)}))},'browser':[_0x5bc8b9(0x12f),_0x5bc8b9(0x145),'1.0.0'],'version':version,'defaultQueryTimeoutMs':undefined};global[_0x5bc8b9(0x116)]=makeWASocket(connectionOptions),conn[_0x5bc8b9(0x147)]=![],conn[_0x5bc8b9(0x15c)]=![],conn[_0x5bc8b9(0x160)]['info']('Ƈᴀʀɢᴀɴᴅᴏ．．．\x0a');function _0x3569(){const _0x328375=['./Session-activa/','Archivo\x20','test','toString','stopped','connectionLost','group-participants.update','días️','opts','push','messages.upsert','ffmpeg','--version','APIKeys','onDelete','all','statusCode','replace','log','data','silent','loadMessage','@g.us','[\x20⚠\x20]\x20Unknown\x20disconnection\x20reason.\x20','find','isDirectory','videoList','bold','authFile','\x20and\x20scan\x20again.','freeze','timedOut','startsWith','sDesc','./tmp','parse','plugins','loadChatgptDB','red','isFile','url','sRevoke','sort','乂✰@user\x0a乂\x20Admin\x20team\x20abandoned!!','floor','convert','ffprobe','52668cipUoo','./handler.js','connectionReplaced','updateProfileStatus','-amin','DATABASE','deleted\x20plugin\x20-\x20\x27','deleteUpdate','syntax\x20error\x20while\x20loading\x20\x27','credsUpdate','write','8907416IMsEQh','-loglevel','connectionClosed','@whiskeysockets/baileys','read','6168008txxrkP','./Session-activa','support','entries','chain','uncaughtException','?update=','4534482gxKWWs','tmpdir','prefix','reload','env','onCall','sIcon','PORT','/db/chatgpt.json','user','groupsUpdate','remoteJid','chats','now','APIs','default','[\x20⚠\x20]\x20Connection\x20closed,\x20please\x20delete\x20the\x20folder\x20','bind','length','./plugins/index','Message','then','184bWlKVF','timestamp','NODE_TLS_REJECT_UNAUTHORIZED','forEach','[\x20⚠\x20]\x20Connection\x20replaced,\x20another\x20new\x20session\x20has\x20been\x20opened.\x20Please\x20log\x20out\x20of\x20the\x20current\x20session\x20first.','[\x20⚠\x20]\x20Incorrect\x20session,\x20please\x20delete\x20the\x20folder\x20','message.delete','乂✰Group\x20link\x20updated\x0a@revoke','fromObject','restartRequired','videoListXXX','webp','loadDatabase','magick','creds.update','__dirname','conn','filter','READ','乂✰@subject\x0a乂✰@user\x0a\Bienvenido\x20al\x20grupo,\x20por\x20favor,\x20lee\x20la\x20descripción\x20para\x20evitar\x20problemas\x20con\x20el\x20creador\x20del\x20grupo.','1955405NqGXwV','pre-key-','348633TSpvvd','map','6ylHDOL','participantsUpdate','info','chatgpt','10QQjUHW','uptime','autocleartmp','call','listMessage','🤖\x20This\x20user\x20makes\x20use\x20of\x20HADES-BOT-MD\x20active\x20time\x20','error','[\x20⚠\x20]\x20Connection\x20timed\x20out,\x20reconnecting...','connectionUpdate','warn','close','▣──────────────────────────────···\x0a│\x0a│❧\x20𝙲𝙾𝙽𝙴𝙲𝚃𝙰𝙳𝙾\x20𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴\x20𝙰𝙻\x20𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿\x20✅\x0a│\x0a▣──────────────────────────────···','jadibts','HADES-BOT-MD','exitProcess','isChats','payload','╭•⋆҈͜͡.➣❂ᵈʳᵒⁱᵈ\x20ᵇᵒᵗ❂◄⋆҈͜͡•╮\x0a┃\x20Adiós\u00a0\x20🐈🌬️🌪\x20️\x0a┃\x20@user\x20\x0a┃.\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\x20😎\x0a┃\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\x20|,＼👐\x20\x0a┃\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\x20/\x20)\u00a0\u00a0\x20＼\u00a0\x20\x0a┃━━━━━┓\x20＼＼\x20\x0a┃┓┓┓┓┓┃\x20ヽ😩ノ\x20\x0a┃┓┓┓┓┓┃\u00a0\u00a0\u00a0\x20\x20\x20/\u00a0\x20*\x0a╿┓┓┓┓┓┃\u00a0\x20ノ)\x20\x0a╰•⋆҈͜͡.𝐓𝐎𝐍𝐘⋆𝐎𝐅𝐂⋆҈͜͡•╯\x20\x0a\x0a🧑🏻‍💻️\X20SIGUEME\x20EN\x20MI\x20CANAL\x20😻\x0ahttps://whatsapp.com/channel/0029Va80EZC5fM5f8fXgsQ0F','./server.js','off','keys','creds.json','minutos','*/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\x5c-.@','groups.update','SERVER_PORT','loggedOut','mtimeMs','catch','-delete','bye','output','45933569JAsxlg','race','error\x20require\x20plugin\x20\x27','Safari','reloadHandler','isInit','connection.update','horas','[\x20⚠\x20]\x20Lost\x20connection\x20to\x20the\x20server,\x20reconnecting...','乂✰The\x20group\x20name\x20has\x20been\x20changed\x0a@subject','sdemote','./jadibts/','socket','-frames:v','yellow','fromEntries','乂✰@user\x0a乂✰Has\x20joined\x20the\x20management\x20team\x20','./handler.js?update=','buttonsMessage','new\x20plugin\x20-\x20\x27','\x20borrado\x20con\x20éxito','10iUASlD','__filename','-filter_complex','\x20updated\x20plugin\x20-\x20\x27','__require','well','color','callUpdate','sSubject','logger','join','spromote','win32','handler','server'];_0x3569=function(){return _0x328375;};return _0x3569();}!opts[_0x5bc8b9(0x168)]&&(global['db']&&setInterval(async()=>{const _0x5b3f28=_0x5bc8b9;if(global['db'][_0x5b3f28(0x179)])await global['db'][_0x5b3f28(0xe3)]();if(opts[_0x5b3f28(0x124)]&&(global[_0x5b3f28(0xeb)]||{})['find'])tmp=[os[_0x5b3f28(0xf1)](),'tmp',_0x5b3f28(0x12e)],tmp['forEach'](_0x80372f=>cp['spawn'](_0x5b3f28(0x17e),[_0x80372f,_0x5b3f28(0xdd),'3','-type','f',_0x5b3f28(0x13f)]));},0x1e*0x3e8));if(opts[_0x5bc8b9(0x165)])(await import(_0x5bc8b9(0x134)))['default'](global[_0x5bc8b9(0x116)],PORT);function _0x15b2(_0x2f9bba,_0xa6ee0f){const _0x35691c=_0x3569();return _0x15b2=function(_0x15b215,_0x41f46e){_0x15b215=_0x15b215-0xd9;let _0x83de26=_0x35691c[_0x15b215];return _0x83de26;},_0x15b2(_0x2f9bba,_0xa6ee0f);}function clearTmp(){const _0x1384ad=_0x5bc8b9,_0x3d3d32=[tmpdir(),join(__dirname,_0x1384ad(0x188))],_0x27dd51=[];return _0x3d3d32[_0x1384ad(0x109)](_0x581ea2=>readdirSync(_0x581ea2)[_0x1384ad(0x109)](_0x25bc0d=>_0x27dd51[_0x1384ad(0x16f)](join(_0x581ea2,_0x25bc0d)))),_0x27dd51['map'](_0x53e276=>{const _0x3ae55e=_0x1384ad,_0x2f5abb=statSync(_0x53e276);if(_0x2f5abb[_0x3ae55e(0x18d)]()&&Date[_0x3ae55e(0xfd)]()-_0x2f5abb[_0x3ae55e(0x13d)]>=0x3e8*0x3c*0x3)return unlinkSync(_0x53e276);return![];});}function purgeSession(){const _0x5ac5f6=_0x5bc8b9;let _0x436b81=[],_0x226d56=readdirSync(_0x5ac5f6(0xea)),_0x4143e7=_0x226d56[_0x5ac5f6(0x117)](_0x244687=>{const _0x165b20=_0x5ac5f6;return _0x244687[_0x165b20(0x186)](_0x165b20(0x11b));});_0x436b81=[..._0x436b81,..._0x4143e7],_0x4143e7[_0x5ac5f6(0x109)](_0x5975db=>{const _0x18f059=_0x5ac5f6;unlinkSync(_0x18f059(0x166)+_0x5975db);});}function purgeSessionSB(){const _0x339aab=_0x5bc8b9;try{let _0x1c4ab4=readdirSync('./jadibts/'),_0x19d692=[];_0x1c4ab4['forEach'](_0x1ad0e1=>{const _0x4e593c=_0x15b2;if(statSync(_0x4e593c(0x14d)+_0x1ad0e1)[_0x4e593c(0x17f)]()){let _0x2ee5d6=readdirSync(_0x4e593c(0x14d)+_0x1ad0e1)[_0x4e593c(0x117)](_0x1438d2=>{const _0x192589=_0x4e593c;return _0x1438d2['startsWith'](_0x192589(0x11b));});_0x19d692=[..._0x19d692,..._0x2ee5d6],_0x2ee5d6[_0x4e593c(0x109)](_0x182099=>{const _0x7bf4f4=_0x4e593c;unlinkSync(_0x7bf4f4(0x14d)+_0x1ad0e1+'/'+_0x182099);});}});if(_0x19d692['length']===0x0)return;}catch(_0x557db4){console['log'](_0x40537b[_0x339aab(0x181)][_0x339aab(0x18c)]('=>\x20Algo\x20salio\x20mal\x20durante\x20la\x20eliminación,\x20archivos\x20no\x20eliminados'));}}function purgeOldFiles(){const _0x3d56b3=_0x5bc8b9,_0x44cc84=[_0x3d56b3(0x166),_0x3d56b3(0x14d)],_0x36369a=Date[_0x3d56b3(0xfd)]()-0x3c*0x3c*0x3e8;_0x44cc84[_0x3d56b3(0x109)](_0x179655=>{readdirSync(_0x179655,(_0x4550d2,_0x2fe05d)=>{const _0x5dd83b=_0x15b2;if(_0x4550d2)throw _0x4550d2;_0x2fe05d[_0x5dd83b(0x109)](_0x17a5c8=>{const _0x3a5bb6=_0x5dd83b,_0xa9aa48=_0x4b58e0[_0x3a5bb6(0x161)](_0x179655,_0x17a5c8);stat(_0xa9aa48,(_0x14336e,_0xa6f9b9)=>{const _0xeef73=_0x3a5bb6;if(_0x14336e)throw _0x14336e;_0xa6f9b9[_0xeef73(0x18d)]()&&_0xa6f9b9[_0xeef73(0x13d)]<_0x36369a&&_0x17a5c8!==_0xeef73(0x137)?unlinkSync(_0xa9aa48,_0x2f9a88=>{const _0x5e379a=_0xeef73;if(_0x2f9a88)throw _0x2f9a88;console[_0x5e379a(0x178)](_0x40537b[_0x5e379a(0x181)]['green'](_0x5e379a(0x167)+_0x17a5c8+_0x5e379a(0x156)));}):console[_0xeef73(0x178)](_0x40537b[_0xeef73(0x181)][_0xeef73(0x18c)](_0xeef73(0x167)+_0x17a5c8+'\x20no\x20borrado'+_0x14336e));});});});});}async function connectionUpdate(_0xfa5489){const _0x4ec864=_0x5bc8b9,{connection:_0x455638,lastDisconnect:_0x51af42,isNewLogin:_0x4b16c9}=_0xfa5489;global[_0x4ec864(0x16a)]=_0x455638;if(_0x4b16c9)conn[_0x4ec864(0x147)]=!![];const _0x1fc3b4=_0x51af42?.[_0x4ec864(0x128)]?.['output']?.['statusCode']||_0x51af42?.[_0x4ec864(0x128)]?.[_0x4ec864(0x141)]?.[_0x4ec864(0x132)]?.['statusCode'];_0x1fc3b4&&_0x1fc3b4!==DisconnectReason[_0x4ec864(0x13c)]&&conn?.['ws'][_0x4ec864(0x14e)]==null&&(await global['reloadHandler'](!![])[_0x4ec864(0x13e)](console[_0x4ec864(0x128)]),global[_0x4ec864(0x107)]['connect']=new Date());if(global['db'][_0x4ec864(0x179)]==null)loadDatabase();_0xfa5489['qr']!=0x0&&_0xfa5489['qr']!=undefined&&console[_0x4ec864(0x178)](_0x40537b['yellow']('💥\x20Scan\x20this\x20QR\x20code,\x20the\x20QR\x20code\x20expires\x20in\x2060\x20seconds.'));_0x455638=='open'&&console[_0x4ec864(0x178)](_0x40537b[_0x4ec864(0x150)](_0x4ec864(0x12d)));let _0x3bf967=new Boom(_0x51af42?.['error'])?.['output']?.[_0x4ec864(0x176)];if(_0x455638==='close'){if(_0x3bf967===DisconnectReason['badSession'])conn[_0x4ec864(0x160)]['error'](_0x4ec864(0x10b)+global['authFile']+_0x4ec864(0x183));else{if(_0x3bf967===DisconnectReason[_0x4ec864(0xe6)])conn[_0x4ec864(0x160)][_0x4ec864(0x12b)]('[\x20⚠\x20]\x20Connection\x20closed,\x20reconnecting...'),await global[_0x4ec864(0x146)](!![])['catch'](console[_0x4ec864(0x128)]);else{if(_0x3bf967===DisconnectReason[_0x4ec864(0x16b)])conn[_0x4ec864(0x160)]['warn'](_0x4ec864(0x14a)),await global[_0x4ec864(0x146)](!![])[_0x4ec864(0x13e)](console[_0x4ec864(0x128)]);else{if(_0x3bf967===DisconnectReason[_0x4ec864(0xdb)])conn[_0x4ec864(0x160)][_0x4ec864(0x128)](_0x4ec864(0x10a));else{if(_0x3bf967===DisconnectReason[_0x4ec864(0x13c)])conn['logger'][_0x4ec864(0x128)](_0x4ec864(0x100)+global['authFile']+_0x4ec864(0x183));else{if(_0x3bf967===DisconnectReason[_0x4ec864(0x10f)])conn[_0x4ec864(0x160)]['info']('[\x20⚠\x20]\x20Reboot\x20required,\x20restart\x20the\x20server\x20if\x20you\x20have\x20any\x20problems.'),await global[_0x4ec864(0x146)](!![])[_0x4ec864(0x13e)](console[_0x4ec864(0x128)]);else _0x3bf967===DisconnectReason[_0x4ec864(0x185)]?(conn[_0x4ec864(0x160)]['warn'](_0x4ec864(0x129)),await global[_0x4ec864(0x146)](!![])[_0x4ec864(0x13e)](console[_0x4ec864(0x128)])):(conn[_0x4ec864(0x160)][_0x4ec864(0x12b)](_0x4ec864(0x17d)+(_0x3bf967||'')+':\x20'+(_0x455638||'')),await global[_0x4ec864(0x146)](!![])[_0x4ec864(0x13e)](console[_0x4ec864(0x128)]));}}}}}}}process['on'](_0x5bc8b9(0xee),console[_0x5bc8b9(0x128)]);let isInit=!![],handler=await import(_0x5bc8b9(0xda));global[_0x5bc8b9(0x146)]=async function(_0x34e887){const _0x44ec7d=_0x5bc8b9;try{const _0x2cc87d=await import(_0x44ec7d(0x153)+Date[_0x44ec7d(0xfd)]())[_0x44ec7d(0x13e)](console['error']);if(Object[_0x44ec7d(0x136)](_0x2cc87d||{})[_0x44ec7d(0x102)])handler=_0x2cc87d;}catch(_0x1de29e){console[_0x44ec7d(0x128)](_0x1de29e);}if(_0x34e887){const _0x1b7038=global['conn'][_0x44ec7d(0xfc)];try{global[_0x44ec7d(0x116)]['ws'][_0x44ec7d(0x12c)]();}catch{}conn['ev']['removeAllListeners'](),global[_0x44ec7d(0x116)]=makeWASocket(connectionOptions,{'chats':_0x1b7038}),isInit=!![];}!isInit&&(conn['ev'][_0x44ec7d(0x135)]('messages.upsert',conn['handler']),conn['ev'][_0x44ec7d(0x135)](_0x44ec7d(0x16c),conn['participantsUpdate']),conn['ev']['off'](_0x44ec7d(0x13a),conn[_0x44ec7d(0xfa)]),conn['ev'][_0x44ec7d(0x135)](_0x44ec7d(0x10c),conn[_0x44ec7d(0x174)]),conn['ev']['off']('call',conn[_0x44ec7d(0xf5)]),conn['ev']['off']('connection.update',conn['connectionUpdate']),conn['ev'][_0x44ec7d(0x135)](_0x44ec7d(0x114),conn[_0x44ec7d(0xe2)]));conn['welcome']=_0x44ec7d(0x119),conn[_0x44ec7d(0x140)]=_0x44ec7d(0x133),conn[_0x44ec7d(0x162)]=_0x44ec7d(0x152),conn[_0x44ec7d(0x14c)]=_0x44ec7d(0x191),conn[_0x44ec7d(0x187)]='乂✰Group\x20description\x20has\x20been\x20changed\x0a@desc',conn[_0x44ec7d(0x15f)]=_0x44ec7d(0x14b),conn[_0x44ec7d(0xf6)]='乂✰The\x20group\x20image\x20has\x20been\x20modified',conn[_0x44ec7d(0x18f)]=_0x44ec7d(0x10d),conn[_0x44ec7d(0x164)]=handler['handler'][_0x44ec7d(0x101)](global[_0x44ec7d(0x116)]),conn[_0x44ec7d(0x11f)]=handler[_0x44ec7d(0x11f)]['bind'](global[_0x44ec7d(0x116)]),conn[_0x44ec7d(0xfa)]=handler['groupsUpdate'][_0x44ec7d(0x101)](global[_0x44ec7d(0x116)]),conn[_0x44ec7d(0x174)]=handler[_0x44ec7d(0xe0)]['bind'](global[_0x44ec7d(0x116)]),conn[_0x44ec7d(0xf5)]=handler[_0x44ec7d(0x15e)][_0x44ec7d(0x101)](global[_0x44ec7d(0x116)]),conn[_0x44ec7d(0x12a)]=connectionUpdate['bind'](global['conn']),conn[_0x44ec7d(0xe2)]=saveCreds['bind'](global[_0x44ec7d(0x116)],!![]);const _0xf7d9e0=new Date(),_0x4a28e0=new Date(conn['ev']);if(_0xf7d9e0>=_0x4a28e0){const _0x3a4818=Object[_0x44ec7d(0xec)](conn[_0x44ec7d(0xfc)])['filter'](([_0xd4f3b7,_0x114271])=>!_0xd4f3b7['endsWith'](_0x44ec7d(0x17c))&&_0x114271[_0x44ec7d(0x131)])[_0x44ec7d(0x11d)](_0x445318=>_0x445318[0x0]);}else{const _0x553de1=Object[_0x44ec7d(0xec)](conn[_0x44ec7d(0xfc)])[_0x44ec7d(0x117)](([_0x59026b,_0x2aecef])=>!_0x59026b['endsWith'](_0x44ec7d(0x17c))&&_0x2aecef[_0x44ec7d(0x131)])[_0x44ec7d(0x11d)](_0x252390=>_0x252390[0x0]);}return conn['ev']['on'](_0x44ec7d(0x170),conn[_0x44ec7d(0x164)]),conn['ev']['on'](_0x44ec7d(0x16c),conn['participantsUpdate']),conn['ev']['on'](_0x44ec7d(0x13a),conn[_0x44ec7d(0xfa)]),conn['ev']['on'](_0x44ec7d(0x10c),conn[_0x44ec7d(0x174)]),conn['ev']['on'](_0x44ec7d(0x125),conn[_0x44ec7d(0xf5)]),conn['ev']['on'](_0x44ec7d(0x148),conn[_0x44ec7d(0x12a)]),conn['ev']['on'](_0x44ec7d(0x114),conn[_0x44ec7d(0xe2)]),isInit=![],!![];};const pluginFolder=global[_0x5bc8b9(0x115)](join(__dirname,_0x5bc8b9(0x103))),pluginFilter=_0x13b637=>/\.js$/[_0x5bc8b9(0x168)](_0x13b637);global['plugins']={};async function filesInit(){const _0x48c19a=_0x5bc8b9;for(const _0x184d0b of readdirSync(pluginFolder)[_0x48c19a(0x117)](pluginFilter)){try{const _0x2410f7=global[_0x48c19a(0x158)](join(pluginFolder,_0x184d0b)),_0x2dd6e9=await import(_0x2410f7);global['plugins'][_0x184d0b]=_0x2dd6e9['default']||_0x2dd6e9;}catch(_0x2d1edb){conn[_0x48c19a(0x160)]['error'](_0x2d1edb),delete global[_0x48c19a(0x18a)][_0x184d0b];}}}filesInit()[_0x5bc8b9(0x105)](_0x1d88f9=>Object[_0x5bc8b9(0x136)](global[_0x5bc8b9(0x18a)]))['catch'](console[_0x5bc8b9(0x128)]),global[_0x5bc8b9(0xf3)]=async(_0x250373,_0x33f99b)=>{const _0x35adcd=_0x5bc8b9;if(pluginFilter(_0x33f99b)){const _0x1b5e5a=global[_0x35adcd(0x158)](join(pluginFolder,_0x33f99b),!![]);if(_0x33f99b in global[_0x35adcd(0x18a)]){if(existsSync(_0x1b5e5a))conn[_0x35adcd(0x160)]['info'](_0x35adcd(0x15a)+_0x33f99b+'\x27');else return conn[_0x35adcd(0x160)][_0x35adcd(0x12b)](_0x35adcd(0xdf)+_0x33f99b+'\x27'),delete global[_0x35adcd(0x18a)][_0x33f99b];}else conn[_0x35adcd(0x160)][_0x35adcd(0x120)](_0x35adcd(0x155)+_0x33f99b+'\x27');const _0x564ca9=_0x1b10bf(readFileSync(_0x1b5e5a),_0x33f99b,{'sourceType':'module','allowAwaitOutsideFunction':!![]});if(_0x564ca9)conn['logger'][_0x35adcd(0x128)](_0x35adcd(0xe1)+_0x33f99b+'\x27\x0a'+format(_0x564ca9));else try{const _0x151e49=await import(global['__filename'](_0x1b5e5a)+_0x35adcd(0xef)+Date[_0x35adcd(0xfd)]());global[_0x35adcd(0x18a)][_0x33f99b]=_0x151e49[_0x35adcd(0xff)]||_0x151e49;}catch(_0xfacb16){conn[_0x35adcd(0x160)]['error'](_0x35adcd(0x144)+_0x33f99b+'\x0a'+format(_0xfacb16)+'\x27');}finally{global[_0x35adcd(0x18a)]=Object[_0x35adcd(0x151)](Object['entries'](global[_0x35adcd(0x18a)])[_0x35adcd(0x190)](([_0x4e1c95],[_0x57d1b0])=>_0x4e1c95['localeCompare'](_0x57d1b0)));}}},Object[_0x5bc8b9(0x184)](global[_0x5bc8b9(0xf3)]),watch(pluginFolder,global['reload']),await global[_0x5bc8b9(0x146)]();async function _quickTest(){const _0x31ec59=_0x5bc8b9,_0x24133b=await Promise[_0x31ec59(0x175)]([spawn(_0x31ec59(0x171)),spawn(_0x31ec59(0x194)),spawn(_0x31ec59(0x171),['-hide_banner',_0x31ec59(0xe5),_0x31ec59(0x128),_0x31ec59(0x159),_0x31ec59(0x15d),_0x31ec59(0x14f),'1','-f',_0x31ec59(0x111),'-']),spawn(_0x31ec59(0x193)),spawn(_0x31ec59(0x113)),spawn('gm'),spawn(_0x31ec59(0x17e),[_0x31ec59(0x172)])][_0x31ec59(0x11d)](_0x5a8793=>{const _0x1d0b0c=_0x31ec59;return Promise[_0x1d0b0c(0x143)]([new Promise(_0x9a46ee=>{const _0xd7ba46=_0x1d0b0c;_0x5a8793['on'](_0xd7ba46(0x12c),_0x18a560=>{_0x9a46ee(_0x18a560!==0x7f);});}),new Promise(_0x27182a=>{const _0x5c2754=_0x1d0b0c;_0x5a8793['on'](_0x5c2754(0x128),_0xfd6073=>_0x27182a(![]));})]);})),[_0xaef690,_0x8ebef1,_0x4f0848,_0xa5c801,_0x173c43,_0x50ea85,_0x5c2c3f]=_0x24133b,_0xcd6efa=global[_0x31ec59(0xeb)]={'ffmpeg':_0xaef690,'ffprobe':_0x8ebef1,'ffmpegWebp':_0x4f0848,'convert':_0xa5c801,'magick':_0x173c43,'gm':_0x50ea85,'find':_0x5c2c3f};Object[_0x31ec59(0x184)](global[_0x31ec59(0xeb)]);}setInterval(async()=>{const _0x4d84f2=_0x5bc8b9;if(stopped===_0x4d84f2(0x12c)||!conn||!conn[_0x4d84f2(0xf9)])return;const _0x2ba9f8=await clearTmp();},0x2bf20),setInterval(async()=>{const _0xd8557b=_0x5bc8b9;if(stopped==='close'||!conn||!conn[_0xd8557b(0xf9)])return;await purgeSession();},0x3e8*0x3c*0x3c),setInterval(async()=>{const _0x17058d=_0x5bc8b9;if(stopped==='close'||!conn||!conn[_0x17058d(0xf9)])return;await purgeSessionSB();},0x3e8*0x3c*0x3c),setInterval(async()=>{const _0x4b37f4=_0x5bc8b9;if(stopped==='close'||!conn||!conn[_0x4b37f4(0xf9)])return;await purgeOldFiles();},0x3e8*0x3c*0x3c),setInterval(async()=>{const _0x5945c9=_0x5bc8b9;if(stopped===_0x5945c9(0x12c)||!conn||!conn[_0x5945c9(0xf9)])return;const _0x237fa0=process[_0x5945c9(0x123)]()*0x3e8,_0x46d640=clockString(_0x237fa0),_0x18ea9=_0x5945c9(0x127)+_0x46d640+'\x20';await conn[_0x5945c9(0xdc)](_0x18ea9)[_0x5945c9(0x13e)](_0xe56429=>_0xe56429);},0xea60);function clockString(_0x48efc7){const _0xedbf17=_0x5bc8b9,_0x55ab77=isNaN(_0x48efc7)?'--':Math[_0xedbf17(0x192)](_0x48efc7/0x5265c00),_0x7f5c5a=isNaN(_0x48efc7)?'--':Math[_0xedbf17(0x192)](_0x48efc7/0x36ee80)%0x18,_0x20ebec=isNaN(_0x48efc7)?'--':Math[_0xedbf17(0x192)](_0x48efc7/0xea60)%0x3c,_0x2e6866=isNaN(_0x48efc7)?'--':Math[_0xedbf17(0x192)](_0x48efc7/0x3e8)%0x3c;return[_0x55ab77,_0xedbf17(0x16d),_0x7f5c5a,_0xedbf17(0x149),_0x20ebec,_0xedbf17(0x138),_0x2e6866,'segundos\x20'][_0xedbf17(0x11d)](_0x3a70ec=>_0x3a70ec[_0xedbf17(0x169)]()['padStart'](0x2,0x0))[_0xedbf17(0x161)]('');}_quickTest()[_0x5bc8b9(0x13e)](console[_0x5bc8b9(0x128)]);