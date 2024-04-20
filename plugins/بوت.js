let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*✦┇  اهـليـن للمـساعـدة اكــتب الـاوامـر او تـضيف البـوت اكتـب المـطور ┇✓*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/48d5818432463d9e3f2bd.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;
