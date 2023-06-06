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
        name: "Javascript",
        bgColor: "#edf2f8",
        icon: images.javascript,
    },
    {
        name: "Sass",
        bgColor: "#edf2f8",
        icon: images.sass,
    },
    {
        name: "Git",
        bgColor: "#edf2f8",
        icon: images.git,
    },
    {
        name: "API",
        bgColor: "#edf2f8",
        icon: images.api,
    },
];

const expereince = [
    {
        name: "Frontend Developer Trainee",
        company: "Sharpener Tech",
        desc: "I have been as a trainee for 6 months as frontend developer.",
    },
    {
        name: "Cybersecurity Analyst",
        company: "Precise Testing Solutions",
        desc: "I have worked as a cybersecurity analyst.",
    },
    {
        name: "NOC Engineer",
        company: "Fusion Net",
        desc: "I have worked as a NOC Engineer.",
    },
    {
        name: "Cybersecurity Intern",
        company: "Gurugram Police",
        desc: "I have interned at gurugram police cybersecurity summer internship 2021.",
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
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                        />
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
                                        <h4 className='bold-text'>
                                            {work.name}
                                        </h4>
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
