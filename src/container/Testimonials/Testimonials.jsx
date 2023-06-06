import { useState } from "react";
import { motion } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { images } from "../../constants";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";
import "./Testimonials.scss";

const testimonials = [
    {
        name: "John",
        company: "Adidas",
        imgUrl: images.adidas,
        feedback: "Awesome developer",
    },
    {
        name: "Sarah",
        company: "Amazon",
        imgUrl: images.amazon,
        feedback: "High Quality frontend developer",
    },
];

const brands = [
    {
        name: "New Balance",
        imgUrl: images.nb,
    },
    {
        name: "Spotify",
        imgUrl: images.spotify,
    },
    {
        name: "Skype",
        imgUrl: images.skype,
    },
    {
        name: "Bolt",
        imgUrl: images.bolt,
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <AppWrap idName='testimonial' className='app__primarybg'>
            <MotionWrap className='app__testimonial'>
                {testimonials.length && (
                    <>
                        <div className='app__testimonial-item app__flex'>
                            <img
                                src={testimonials[currentIndex].imgUrl}
                                alt='testimonials'
                            />
                            <div className='app__testimonial-content'>
                                <p className='p-text'>
                                    {testimonials[currentIndex].feedback}
                                </p>
                                <div>
                                    <h4 className='bold-text'>
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <h5 className='p-text'>
                                        {testimonials[currentIndex].company}
                                    </h5>
                                </div>
                            </div>
                        </div>

                        <div className='app__testimonial-btns app__flex'>
                            <div
                                className='app__flex'
                                onClick={() =>
                                    handleClick(
                                        currentIndex === 0
                                            ? testimonials.length - 1
                                            : currentIndex - 1
                                    )
                                }
                            >
                                <HiChevronLeft />
                            </div>

                            <div
                                className='app__flex'
                                onClick={() =>
                                    handleClick(
                                        currentIndex === testimonials.length - 1
                                            ? 0
                                            : currentIndex + 1
                                    )
                                }
                            >
                                <HiChevronRight />
                            </div>
                        </div>
                    </>
                )}

                <div className='app__testimonial-brands app__flex'>
                    {brands.map((brand) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5, type: "tween" }}
                            key={brand._id}
                        >
                            <img src={brand.imgUrl} alt={brand.name} />
                        </motion.div>
                    ))}
                </div>
            </MotionWrap>
        </AppWrap>
    );
};

export default Testimonials;
