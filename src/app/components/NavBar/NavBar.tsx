'use client';

import ThemeToggle from '@/app/fragments/ThemeToggle/ThemeToggle';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const NavBar: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const primaryHeader = document.querySelector('.header');
        if (primaryHeader) {
            const scrollWatcher = document.createElement('div');
            scrollWatcher.setAttribute('data-scroll-watcher', '');
            primaryHeader.before(scrollWatcher);

            const navObserver = new IntersectionObserver((entries) => {
                
                primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting);
            }, { rootMargin: "200px 0px 0px 0px" })

            navObserver.observe(scrollWatcher);

            return () => {
                navObserver.unobserve(scrollWatcher);
            };
        }
    }, []);


    return (
        <header className="header">
            <div className="container mx-auto">
                <motion.div className="progress-bar" style={{ scaleX }}></motion.div>
                <nav className="menuContainer">
                    <div className="logo">
                        <span className="logo-name">Y</span>
                        <span className='square square-1'></span>
                        <span className='square square-2'></span>
                        <span className='square square-3'></span>
                    </div>
                    <ul className="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Skills</a></li>
                        <li><a href="#">Experience</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="right-menu">
                        <ThemeToggle />
                        <div className="call-to-action"><button>Reach out</button></div>
                        <div className="socials">
                            <a href="#"><i className="linkedin fab fa-linkedin"></i></a>
                            <a href="#"><i className="twitter fab fa-twitter"></i></a>
                            <a href="#"><i className="medium fab fa-medium"></i></a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBar;
