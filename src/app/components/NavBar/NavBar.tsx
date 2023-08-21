'use client';

import ThemeToggle from '@/app/fragments/ThemeToggle/ThemeToggle';
import { motion, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type NavBarProps = {
    routes: Record<string, string>;
}

const NavBar: React.FC<NavBarProps> = ({ routes }) => {
    const [currentRoute, setCurrentRoute] = useState('home');

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scrollIntoView = (id: string) => {
        const element = document.getElementById(id);
        const headerHeight = document.getElementsByTagName('header')[0].clientHeight;
        const extraPaddingTop = 10;
        if (element && headerHeight) {
            const y = element.getBoundingClientRect().top + window.scrollY - headerHeight - extraPaddingTop;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    
        setCurrentRoute(id);
    }

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

    const params = useParams();

    useEffect(() => {
        setCurrentRoute(window.location.hash.replace('#', ''));
    }, [params]);

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
                        {Object.entries(routes).map(([name, path]) =>
                            <li key={name}>{getNavBarLink({ name, path, currentRoute, onClickFn: scrollIntoView })}</li>
                        )}
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

type NavBarLinkProps = {
    name: string;
    path: string;
    currentRoute: string;
    onClickFn: (path: string) => void;
}

const getNavBarLink: React.FC<NavBarLinkProps> = ({
    name, 
    path, 
    currentRoute, 
    onClickFn
}) => {
    return (
        <Link scroll={false} href={`#${path}`} className={currentRoute === path ? 'active' : ''} onClick={() => onClickFn(path)}>{name}</Link>
    )
}

export default NavBar;
