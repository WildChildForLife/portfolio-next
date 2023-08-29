import ContactFormType from "./ContactFormType";

type EmailType = Omit<ContactFormType, 'hcaptchaToken'>;

export default EmailType;