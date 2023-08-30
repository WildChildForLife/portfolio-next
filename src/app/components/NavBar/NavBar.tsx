'use client';

import ThemeToggle from '@/app/fragments/ThemeToggle/ThemeToggle';
import { NavBarLinkPropsType, NavBarPropsType } from '@/app/types/props';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { intersectionObserver } from './observers';

const NavBar: React.FC<NavBarPropsType> = ({ routes }) => {
    const [currentRoute, setCurrentRoute] = useState('home');

    // When scrolling, change the current route
    useEffect(() => {
        let observerParams = { 
            rootMargin: '-20px 0px -20px 0px',
            threshold: 0.8 
        };

        const observer = intersectionObserver.initObserver(observerParams, (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(entry.target.id);
                    setCurrentRoute(entry.target.id);
                }
            });
        })
        
        const routesElements = Object.values(routes).map((route) => document.getElementById(route));

        // Start Observing Routes
        routesElements.forEach((element) => (element) ? intersectionObserver.startObserving(observer, element) : null);

        return () => {
            // Stop Observing Routes
            routesElements.forEach((element) => (element) ? intersectionObserver.stopObserving(observer, element) : null);
        }
    }, []);

    // const { scrollYProgress } = useScroll();
    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001
    // });

    // Click on Link and Scroll to Section
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

    // Sticky Header
    useEffect(() => {
        const primaryHeader = document.querySelector('.header');
        if (primaryHeader) {
            const observerElement = document.createElement('div');
            primaryHeader.before(observerElement);
            
            let observerParams = { rootMargin: `200px 0px 0px 0px` };
            let observerIntersection = intersectionObserver.initObserver(
                observerParams,
                (entries) => primaryHeader.classList.toggle('sticking', !entries[0].isIntersecting)
            );

            intersectionObserver.startObserving(observerIntersection, observerElement);

            return () => {
                intersectionObserver.stopObserving(observerIntersection, observerElement);
            };
        }
    }, []);

    

    // const params = useParams();

    // useEffect(() => {
    //     setCurrentRoute(window.location.hash.replace('#', ''));
    // }, [params]);

    return (
        <header className="header">
            <div className="container mx-auto">
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

const getNavBarLink: React.FC<NavBarLinkPropsType> = ({
    name, 
    path, 
    currentRoute, 
    onClickFn,
}) => {
    return (
        <Link scroll={false} href={`#${path}`} className={currentRoute === path ? 'active' : ''} onClick={() => onClickFn(path)}>{name}</Link>
    )
}

export default NavBar;
