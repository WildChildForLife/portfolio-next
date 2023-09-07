'use client';

import Icon from "@/app/fragments/Icon/_Icon";
import Captcha from "../Captcha/Captcha";
import { useEffect, useRef, useState } from "react";
import { ContactFormProps } from "@/app/types/props";
import { ContactFormType, FormResponseType } from "@/app/types";
import { formConstraints as constraints } from "./form-constraints";
import { interestList } from "./interest-list";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const FORM_CONTACT_API_URI = '/api/send/contact-form';

const ContactForm: React.FC<ContactFormProps> = ({ onResponse }) => {
    const [ HCaptchaToken, setHCaptchaToken ] = useState<string | null>(null);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isSent, setIsSent ] = useState(false);
    const captchaRef = useRef<HCaptcha>(null);
    
    useEffect(() => {
        if (isSent) {
            captchaRef.current?.execute();
        }
    }, [isSent])
    
    const textAreaSize = {
        cols: 30,
        rows: 10
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        if (HCaptchaToken === null) {
            onResponse({
                status: 'error',
                message: 'Captcha Missing'
            });

            setIsLoading(false);
            return;
        }

        const formData = e.target as HTMLFormElement;

        try {
            const { status, message } = await send({
                sender: (formData.sender as HTMLInputElement).value,
                company: (formData.company as HTMLInputElement).value,
                email: (formData.email  as HTMLInputElement).value,
                interest: (formData.interest as HTMLSelectElement).value,
                message: (formData.message as HTMLTextAreaElement).value,
                hcaptchaToken: HCaptchaToken
            });

            onResponse({
                status,
                message
            });

            setIsSent((status === 'success'));
        } catch (error: any) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (isSent) {
            const form = document.getElementById('contact-form') as HTMLFormElement;
            form.reset();
        }

        setIsSent(false);
    }, [isSent])

    return (
        <form id="contact-form" onSubmit={onSubmit}>
            <div className="group-input group-name">
                <label htmlFor="name">Your name</label>
                <input
                    className="input-field"
                    type="text"
                    id="name"
                    name="sender"
                    placeholder="Elon Musk"
                    required
                    minLength={constraints.sender.minLength}
                    maxLength={constraints.sender.maxLength}
                    pattern={constraints.sender.pattern}
                    title={constraints.sender.title}
                />
            </div>
            <div className="group-input group-company">
                <label htmlFor="company">Your company</label>
                <input
                    className="input-field"
                    type="text"
                    id="company"
                    name="company"
                    placeholder="X Corp"
                    minLength={constraints.company.minLength}
                    maxLength={constraints.company.maxLength}
                    pattern={constraints.company.pattern}
                />
            </div>
            <div className="group-input group-email">
                <label htmlFor="email">Your email</label>
                <input
                    className="input-field"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="elon@x.com"
                    required
                />
            </div>
            <div className="group-input group-interest">
                <label htmlFor="interest">What you are looking for</label>
                <select className="input-field" defaultValue={'solution-architecture'} name="interest" id="interest" required>
                    {interestList.map(([tag, interest], index) => (
                        <option key={index} value={tag}>{interest}</option>    
                    ))}
                </select>
            </div>
            <div className="group-input group-message">
                <label htmlFor="message">Your Message</label>
                <textarea
                    className="input-field"
                    name="message"
                    id="message"
                    cols={textAreaSize.cols}
                    rows={textAreaSize.rows}
                    required
                    minLength={constraints.message.minLength}
                    maxLength={constraints.message.maxLength}
                ></textarea>
            </div>
            <Captcha setHCaptchaToken={setHCaptchaToken}></Captcha>
            <div className="group-input group-submit">
                <button type="submit">
                    {isLoading ? 
                        (<>Sending... <Icon type="ai" code='AiOutlineLoading3Quarters' className="loading-icon" /></>) :
                        (<>Send <Icon type="bs" code='BsFillSendCheckFill' /></>)
                    }
                </button>
            </div>
        </form>
    )
}

const send = async (data: ContactFormType): Promise<FormResponseType> => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    }

    try {
        const response = await fetch(
            FORM_CONTACT_API_URI, 
            options
        );

        const { status, message } = await response.json();

        return (status === 'success') ? {
            status,
            message: 'Thanks for reaching out. I will get back to you as soon as possible.'
        } : {
            status,
            message
        }
    } catch (error: any) {
        return {
            status: 'error',
            message: error.message
        }
    }   
}

export default ContactForm;