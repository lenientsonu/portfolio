import { motion } from "framer-motion";
import { images } from "../../constants";

import AppWrap from "../../wrapper/AppWrap";

import "./Header.scss";

const scaleVariants = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

const Header = () => {
    return (
        <AppWrap idName='home'>
            <div id='home' className='app__header app__flex'>
                <motion.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className='app__header-info'
                >
                    <div className='app__header-badge'>
                        <div className='badge-cmp app__flex'>
                            <span>👋</span>
                            <div style={{ marginLeft: 20 }}>
                                <p className='p-text'>Hello, I am</p>
                                <h1 className='head-text'>SONU</h1>
                            </div>
                        </div>

                        <div className='tag-cmp app__flex'>
                            <p className='p-text'>Frontend Developer</p>
                            <p className='p-text'>Cybersecurity Analyst</p>
                            <a
                                href='https://drive.google.com/file/d/1PPh-fH2uV2hotYaAbw8-AIDKEAKhFxg9/view?usp=share_link'
                                className="cv-btn"
                                target='_blank'
                                rel='noreferrer'
                            >
                                Download CV
                            </a>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 1, delayChildren: 0.5 }}
                    className='app__header-img'
                >
                    <img src={images.profile} alt='profile_bg' />
                    <motion.img
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        src={images.circle}
                        alt='profile_circle'
                        className='overlay_circle'
                    />
                </motion.div>

                <motion.div
                    variant={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='app__header-circles'
                >
                    {[images.redux, images.react, images.sass].map(
                        (circle, index) => (
                            <div
                                className='circle-cmp app__flex'
                                key={`circle-${index}`}
                            >
                                <img src={circle} alt='circle'></img>
                            </div>
                        )
                    )}
                </motion.div>
            </div>
        </AppWrap>
    );
};

export default Header;
