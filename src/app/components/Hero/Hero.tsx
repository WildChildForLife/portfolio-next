'use client';

import { ReactElement, useEffect } from 'react';
import { useScroll } from "framer-motion"


import Avatar from '../../fragments/Avatar/Avatar';
import Blob from '../../fragments/Blob/Blob';
import HeroIcon from '../../fragments/HeroIcons/HeroIcon';
import { pivotingIcons } from './heroContent';
import { IconType } from '@/app/fragments/Icon/IconTypes';

type PivotingIconsAsReactElement = ReactElement<IconType, any>;

const Hero: React.FC = () => {
    const { scrollYProgress } = useScroll();
    
    useEffect(() => {
        // Utility function to toggle a class based on the scroll position
        const toggleClassOnScroll = (element: HTMLElement | null, className: string) => (scrollPosition: number) => {
            if (element && scrollPosition > 0) {
                element.classList.add(className);
            } else {
                element?.classList.remove(className);
            }
        };
    
        // Usage:
        const scroller: HTMLElement | null = document.querySelector('.scroller');
    
        // Use the utility function to create a new function with the 'hide' class and scroller element bound
        const onScrollHideScroller = toggleClassOnScroll(scroller, 'hide');
    
        // Assuming you have a 'scrollYProgress' object that emits the 'change' event with the scroll position
        scrollYProgress.on('change', onScrollHideScroller);
    });

    const pivotingIconsElements: PivotingIconsAsReactElement[] = getPivotingIcons(pivotingIcons);

    return (
        <section className="hero-section container mx-auto">
            <div className="left-hero">
                <Blob className="animated-blob blob-small"></Blob>
                <Blob className="animated-blob blob-medium"></Blob>
                <Blob className="animated-blob blob-large"></Blob>

                <div className="heading">
                    <span>Hello</span>
                    <h1>I&apos;m a <span>Solution Architect</span></h1>
                    <p>Designing the digital world, one pixel at a time.</p>
                    <div className="call-to-action"><button>Reach out</button></div>
                </div>
            </div>
            <div className="right-hero">
                <div className='technologies-container'>
                    <div className='technologies'>
                        <div className="icons">
                            {pivotingIconsElements}
                        </div>
                        <Avatar className="hero-avatar"></Avatar>
                    </div>
                </div>
            </div>
            <div className="scroller"></div>
        </section>
    )
}

const getPivotingIcons = (icons: IconType[]) => (
    icons.map<PivotingIconsAsReactElement>((icon: IconType, index: number) => (
        <HeroIcon
            key={index}
            name={icon.name}
            currentIndex={index}
            code={icon.code}
            type={icon.type}
        />
    ))
);

export default Hero;