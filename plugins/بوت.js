let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `✦*┇ اهــلًا للمـساعـدة اكــتب الـاوامـر ┇*✓`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/ea51c795740b96b5a5f17.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;
