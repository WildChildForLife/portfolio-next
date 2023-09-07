'use client';

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ContactForm from "@/app/fragments/ContactForm/ContactForm";
import Icon from "@/app/fragments/Icon/Icon";
import { SectionWithIdPropsType } from "@/app/types/props";
import { FormResponseType } from "@/app/types";
import WorldMapSVGComponent from '/public/assets/world.svg';

const Contact: React.FC<SectionWithIdPropsType> = ({ id }) => {
    const [ formResponse, setFormResponse ] = useState<null | FormResponseType>(null);
    
    return (
        <section id={id} className="contact-section">
            <WorldMapSVGComponent className="svg-worldmap"></WorldMapSVGComponent>
            <div className="form-container">
                <div className="title-n-error">
                    <h2>Get in touch</h2>
                    {formResponse !== null && 
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
                <ContactForm onResponse={setFormResponse}></ContactForm>
            </div>
        </section>
    )
}

export default Contact;