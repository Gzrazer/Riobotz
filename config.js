/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6285828982550', 'Rio', true],
  ['6285828982550'], 
  ['6285828982550'],
  ['6285828982550']
] // Nomor Owner

global.mods = ['6285828982550'] 
global.prems = ['6285828982550', '6285174306183', '6285174306183']

// Harus di isi
global.btc = 'isi_dulu' // https://api.botcahx.live
global.lann = 'isi_dulu' // https://api.betabotz.org

// Fitur dari https://api.betabotz.org (global.lann) : remini, toanime openai. mau request fitur? request aja nanti saya buatkan dari api itu

// Fitur dari https://api.botcahx.live (global.btc) : downloader douyin, cecan indo cina, asupan, dl twitter dll (contoh? cek video saya yang nero V3) mau request fitur? request aja nanti saya buatkan dari api itu

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zenzapis.xyz': '675e34de8a', 
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.betabotz.org': 'isi_dulu'
}

// Sticker WM
global.nans = 'NERO MD BY NANS OFFC'
global.packname = 'NERO MD┃ᴮᴼᵀ' 
global.author = '@nansoffc' 
global.fgig = '▢ Ikuti saya di Instagram \nhttps://www.instagram.com/afirio_umasangaji\n' 
global.dygp = 'https://chat.whatsapp.com/KLbE1i5U4y9I0OVli5jcKM'
global.fgsc = 'https://github.com/nanzone' 
global.fgyt = 'http://nansofficial.me/'
global.fgpyp = 'https://saweria.co/nansofficial'
global.fglog = 'https://i.ibb.co/Csp01NQ/nero-thumbnail.jpg'
global.thumb = 'https://i.ibb.co/y0vgNPT/20230723-112852.jpg'

global.wait = '*⌛ _Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})