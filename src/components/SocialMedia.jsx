import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href='https://www.linkedin.com/in/sonu-webguardian/' target='_blank' rel='noreferrer'>
                <BsLinkedin />{" "}
            </a>
            <a href='https://github.com/lenientsonu' target='_blank' rel='noreferrer'>
                <BsGithub />{" "}
            </a>
            <a href='https://www.instagram.com/sonuwebguardian/' target='_blank' rel='noreferrer'>
                <BsInstagram />{" "}
            </a>
            <a href='https://www.facebook.com/5am.ny/' target='_blank' rel='noreferrer'>
                <FaFacebook />{" "}
            </a>
        </div>
    );
};

export default SocialMedia;
