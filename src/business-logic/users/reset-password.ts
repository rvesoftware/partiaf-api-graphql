import { Client } from "whatsapp-web.js";
import qrcode from 'qrcode-terminal'
import otpGenerator from 'otp-generator';
import {Twilio} from "twilio";
const ACCOUNTSID = 'ACcda26929288e491c9c7213f2b3e20870'
const AUTHTOKEN = 'f796082960aa0e199eea728d1cc92462'
const TWILIO_NUMBER = '15735334809'
export const resetPassword = async (id: string, phone: number): Promise<Boolean | Error> => {
    const twilio = new Twilio(ACCOUNTSID, AUTHTOKEN)

    const otpCode = otpGenerator.generate(6, {lowerCaseAlphabets : false, upperCaseAlphabets: false, specialChars: false});

    twilio.messages.create({
        from: TWILIO_NUMBER,
        to: `57${phone}`,
        body: `Partiaf te indica que tu codigo es:${otpCode}`
    }).then((message) => console.log(message.sid));

    return true;
}