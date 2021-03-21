import handler from "./../../libs/handler";
import nodemailer from 'nodemailer';

export const main = handler(async (event, context) => {
    const sucessSend = {
        message: ''
    };
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'minionsbgc@gmail.com',
            pass: 'pedro@123'
        }
      });
    let info = await transporter.sendMail({
    from:'"Minion shop aqui!" <minionsbgc@gmail.com>',
    to:"pedroaluz137@gmail.com, thiago@bgcbrasil.com.br",
    subject:"Nova reserva ✔",
    text:"Nova reserva realizada no e-commerce",
    html:`<h1>Nova reserva feita!</h1><br><b>Eae, tudo bem? Vim aqui só pra confirmar que sua reserva foi feita!</b> <br> <img src="https://thumbs.gfycat.com/GlassAngryCanine-size_restricted.gif"/>`,
  });
    if (!info.messageId) {
        sucessSend.message = 'Não conseguimos fazer a reserva!';
    } else {
        sucessSend.message = 'Reservado com sucesso!';
    }
    return sucessSend.message;
});