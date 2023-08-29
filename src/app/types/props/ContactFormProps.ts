import { ComponentType } from "react";
import FormResponseType from "../FormResponseType";

type ContactFormProps = {
    onResponse: (payload: FormResponseType) => void;
}

export default ContactFormProps;