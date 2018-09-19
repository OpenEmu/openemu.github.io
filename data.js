// data
var oe = new Vue({
  el: '.page',
  data: {
    details: {
      version: '2.0.7',
      req: '10.11'
    },
    download: {
      latest: 'https://github.com/OpenEmu/OpenEmu/releases/download/v2.0.7/OpenEmu_2.0.7.zip',
      experimental: 'https://github.com/OpenEmu/OpenEmu/releases/download/v2.0.7/OpenEmu_2.0.7-experimental.zip'
    },
    intro: [
      { th: 'intro-th1.jpg', main: 'intro-nes-grid.png', active: true },
      { th: 'intro-th2.jpg', main: 'intro-gb-grid.png' },
      { th: 'intro-th3.jpg', main: 'intro-md.png' },
      { th: 'intro-th4.jpg', main: 'intro-prefs.png' },
      { th: 'intro-th5.jpg', main: 'intro-saves.png' },
      { th: 'intro-th6.jpg', main: 'intro-list.png' }
    ],
    controls: [
      { name: 'PlayStation Dualshock 3 and Dualshock 4' },
      { name: 'Nintendo Switch Pro Controller' },
      { name: 'Wiimote and Wii U Pro' },
      { name: 'Xbox 360 & 3rd party (driver required)' },
      { name: 'SteelSeries Nimbus' },
      { name: 'SteelSeries Stratus XL' },
      { name: 'Horipad Ultimate' },
      { name: 'Sega Saturn USB' },
      { name: 'PS3 Neo Geo Pad USB' },
      { name: 'Logitech series (Dual Action, Rumblepad 2, Gamepad F310/F510/F710)' },
      { name: 'Gravis GamePad Pro' },
      { name: 'Retrode (SNES)' },
      { name: 'N64 Adaptoid' }
    ],
    systems: [
      { name: 'Atari 2600', core: 'Stella' },
      { name: 'Atari 5200', core: 'Atari800' },
      { name: 'Atari 7800', core: 'ProSystem' },
      { name: 'Atari Lynx', core: 'Mednafen' },
      { name: 'ColecoVision', core: 'CrabEmu' },
      { name: 'Famicom Disk System', core: 'Nestopia' },
      { name: 'Game Boy / Game Boy Color', core: 'Gambatte' },
      { name: 'Game Boy Advance', core: 'mGBA' },
      { name: 'Game Gear', core: 'Genesis Plus GX' },
      { name: 'Intellivision', core: 'Bliss' },
      { name: 'NeoGeo Pocket', core: 'Mednafen' },
      { name: 'Nintendo (NES) / Famicom', core: 'FCEUX, Nestopia' },
      { name: 'Nintendo DS', core: 'DeSmuME' },
      { name: 'Nintendo 64', core: 'Mupen64Plus' },
      { name: 'Odyssey²/Videopac+', core: 'O2EM' },
      { name: 'PC-FX', core: 'Mednafen' },
      { name: 'SG-1000', core: 'Genesis Plus GX' },
      { name: 'Sega 32X', core: 'picodrive' },
      { name: 'Sega CD / Mega CD', core: 'Genesis Plus GX' },
      { name: 'Sega Genesis / Mega Drive', core: 'Genesis Plus GX' },
      { name: 'Sega Master System', core: 'Genesis Plus GX' },
      { name: 'Sega Saturn', core: 'Mednafen' },
      { name: 'Sony PlayStation', core: 'Mednafen' },
      { name: 'Sony PSP', core: 'PPSSPP' },
      { name: 'Super Nintendo (SNES)', core: 'Higan, Snes9x' },
      { name: 'TurboGrafx-16/PC Engine/SuperGrafx', core: 'Mednafen' },
      { name: 'TurboGrafx-CD/PC Engine CD', core: 'Mednafen' },
      { name: 'Virtual Boy', core: 'Mednafen' },
      { name: 'Vectrex', core: 'VecXGL' },
      { name: 'WonderSwan', core: 'Mednafen' }
    ],
    donate: [
      { name: 'Cash App', url: 'https://cash.me/$openemu', img: 'donate-cashapp.svg', caption: 'U.S. Debit Only' },
      { name: 'Patreon', url: 'https://www.patreon.com/openemu', img: 'donate-patreon.svg', caption: 'Worldwide Credit/Debit/PayPal | One-time or monthly' },
      { name: 'Bitcoin', img: 'donate-bitcoin.svg', caption: 'BTC: 1BjRxVxjZXfRvjTLwcjCGPQSHMYbDbapcH' },
      { name: 'Bitcoincash', img: 'donate-bitcash.svg', caption: 'BCH: 1PZTjJASp8e56gx2pHAvZvKHb4EiqG1kKz' }
    ]
  }
});