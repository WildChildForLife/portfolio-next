import { ContactFormType, EmailType } from "@/app/types";
import { NextApiRequest, NextApiResponse } from "next";

import { formConstraints as constraints } from "@/app/fragments/ContactForm/form-constraints";
import { interestList } from "@/app/fragments/ContactForm/interest-list";

const WEB3_API_URL = 'https://api.web3forms.com/submit';
const HCATPCHA_VERIFY_URL = 'https://hcaptcha.com/siteverify';
const HCATPCHA_SECRET = process.env.HCAPTCHA_SECRET;
const subject = 'Incoming Portfolio Contact'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    // Get data submitted in request's body.
    const body = req.body;
    
    const errors = await catchErrors(body);
    if (errors !== null) {
        return res.status(400).json({ status: 'error', message: errors.message });
    }

    sendEmail({ 
        sender: body.sender, 
        email: body.email,
        company: body.company, 
        interest: body.interest, 
        message: body.message,
    });

    // Found the name.
    // Sends a HTTP success code
    res.status(200).json({ status: 'success' })
}

const sendEmail = async (form: EmailType) => {
    const payload = {
        ...form,
        'access_key': process.env.WEB3FORM_API_KEY,
        subject
    }

    try {
        await fetch(WEB3_API_URL, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error: any) {
        console.error(error.response.body);
        console.log('Error sending email');
    }
}

const catchErrors = async (data: ContactFormType): Promise<null | { message: string }> => {
    if (data.sender.length < constraints.sender.minLength) {
        return { message: 'Name is too short' };
    }

    if (data.sender.length > constraints.sender.maxLength) {
        return { message: 'Name is too long' };
    }

    if (data.company.length < constraints.company.minLength) {
        return { message: 'Company is too short' };
    }

    if (data.company.length > constraints.company.maxLength) {
        return { message: 'Company is too long' };
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        return { message: 'Invalid email address' };
    }

    if (data.message.length < constraints.message.minLength) {
        return { message: 'Message is too short' };
    }

    if (data.message.length > constraints.message.maxLength) {
        return { message: 'Message is too long' };
    }

    if (!interestList.some(([tag]) => tag === data.interest)) {
        return { message: 'Wrong interest' };
    }

    const hCaptchasReponse = await verifyCaptcha(data.hcaptchaToken);
    
    if (!hCaptchasReponse || !hCaptchasReponse.success) {
        return { message: 'Wrong captcha' };
    }

    return null;
}

const verifyCaptcha = async (token: string) => {
    const response = await fetch(HCATPCHA_VERIFY_URL, {
        method: 'POST',
        body: `secret=${HCATPCHA_SECRET}&response=${token}`,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    return response.json();
}

export default handler;