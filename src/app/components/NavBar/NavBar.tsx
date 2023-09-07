'use client';

import ThemeToggle from '@/app/fragments/ThemeToggle/ThemeToggle';
import { NavBarLinkPropsType, NavBarPropsType } from '@/app/types/props';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { intersectionObserver } from './observers';
import Icon from '@/app/fragments/Icon/Icon';
import Logo from '@/app/fragments/Logo/Logo';

const NavBar: React.FC<NavBarPropsType> = ({ routes }) => {
    const [currentRoute, setCurrentRoute] = useState('home');
    const [isSticky, setIsSticky] = useState(false);

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
    }, [routes]);

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
            window.scrollTo({ top: y, behavior: 'smooth' });
        }

        setCurrentRoute(id);
    }

    // Sticky Header
    useEffect(() => {
        const handleScrollForStickyNavBar = () => {
            setIsSticky(window.scrollY > 100);
        }

        // Trigger initial state on load
        handleScrollForStickyNavBar();

        window.addEventListener('scroll', handleScrollForStickyNavBar);

        return () => {
            window.removeEventListener('scroll', handleScrollForStickyNavBar);
        }
    }, []);



    // const params = useParams();

    // useEffect(() => {
    //     setCurrentRoute(window.location.hash.replace('#', ''));
    // }, [params]);

    return (
        <header className={isSticky ? 'sticking header' : 'header'}>
            <nav className="menuContainer container mx-auto">
                <Logo />
                <ul className="menu">
                    {Object.entries(routes).map(([name, path]) =>
                        <li key={name} className={currentRoute === path ? 'active' : ''}>
                            {getNavBarLink({ name, path, onClickFn: scrollIntoView })}
                        </li>
                    )}
                </ul>
                <div className="right-menu">
                    <ThemeToggle />
                    <div className="call-to-action"><button>Reach out</button></div>
                    <div className="socials">
                        <Link target='_blank' href={'https://www.linkedin.com/in/youssef-el-gharbaoui-3785b2a8/'}>
                            <Icon code='FaLinkedin' type='fa' />
                        </Link>
                        {/* <Link target='_blank' href={'https://twitter.com/Yousssseffff'}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                                </svg>
                            </Link> */}
                        <Link target='_blank' href={'https://medium.com/@youssefelgharbaoui'}>
                            <Icon code='FaMedium' type='fa' />
                        </Link>

                        <Link target='_blank' href={'https://github.com/WildChildForLife/portfolio-next'}>
                            <Icon code='FaGithubSquare' type='fa' />
                        </Link>
                        {/* <a href="#"><i className="linkedin fab fa-linkedin"></i></a>
                            <a href="#"><i className="twitter fab fa-twitter"></i></a>
                            <a href="#"><i className="medium fab fa-medium"></i></a> */}
                    </div>
                </div>
                <label className="hamburger">
                    <input type="checkbox" className='hamburger-input' />
                </label>
            </nav>
        </header>
    )
}

const getNavBarLink: React.FC<NavBarLinkPropsType> = ({
    name,
    path,
    onClickFn,
}) => {
    return (
        <Link scroll={false} href={`#${path}`} onClick={() => onClickFn(path)}>{name}</Link>
    )
}

export default NavBar;
