'use client';

import Image from 'next/image'
import { motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "@/app/fragments/ContactForm/ContactForm";
import Icon from "@/app/fragments/Icon/Icon";
import { SectionWithIdPropsType } from "@/app/types/props";
import { FormResponseType } from "@/app/types";

const Contact: React.FC<SectionWithIdPropsType> = ({ id }) => {
    const [ formResponse, setFormResponse ] = useState<null | FormResponseType>(null);
    
    return (
        <section id={id} className="contact-section">
            <Image src={"/assets/world.jpg"} fill={true} alt='WorldMap' className="worldmap" />
            <div className="form-container">
                <div className="title-n-error">
                    <h2>Get in touch</h2>
                    {!!formResponse && 
                        <motion.p 
                            className={`${formResponse.status} info`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {formResponse.message}
                            {(formResponse.status === 'success') ?
                                <Icon type="ai" code="AiOutlineCheckCircle"></Icon> :
                                <Icon type="vsc" code="VscError"></Icon>
                            }
                        </motion.p>
                    }
                </div>
                <p>Send me a message using the form below and I will get back to you.</p>
                <ContactForm onResponse={setFormResponse}></ContactForm>
            </div>
        </section>
    )
}

export default Contact;