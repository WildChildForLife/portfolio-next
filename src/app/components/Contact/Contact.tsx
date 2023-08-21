'use client';

//import ReCAPTCHA from "react-google-recaptcha";
import Icon from "@/app/fragments/Icon/Icon";

type ContactProps = {
    id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
    const textAreaSize = {
        cols: 30,
        rows: 10
    };

    const constraints = {
        name: {
            minLength: 3,
            maxLength: 40,
            pattern: '[a-zA-Z]{3,40}',
            title: 'Your name can only contain letters and naturally be between 3 and 40 caracaters.'
        },
        company: {
            minLength: 1,
            maxLength: 40,
            pattern: '[a-zA-Z1-9]{1,40}'
        },
        message: {
            minLength: 20,
            maxLength: 400
        }
    }

    const WorldMapSVGComponent = require('../../../../public/assets/world.svg').default;

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    }

    return (
        <section id={id} className="contact-section">
            <WorldMapSVGComponent className="svg-worldmap"></WorldMapSVGComponent>
            <div className="form-container">
                <h2>Get in touch</h2>
                <form onSubmit={onSubmit}>
                    <div className="group-input group-name">
                        <label htmlFor="name">Your name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            placeholder="Elon Musk" 
                            required 
                            minLength={constraints.name.minLength} 
                            maxLength={constraints.name.maxLength} 
                            pattern={constraints.name.pattern} 
                            title={constraints.name.title} 
                        />
                    </div>
                    <div className="group-input group-company">
                        <label htmlFor="company">Your company</label>
                        <input 
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
                            type="email" 
                            id="email" 
                            name="email" 
                            placeholder="elon@x.com" 
                            required 
                        />
                    </div>
                    <div className="group-input group-interest">
                        <label htmlFor="interest">What you are looking for</label>
                        <select name="interest" id="interest" required>
                            <option value="talk">Let&apos;s talk</option>
                            <option value="solution-architecture">Solution Architect</option>
                            <option value="technical-architecture">Technical Architect</option>
                            <option value="infrastructure">Infrastructure</option>
                        </select>
                    </div>
                    <div className="group-input group-message">
                        <label htmlFor="message">Your Message</label>
                        <textarea 
                            name="message" 
                            id="message"
                            cols={textAreaSize.cols} 
                            rows={textAreaSize.rows} 
                            required 
                            minLength={constraints.message.minLength} 
                            maxLength={constraints.message.maxLength}
                        ></textarea>
                    </div>
                    <div className="group-input group-submit">
                        {/* <ReCAPTCHA
                            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                        /> */}
                        <button type="submit">Send <Icon type="bs" code='BsFillSendCheckFill' /></button>
                    </div>
                </form>
            </div>
        </section>        
    )
}

export default Contact;