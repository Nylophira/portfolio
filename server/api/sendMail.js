
 import nodemailer from 'nodemailer';

export default eventHandler(async (event) => {
    try {
        
        const body = await readBody(event);
        console.log(body);
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'a.millet.dev@gmail.com',
                pass: process.env.NUXT_MAIL
            }
        });

        const mailOptions = {
            from: 'a.millet.dev@gmail.com',
            to: 'amandine_millet@live.fr',
            subject: body.objet,
            text: `Email: ${body.email}\nSon message est: ${body.message}`
        };

        const info = await transporter.sendMail(mailOptions);

        console.log('E-mail envoyé : ' + info);
        
    } catch (error) {
        console.log(error);
    }
}) 