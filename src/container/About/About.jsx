import { motion } from "framer-motion";

import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import { images } from "../../constants";

import "./About.scss";

const abouts = [
    {
        title: "Frontend Developer",
        description:
            "Talented Frontend Developer skilled in creating engaging user interfaces with technologies like React. ",
        imgUrl: images.about02,
    },
    {
        title: "Cybersecurity Analyst",
        description:
            "Experienced Cybersecurity Analyst having extensive methodology for securing Web Applications & Networks.",
        imgUrl: images.about01,
    },
    {
        title: "Graphics Designer",
        description:
            "Creative Graphic Designer with abilities to create stunning and eye-cathcing designs.",
        imgUrl: images.about03,
    },
    {
        title: "Cyber Crime Intervention Officer",
        description:
            "Certified CCIO having essential knowledge of cyber crimes & cyber laws to act as a first responder in case of cyber crimes.",
        imgUrl: images.about04,
    },
];

const About = () => {
    return (
        <AppWrap idName='about' className='app__whitebg'>
            <MotionWrap className='app__about'>
                <h2 className='head-text'>
                    I Know That <span>Good Website</span> <br /> means{" "}
                    <span>Good Business</span>{" "}
                </h2>

                <div className='app__profiles'>
                    {abouts.map((about, index) => (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: "tween" }}
                            className='app__profile-item'
                            key={about.title + index}
                        >
                            <img src={about.imgUrl} alt={about.title} />
                            <h2 className='bold-text' style={{ marginTop: 20 }}>
                                {about.title}
                            </h2>
                            <p className='p-text' style={{ marginTop: 10 }}>
                                {about.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </MotionWrap>
        </AppWrap>
    );
};

export default About;
