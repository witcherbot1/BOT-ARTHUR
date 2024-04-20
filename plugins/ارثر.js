let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*⨂┇ الـامــر خـطـأ ســوي نـقـطـة وبـدون فـواصـل ┇〄*`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/48d5818432463d9e3f2bd.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(امر 7|امر 2|امر 1|امر|امر 3|امر 4|امر 5|امر 6)$/i;
handler.command = new RegExp;

export default handler;
