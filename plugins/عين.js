//كود لعبة السيارات
//تابع لقنات
//https://whatsapp.com/channel/0029VaWuSkHGehEKy41ibw3k
let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('
                                 [

    {

        "img": "https://telegra.ph/file/acf8ffab56ae01b9b6f02.jpg",

        "name": "جاكوار"

    },

    {

        "img": "https://telegra.ph/file/5a1e80120085368cee770.jpg",

        "name": "ميزوهارا"

    },

    {

        "img": "https://telegra.ph/file/c2182bcc15ff3e64f324d.jpg",

        "name": "اشيلاد"

    }

]')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*${command.toUpperCase()}*
  ❐↞┇الـوقـت⏱️↞ *${(timeout / 1000).toFixed(2)} ┇
 استخدم .انسحب للأنسحاب
  ❐↞┇الـجـائـزة🎖↞ ${poin} نقاط┇
┃𝑀𝐼𝑍𝑈𝐻𝐴𝑅𝐴-𝐵𝛩𝑇┃↞⎔
     `.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ ${json.name}*┇`, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['عين']
handler.tags = ['new']
handler.command = /^عين/i

export default handler
