import { sticker } from '../lib/sticker.js';
import _0x68a0e7 from 'node-fetch';
import _0x18d639 from '@whiskeysockets/baileys';

let handler = async (_0x3534e4, { conn: _0x4a531d }) => {
  try {
    if (_0x3534e4['quoted']?.['sender']) _0x3534e4['mentionedJid']['push'](_0x3534e4['quoted']['sender']);
    if (!_0x3534e4['mentionedJid']['length']) _0x3534e4['mentionedJid']['push'](_0x3534e4['sender']);

    let _0x187e5e = await _0x68a0e7('https://api.waifu.pics/sfw/pat');
    let _0x199a1b = await _0x187e5e['json']();
    let { url: _0x5dd3a5 } = _0x199a1b;

    let senderName = _0x4a531d.getName(_0x3534e4.sender);

    let mentionedNames = _0x3534e4['mentionedJid']
      .map(_0xb7b834 => _0xb7b834 === _0x3534e4['sender'] ? 'alguien\x20' : _0x4a531d.getName(_0xb7b834))
      .join(',\x20');

    let message = senderName + (mentionedNames.length > 0 ? '\x20le dio palmaditas a ' + mentionedNames : '\x20te dio palmaditas');

    let _0xca6154 = await sticker(null, _0x5dd3a5, message);

    _0x4a531d['sendFile'](_0x3534e4['chat'], _0xca6154, null, { 'asSticker': !![] });
  } catch (_0x17e172) {}
};

handler['command'] = /^(pat|palmaditas|cariños|mimos|patt)$/i;
handler['register'] = !![];
handler['limit'] = 0x3;

export default handler;