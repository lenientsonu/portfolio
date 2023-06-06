import { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./Projects.scss";

const projects = [
    {
        title: "Portfolio Website",
        description: "A modern portfolio Website made with React.",
        projectLink: "netlify link",
        codeLink: "github link",
        imgUrl: images.portfolio,
        tags: ["React", "Portfolio", "All"],
    },
    {
        title: "Expense Tracker Project",
        description:
            "An expense tracker project made with react with premium features.",
        projectLink: "https://lenientsonu-expense-tracker.netlify.app",
        codeLink: "https://github.com/lenientsonu/expense-tracker-react",
        imgUrl: images.expenseTracker,
        tags: ["React", "All"],
    },
    {
        title: "Mailbox Client Project",
        description: "An mailbox client project made with react .",
        projectLink: " https://strike-mail.netlify.app/",
        codeLink: "https://github.com/lenientsonu/mail-box-cleint",
        imgUrl: images.mailbox,
        tags: ["React", "All"],
    },
];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [filterProjects, setFilterProjects] = useState(projects);

    const handleProjectsFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (item === "All") {
                setFilterProjects(projects);
            } else {
                setFilterProjects(
                    projects.filter((project) => project.tags.includes(item))
                );
            }
        }, 500);
    };

    return (
        <AppWrap idName='projects' className='app__primarybg'>
            <MotionWrap className='app__projects'>
                <h2 className='head-text'>
                    My Creative <span>Portfolio</span> section
                </h2>

                <div className='app__project-filter'>
                    {["Portfolio", "WebApp", "React", "All"].map(
                        (item, index) => (
                            <div
                                key={index}
                                onClick={() => handleProjectsFilter(item)}
                                className={`app__project-filter-item app__flex p-text ${
                                    activeFilter === item ? "item-active" : ""
                                }`}
                            >
                                {item}
                            </div>
                        )
                    )}
                </div>

                <motion.div
                    animate={animateCard}
                    transition={{ duration: 0.5, delayChildren: 0.5 }}
                    className='app__project-portfolio'
                >
                    {filterProjects.map((project, index) => (
                        <div
                            className='app__project-item app__flex'
                            key={index}
                        >
                            <div className='app__project-img app__flex'>
                                <img src={project.imgUrl} alt={project.name} />

                                <motion.div
                                    whileHover={{ opacity: [0, 1] }}
                                    transition={{
                                        duration: 0.25,
                                        ease: "easeInOut",
                                        staggerChildren: 0,
                                    }}
                                    className='app__project-hover app__flex'
                                >
                                    <a
                                        href={project.projectLink}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className='app__flex'
                                        >
                                            <AiFillEye />
                                        </motion.div>
                                    </a>
                                    <a
                                        href={project.codeLink}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className='app__flex'
                                        >
                                            <AiFillGithub />
                                        </motion.div>
                                    </a>
                                </motion.div>
                            </div>

                            <div className='app__project-content app__flex'>
                                <h4 className='bold-text'>{project.title}</h4>
                                <p className='p-text' style={{ marginTop: 10 }}>
                                    {project.description}
                                </p>

                                <div className='app__project-tag app__flex'>
                                    <p className='p-text'>{project.tags[0]}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </MotionWrap>
        </AppWrap>
    );
};

export default Projects;
