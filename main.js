const _0x461363=_0x5034;(function(_0x3a2b8f,_0x3219b8){const _0x3db548=_0x5034,_0x3e0f01=_0x3a2b8f();while(!![]){try{const _0x5a5bac=-parseInt(_0x3db548(0x12b))/0x1*(parseInt(_0x3db548(0xac))/0x2)+-parseInt(_0x3db548(0x123))/0x3+parseInt(_0x3db548(0x127))/0x4+parseInt(_0x3db548(0xc5))/0x5*(-parseInt(_0x3db548(0x107))/0x6)+parseInt(_0x3db548(0xe8))/0x7+parseInt(_0x3db548(0xe1))/0x8+-parseInt(_0x3db548(0xd2))/0x9*(-parseInt(_0x3db548(0xec))/0xa);if(_0x5a5bac===_0x3219b8)break;else _0x3e0f01['push'](_0x3e0f01['shift']());}catch(_0x57bc0e){_0x3e0f01['push'](_0x3e0f01['shift']());}}}(_0x2d88,0x2ed43),process[_0x461363(0x121)]['NODE_TLS_REJECT_UNAUTHORIZED']='0');import'./config.js';import{createRequire}from'module';import _0x5a97ef,{join}from'path';import{fileURLToPath,pathToFileURL}from'url';import{platform}from'process';import*as _0x3d1fc5 from'ws';import{readdirSync,statSync,unlinkSync,existsSync,readFileSync,watch,rmSync}from'fs';import _0x4db971 from'yargs';import{spawn}from'child_process';import _0x2823b3 from'lodash';import _0x3eba2e from'chalk';import _0x5079c8 from'syntax-error';import{tmpdir}from'os';import{format}from'util';import{makeWASocket,protoType,serialize}from'./lib/simple.js';import{Low,JSONFile}from'lowdb';import _0x5575ac from'pino';import{mongoDB,mongoDBV2}from'./lib/mongoDB.js';import _0x37d64d from'./lib/store.js';const {DisconnectReason,useMultiFileAuthState}=await import(_0x461363(0x126)),{CONNECTING}=_0x3d1fc5,{chain}=_0x2823b3,PORT=process[_0x461363(0x121)][_0x461363(0xda)]||process[_0x461363(0x121)][_0x461363(0x11a)]||0xbb8;protoType(),serialize(),global[_0x461363(0xcd)]=function filename(_0x109912=import.meta[_0x461363(0xe0)],_0x53f1a4=platform!==_0x461363(0xcb)){const _0x6e9a6c=_0x461363;return _0x53f1a4?/file:\/\/\//[_0x6e9a6c(0xef)](_0x109912)?fileURLToPath(_0x109912):_0x109912:pathToFileURL(_0x109912)[_0x6e9a6c(0x124)]();},global[_0x461363(0x10c)]=function dirname(_0x34c9b2){const _0xfe3139=_0x461363;return _0x5a97ef[_0xfe3139(0xf6)](global[_0xfe3139(0xcd)](_0x34c9b2,!![]));},global[_0x461363(0xb8)]=function require(_0x508e83=import.meta[_0x461363(0xe0)]){return createRequire(_0x508e83);},global['API']=(_0x5bcfff,_0x1b844d='/',_0x1b4a3e={},_0x281f72)=>(_0x5bcfff in global[_0x461363(0x110)]?global[_0x461363(0x110)][_0x5bcfff]:_0x5bcfff)+_0x1b844d+(_0x1b4a3e||_0x281f72?'?'+new URLSearchParams(Object[_0x461363(0xe7)]({..._0x1b4a3e,..._0x281f72?{[_0x281f72]:global['APIKeys'][_0x5bcfff in global[_0x461363(0x110)]?global[_0x461363(0x110)][_0x5bcfff]:_0x5bcfff]}:{}})):''),global[_0x461363(0x10b)]={'start':new Date()};const __dirname=global[_0x461363(0x10c)](import.meta[_0x461363(0xe0)]);global[_0x461363(0xdf)]=new Object(_0x4db971(process[_0x461363(0xb1)][_0x461363(0x119)](0x2))[_0x461363(0x12c)](![])[_0x461363(0x10d)]()),global[_0x461363(0x109)]=new RegExp('^['+(opts[_0x461363(0x109)]||'‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\x5c-')[_0x461363(0xff)](/[|\\{}()[\]^$+*?.\-\^]/g,_0x461363(0x116))+']'),global['db']=new Low(/https?:\/\//['test'](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb(\+srv)?:\/\//i['test'](opts['db'])?opts[_0x461363(0xc0)]?new mongoDBV2(opts['db']):new mongoDB(opts['db']):new JSONFile((opts['_'][0x0]?opts['_'][0x0]+'_':'')+_0x461363(0xf9))),global[_0x461363(0x106)]=global['db'],global[_0x461363(0xc7)]=async function loadDatabase(){const _0x35fbac=_0x461363;if(global['db'][_0x35fbac(0x111)])return new Promise(_0x5cd06c=>setInterval(async function(){const _0x212fc8=_0x35fbac;!global['db'][_0x212fc8(0x111)]&&(clearInterval(this),_0x5cd06c(global['db'][_0x212fc8(0xb9)]==null?global[_0x212fc8(0xc7)]():global['db'][_0x212fc8(0xb9)]));},0x1*0x3e8));if(global['db'][_0x35fbac(0xb9)]!==null)return;global['db'][_0x35fbac(0x111)]=!![],await global['db']['read']()[_0x35fbac(0xfd)](console['error']),global['db'][_0x35fbac(0x111)]=null,global['db'][_0x35fbac(0xb9)]={'users':{},'chats':{},'stats':{},'msgs':{},'sticker':{},'settings':{},...global['db'][_0x35fbac(0xb9)]||{}},global['db'][_0x35fbac(0x125)]=chain(global['db']['data']);},loadDatabase(),global['authFile']=_0x461363(0xf4);const {state,saveState,saveCreds}=await useMultiFileAuthState(global[_0x461363(0xea)]),connectionOptions={'printQRInTerminal':!![],'auth':state,'logger':_0x5575ac({'level':_0x461363(0xbf)}),'browser':[_0x461363(0xba),_0x461363(0xe5),_0x461363(0x128)]};function _0x5034(_0x5647dd,_0x44407d){const _0x2d889a=_0x2d88();return _0x5034=function(_0x503449,_0x21fa18){_0x503449=_0x503449-0xa7;let _0x3d9500=_0x2d889a[_0x503449];return _0x3d9500;},_0x5034(_0x5647dd,_0x44407d);}global[_0x461363(0xc3)]=makeWASocket(connectionOptions),conn[_0x461363(0x122)]=![];!opts[_0x461363(0xef)]&&setInterval(async()=>{const _0x15315e=_0x461363;if(global['db'][_0x15315e(0xb9)])await global['db'][_0x15315e(0xaf)]()[_0x15315e(0xfd)](console[_0x15315e(0x118)]);if(opts[_0x15315e(0xd0)])try{clearTmp();}catch(_0x42eb70){console['error'](_0x42eb70);}},0x3c*0x3e8);if(opts['server'])(await import(_0x461363(0x117)))['default'](global[_0x461363(0xc3)],PORT);function _0x2d88(){const _0x5e7d55=['length','off','logger','opts','url','141768AyTftW','reload','then','participantsUpdate','Safari','race','entries','2571765evlpae','Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)','authFile','credsUpdate','6070nRgrRN','readyState','ffmpeg','test','Quick\x20Test\x20Done','message.delete','?update=','@user\x20sekarang\x20admin','sessions','push','dirname','Selamat\x20tinggal\x20@user','freeze','database.json','messages.upsert','Nama\x20grup\x20telah\x20diubah\x20menjadi\x20\x0a*@subject*','module','catch','payload','replace','all','color','support','isFile','-loglevel','filter','DATABASE','327900DUaLZn','@user\x20tidak\x20lagi\x20admin','prefix','keys','timestamp','__dirname','parse','connection.update','sIcon','APIs','READ','map','plugins','Ikon\x20grup\x20telah\x20diubah','groups.update','\x5c$&','./server.js','error','slice','SERVER_PORT','onDelete','sDesc','loggedOut','groupsUpdate','bye','find','env','isInit','671214XywIvi','toString','chain','@adiwajshing/baileys','1404596qcdxaO','1.0.0','sRevoke','mtimeMs','121aMPoOQ','exitProcess','webp','chats','sort','reloadHandler','info','5070cuKqLI','default','handler','write','sdemote','argv','ffmpegWebp','Tautan\x20grup\x20telah\x20diubah\x20menjadi\x20\x0a@revoke','log','now','statusCode','output','__require','data','nansoffc','creds.update','new\x20plugin\x20-\x20\x27','deleted\x20plugin\x20-\x20\x27','group-participants.update','silent','mongodbv2','magick','✅\x20Folder\x20tmp\x20dibersihkan','conn','cyan','5jPlgmw','close','loadDatabase','uncaughtException','./handler.js','-filter_complex','win32','forEach','__filename','spromote','./handler.js?update=','autocleartmp','connectionUpdate','603yKeNeb','warn','\x20updated\x20plugin\x20-\x20\x27','bind','./plugins/index','ffprobe','--version','convert','PORT','localeCompare'];_0x2d88=function(){return _0x5e7d55;};return _0x2d88();}async function clearTmp(){const _0x514eae=_0x461363,_0x2e13ff=[tmpdir(),join(__dirname,'./tmp')],_0x398748=[];return _0x2e13ff[_0x514eae(0xcc)](_0xee736d=>readdirSync(_0xee736d)['forEach'](_0x284bac=>_0x398748[_0x514eae(0xf5)](join(_0xee736d,_0x284bac)))),_0x398748[_0x514eae(0x112)](_0x1e0ccf=>{const _0x4675ec=_0x514eae,_0x3da551=statSync(_0x1e0ccf);if(_0x3da551[_0x4675ec(0x103)]()&&Date[_0x4675ec(0xb5)]()-_0x3da551[_0x4675ec(0x12a)]>=0x3e8*0x3c*0x1)return unlinkSync(_0x1e0ccf);return![];});}setInterval(async()=>{const _0xf19d97=_0x461363;var _0x19ab7a=await clearTmp();console['log'](_0x3eba2e[_0xf19d97(0xc4)](_0xf19d97(0xc2)));},0xea60);async function connectionUpdate(_0x4fde85){const _0x24a7f6=_0x461363,{connection:_0x2a4f68,lastDisconnect:_0x46898a,isNewLogin:_0x4e4276}=_0x4fde85;if(_0x4e4276)conn[_0x24a7f6(0x122)]=!![];const _0x9a7f6e=_0x46898a?.[_0x24a7f6(0x118)]?.[_0x24a7f6(0xb7)]?.[_0x24a7f6(0xb6)]||_0x46898a?.[_0x24a7f6(0x118)]?.[_0x24a7f6(0xb7)]?.[_0x24a7f6(0xfe)]?.[_0x24a7f6(0xb6)];_0x9a7f6e&&_0x9a7f6e!==DisconnectReason[_0x24a7f6(0x11d)]&&conn?.['ws'][_0x24a7f6(0xed)]!==CONNECTING&&(console[_0x24a7f6(0xb4)](await global[_0x24a7f6(0xaa)](!![])[_0x24a7f6(0xfd)](console[_0x24a7f6(0x118)])),global['timestamp']['connect']=new Date());if(global['db'][_0x24a7f6(0xb9)]==null)loadDatabase();}process['on'](_0x461363(0xc8),console[_0x461363(0x118)]);let isInit=!![],handler=await import(_0x461363(0xc9));global[_0x461363(0xaa)]=async function(_0x2fd59f){const _0x50134d=_0x461363;try{const _0xfb94d4=await import(_0x50134d(0xcf)+Date[_0x50134d(0xb5)]())[_0x50134d(0xfd)](console[_0x50134d(0x118)]);if(Object[_0x50134d(0x10a)](_0xfb94d4||{})[_0x50134d(0xdc)])handler=_0xfb94d4;}catch(_0x43d7ce){console[_0x50134d(0x118)](_0x43d7ce);}if(_0x2fd59f){const _0x5bde79=global[_0x50134d(0xc3)][_0x50134d(0xa8)];try{global[_0x50134d(0xc3)]['ws'][_0x50134d(0xc6)]();}catch{}conn['ev']['removeAllListeners'](),global[_0x50134d(0xc3)]=makeWASocket(connectionOptions,{'chats':_0x5bde79}),isInit=!![];}return!isInit&&(conn['ev'][_0x50134d(0xdd)]('messages.upsert',conn[_0x50134d(0xae)]),conn['ev'][_0x50134d(0xdd)](_0x50134d(0xbe),conn['participantsUpdate']),conn['ev'][_0x50134d(0xdd)](_0x50134d(0x115),conn[_0x50134d(0x11e)]),conn['ev'][_0x50134d(0xdd)](_0x50134d(0xf1),conn[_0x50134d(0x11b)]),conn['ev'][_0x50134d(0xdd)](_0x50134d(0x10e),conn[_0x50134d(0xd1)]),conn['ev'][_0x50134d(0xdd)](_0x50134d(0xbb),conn[_0x50134d(0xeb)])),conn['welcome']='Halo,\x20*@user*\x0aSelamat\x20datang\x20di\x20group\x20*@group*',conn[_0x50134d(0x11f)]=_0x50134d(0xf7),conn[_0x50134d(0xce)]=_0x50134d(0xf3),conn[_0x50134d(0xb0)]=_0x50134d(0x108),conn[_0x50134d(0x11c)]='Deskripsi\x20telah\x20diubah\x20menjadi\x20\x0a@desc',conn['sSubject']=_0x50134d(0xfb),conn[_0x50134d(0x10f)]=_0x50134d(0x114),conn[_0x50134d(0x129)]=_0x50134d(0xb3),conn['handler']=handler[_0x50134d(0xae)]['bind'](global['conn']),conn[_0x50134d(0xe4)]=handler[_0x50134d(0xe4)][_0x50134d(0xd5)](global[_0x50134d(0xc3)]),conn['groupsUpdate']=handler[_0x50134d(0x11e)][_0x50134d(0xd5)](global[_0x50134d(0xc3)]),conn[_0x50134d(0x11b)]=handler['deleteUpdate'][_0x50134d(0xd5)](global[_0x50134d(0xc3)]),conn[_0x50134d(0xd1)]=connectionUpdate[_0x50134d(0xd5)](global[_0x50134d(0xc3)]),conn[_0x50134d(0xeb)]=saveCreds[_0x50134d(0xd5)](global[_0x50134d(0xc3)],!![]),conn['ev']['on'](_0x50134d(0xfa),conn[_0x50134d(0xae)]),conn['ev']['on'](_0x50134d(0xbe),conn['participantsUpdate']),conn['ev']['on'](_0x50134d(0x115),conn[_0x50134d(0x11e)]),conn['ev']['on'](_0x50134d(0xf1),conn[_0x50134d(0x11b)]),conn['ev']['on']('connection.update',conn[_0x50134d(0xd1)]),conn['ev']['on'](_0x50134d(0xbb),conn['credsUpdate']),isInit=![],!![];};const pluginFolder=global[_0x461363(0x10c)](join(__dirname,_0x461363(0xd6))),pluginFilter=_0x1952e7=>/\.js$/[_0x461363(0xef)](_0x1952e7);global[_0x461363(0x113)]={};async function filesInit(){const _0x570d87=_0x461363;for(let _0x2d4181 of readdirSync(pluginFolder)[_0x570d87(0x105)](pluginFilter)){try{let _0x34fc7c=global[_0x570d87(0xcd)](join(pluginFolder,_0x2d4181));const _0x5d96b0=await import(_0x34fc7c);global[_0x570d87(0x113)][_0x2d4181]=_0x5d96b0['default']||_0x5d96b0;}catch(_0x6ef919){conn[_0x570d87(0xde)][_0x570d87(0x118)](_0x6ef919),delete global[_0x570d87(0x113)][_0x2d4181];}}}filesInit()[_0x461363(0xe3)](_0x45e2cf=>console[_0x461363(0xb4)](Object['keys'](global['plugins'])))[_0x461363(0xfd)](console[_0x461363(0x118)]),global[_0x461363(0xe2)]=async(_0x440599,_0x40062d)=>{const _0x5406cf=_0x461363;if(pluginFilter(_0x40062d)){let _0x5255ab=global[_0x5406cf(0xcd)](join(pluginFolder,_0x40062d),!![]);if(_0x40062d in global[_0x5406cf(0x113)]){if(existsSync(_0x5255ab))conn[_0x5406cf(0xde)]['info'](_0x5406cf(0xd4)+_0x40062d+'\x27');else return conn[_0x5406cf(0xde)][_0x5406cf(0xd3)](_0x5406cf(0xbd)+_0x40062d+'\x27'),delete global[_0x5406cf(0x113)][_0x40062d];}else conn[_0x5406cf(0xde)]['info'](_0x5406cf(0xbc)+_0x40062d+'\x27');let _0x4bd5b1=_0x5079c8(readFileSync(_0x5255ab),_0x40062d,{'sourceType':_0x5406cf(0xfc),'allowAwaitOutsideFunction':!![]});if(_0x4bd5b1)conn[_0x5406cf(0xde)][_0x5406cf(0x118)]('syntax\x20error\x20while\x20loading\x20\x27'+_0x40062d+'\x27\x0a'+format(_0x4bd5b1));else try{const _0x1f331b=await import(global[_0x5406cf(0xcd)](_0x5255ab)+_0x5406cf(0xf2)+Date[_0x5406cf(0xb5)]());global[_0x5406cf(0x113)][_0x40062d]=_0x1f331b[_0x5406cf(0xad)]||_0x1f331b;}catch(_0x423471){conn[_0x5406cf(0xde)][_0x5406cf(0x118)]('error\x20require\x20plugin\x20\x27'+_0x40062d+'\x0a'+format(_0x423471)+'\x27');}finally{global[_0x5406cf(0x113)]=Object['fromEntries'](Object[_0x5406cf(0xe7)](global[_0x5406cf(0x113)])[_0x5406cf(0xa9)](([_0x1f07eb],[_0x4d7d6e])=>_0x1f07eb[_0x5406cf(0xdb)](_0x4d7d6e)));}}},Object[_0x461363(0xf8)](global[_0x461363(0xe2)]),watch(pluginFolder,global[_0x461363(0xe2)]),await global['reloadHandler']();async function _quickTest(){const _0x4c7c82=_0x461363;let _0x4d49e3=await Promise[_0x4c7c82(0x100)]([spawn(_0x4c7c82(0xee)),spawn(_0x4c7c82(0xd7)),spawn(_0x4c7c82(0xee),['-hide_banner',_0x4c7c82(0x104),'error',_0x4c7c82(0xca),_0x4c7c82(0x101),'-frames:v','1','-f',_0x4c7c82(0xa7),'-']),spawn(_0x4c7c82(0xd9)),spawn(_0x4c7c82(0xc1)),spawn('gm'),spawn(_0x4c7c82(0x120),[_0x4c7c82(0xd8)])][_0x4c7c82(0x112)](_0x102af0=>{const _0x5791d=_0x4c7c82;return Promise[_0x5791d(0xe6)]([new Promise(_0x14aa3f=>{const _0x38a207=_0x5791d;_0x102af0['on'](_0x38a207(0xc6),_0x51a8cc=>{_0x14aa3f(_0x51a8cc!==0x7f);});}),new Promise(_0x12ca42=>{const _0x44e1b1=_0x5791d;_0x102af0['on'](_0x44e1b1(0x118),_0x37283b=>_0x12ca42(![]));})]);})),[_0x6f2a41,_0x5e4cdb,_0x29bc24,_0x1080f8,_0x2c2b83,_0x39250f,_0x40fe77]=_0x4d49e3;console[_0x4c7c82(0xb4)](_0x4d49e3);let _0x58f1c3=global[_0x4c7c82(0x102)]={'ffmpeg':_0x6f2a41,'ffprobe':_0x5e4cdb,'ffmpegWebp':_0x29bc24,'convert':_0x1080f8,'magick':_0x2c2b83,'gm':_0x39250f,'find':_0x40fe77};Object[_0x4c7c82(0xf8)](global[_0x4c7c82(0x102)]);if(!_0x58f1c3[_0x4c7c82(0xee)])conn['logger']['warn']('Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)');if(_0x58f1c3[_0x4c7c82(0xee)]&&!_0x58f1c3[_0x4c7c82(0xb2)])conn[_0x4c7c82(0xde)][_0x4c7c82(0xd3)]('Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)');if(!_0x58f1c3['convert']&&!_0x58f1c3['magick']&&!_0x58f1c3['gm'])conn[_0x4c7c82(0xde)][_0x4c7c82(0xd3)](_0x4c7c82(0xe9));}_quickTest()[_0x461363(0xe3)](()=>conn[_0x461363(0xde)][_0x461363(0xab)](_0x461363(0xf0)))[_0x461363(0xfd)](console[_0x461363(0x118)]);