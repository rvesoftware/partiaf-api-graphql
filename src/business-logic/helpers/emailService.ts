import mailgun from 'mailgun-js'
import otpGenerator from 'otp-generator'

const DOMAIN = 'realvisionenterprise.com';
const mg = mailgun({ apiKey: 'd9ccea9dc3536d3c9366a12a2c993180-523596d9-45da8666', domain: DOMAIN });

export const sendConfirmationEmail = async (email:string) => {
    const code = otpGenerator.generate(6, {lowerCaseAlphabets: false, upperCaseAlphabets: false, specialChars:false })
    const data = {
        from: 'noreply@partiaf.com',
        to: email,
        subject: 'Partiaf Codigo Verificacion de Correo',
        html: 
        `
        <div style="margin: 0 auto; max-width: 500px;">
            <h2>Verifica tu direccion de correo</h2>
            <p>Gracias por iniciar el nuevo proceso de creación de cuentas de <strong>Partiaf</strong>. Queremos asegurarnos de que realmente eres tú. Ingrese el siguiente código de verificación cuando se le solicite. Si no desea crear una cuenta, puede ignorar este mensaje.</p>
            <p style="text-align:center; font-size:14px;">Tu codigo de verificacion es</p>
            <h2 style="margin-bottom: 5px; text-align:center; font-size:25px;">${code}</h2>
            <p style="text-align:center;">(Este codigo es valido por 30 minutos)</p>
        </div>

        `
    };

    mg.messages().send(data, function (error:any, body:any) {
        if (error) {
           throw new Error("Send email error.");
        }

        return code;
    });
    return code;
}


export const sendChangePasswordEmail = async (email:string) => {
    const data = {
        from: 'noreply@partiaf.com',
        to: email,
        subject: 'Partiaf Cambio de Contrsena',
        html: 
        `
        <div style="margin: 0 auto; max-width: 500px;">
            <h2>Cambio de contrasena</h2>
            <p>Te informamos el cambio de contrasena de tu cuenta. Si fuiste tu, puedes ignorar este mensaje.</p>
        </div>

        `
    };

    mg.messages().send(data, function (error:any, body:any) {
        if (error) {
           throw new Error("Send email error.");
        }

        return 200;
    });
    return 200;
}