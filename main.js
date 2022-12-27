var express = require("express");
var nodemailer = require("nodemailer");
var app = express();

/* Creamos la función al enviar a traves de nuestra aplicacion 'express'  */
app.post('/send-email', (req, res) =>{

    /* Creamos el transporte del emal a traves de Ethereal */
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        auth: {
            user: 'marquis.weimann63@ethereal.email',
            pass: 'DnqhFxHuRbRjXG2TQ8'
    }
    })

    transporter.verify((error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Ready to Send");
        }
      });

    /* Creamos las variables que remplazaran el valor de 'request'  */

    let name = req.body.name + req.body.lastname;
    let email = req.body.email;
    let phone = req.body.phone;
    let menssage = req.body.menssage;
    let mailToSend = {
        from: name,
        to: 'jaredazcarate97@gmail.com',
        subjetc:'Form from second project',
        html: 
            `<p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <p>Menssage: ${menssage}</p>`,
    }

    transporter.sendMail (mailToSend, (error)=>{
        if (error)
            {   console.log('Error al enviar');
                res.status(500)}
            else{
                console.log('Mensaje enviado');
                res.status(200)
            }
    });
})


/* Indicamos la ruta donde estará activo el servidor */
app.listen(3001, ()=>{
    console.log('Active Server');
})