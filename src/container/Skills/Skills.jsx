import { motion } from "framer-motion";

import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./Skills.scss";

const skills = [
    {
        name: "React",
        bgColor: "#edf2f8",
        icon: images.react,
    },
    {
        name: "Redux",
        bgColor: "#edf2f8",
        icon: images.redux,
    },
    {
        name: "API",
        bgColor: "#edf2f8",
        icon: images.api,
    },
    {
        name: "Git",
        bgColor: "#edf2f8",
        icon: images.git,
    },
    {
        name: "Sass",
        bgColor: "#edf2f8",
        icon: images.sass,
    },
    {
        name: "Javascript",
        bgColor: "#edf2f8",
        icon: images.javascript,
    },
    {
        name: "Python",
        bgColor: "#edf2f8",
        icon: images.python,
    },
    {
        name: "Figma",
        bgColor: "#edf2f8",
        icon: images.figma,
    },
    {
        name: "MTA",
        bgColor: "#edf2f8",
        icon: images.mta,
    },
];

const expereince = [
    {
        name: "Frontend Developer Trainee",
        company: "Sharpener Tech",
        desc: "During my tenure at Sharpener, I underwent a comprehensive 9-month training program, which equipped me with the essential skills required to excel as a Frontend Developer. Engaging in various projects during this period, I honed my expertise in Core Javascript, Data Structures and Algorithms (DSA), React, Redux, Hooks, Axios, Bootstrap, API integration, Firebase, and other pertinent technologies.",
    },
    {
        name: "Cybersecurity Analyst",
        company: "Precise Testing Solutions",
        desc: "As a Cybersecurity Analyst, I actively worked on projects focusing on various areas such as Vulnerability Assessment and Penetration Testing (VAPT), Secure Code Review, API Security Testing, and Cloud Security Testing. This experience allowed me to develop a strong understanding of cybersecurity principles and methodologies, enabling me to effectively assess and enhance the security posture of systems and applications.",
    },
    {
        name: "NOC Engineer",
        company: "Fusion Net",
        desc: "Worked as NOC Engineer providing support and L1 troubleshooting for ISP Clients.",
    },
    {
        name: "Cybersecurity Intern",
        company: "Gurugram Police",
        desc: "During my internship at Gurugram Police Cybersecurity in the summer of 2021, I gained valuable expertise in the field of cyber crimes, cyber law, and the diverse modus operandi employed by cyber criminals.",
    },
];

const Skills = () => {
    return (
        <AppWrap idName='skills' className='app__whitebg'>
            <MotionWrap className='app__skills'>
                <h2 className='head-text'>Skills & Expereince</h2>

                <div className='app__skills-container'>
                    <motion.div className='app__skills-list'>
                        {skills.map((skill) => (
                            <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5 }}
                                className='app__skills-item app__flex'
                                key={skill.name}
                            >
                                <div
                                    className='app__flex'
                                    style={{
                                        backgroundColor: skill.bgColor,
                                    }}
                                >
                                    <img src={skill.icon} alt={skill.name} />
                                </div>
                                <p className='p-text'>{skill.name}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div className='app__skills-exp'>
                        {expereince.map((work) => (
                            <>
                                <motion.div
                                    whileInView={{ opacity: [0, 1] }}
                                    transition={{ duration: 0.5 }}
                                    className='app__skills-exp-work'
                                    data-tip
                                    data-for={work.name}
                                    key={work.name}
                                >
                                    <h4 className='bold-text'>{work.name}</h4>
                                    <p
                                        style={{ fontWeight: 600 }}
                                        className='p-text'
                                    >
                                        {work.company}
                                    </p>
                                    <p className='p-text'>{work.desc}</p>
                                </motion.div>
                            </>
                        ))}
                    </motion.div>
                </div>
            </MotionWrap>
        </AppWrap>
    );
};

export default Skills;
