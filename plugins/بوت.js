let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*✦┇ اهـليـن فـيـك للمـساعـدة اكــتب الـاوامـر ┇✓*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/c8ab48a3b01559cc5f27e.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;
