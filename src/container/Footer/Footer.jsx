import { useState } from "react";

import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./Footer.scss";

const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message } = formData;

    const handleChangeInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        setLoading(true);

        const contact = {
            name,
            email,
            message,
        };

        console.log(contact);
        setLoading(false);
        setIsFormSubmitted(true);
    };

    return (
        <AppWrap idName='contact' className='app__primarybg'>
            <MotionWrap className='app__footer'>
                <h2 className='head-text'>Take a coffee & chat with me</h2>
                <div className='app__footer-cards'>
                    <div className='app__footer-card'>
                        <img src={images.email} alt='email' />
                        <a
                            href='mailto:lenientsonu@gmail.com'
                            className='p-text'
                        >
                            lenientsonu@gmail.com
                        </a>
                    </div>
                    <div className='app__footer-card'>
                        <img src={images.mobile} alt='mobile' />
                        <a href='tel: +91 7497848201' className='p-text'>
                            +91 7497848201
                        </a>
                    </div>
                </div>

                {!isFormSubmitted ? (
                    <div className='app__footer-form app__flex'>
                        <div className='app__flex'>
                            <input
                                className='p-text'
                                type='text'
                                placeholder='Your Name'
                                name='name'
                                value={name}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div className='app__flex'>
                            <input
                                className='p-text'
                                type='email'
                                placeholder='Your Email'
                                name='email'
                                value={email}
                                onChange={handleChangeInput}
                            />
                        </div>
                        <div>
                            <textarea
                                className='p-text'
                                placeholder='Your Message'
                                value={message}
                                name='message'
                                onChange={handleChangeInput}
                            ></textarea>
                        </div>
                        <button
                            type='button'
                            className='p-text'
                            onClick={handleSubmit}
                        >
                            {loading ? "Sending" : "Send Message"}
                        </button>
                    </div>
                ) : (
                    <div>
                        <h3 className='head-text'>
                            Thank you for getting in touch
                        </h3>
                    </div>
                )}
            </MotionWrap>
        </AppWrap>
    );
};

export default Footer;
