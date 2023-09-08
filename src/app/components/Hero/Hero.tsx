import { ReactElement } from 'react';

import Avatar from '../../fragments/Avatar/Avatar';
import Blob from '../../fragments/Blob/Blob';
import HeroIcon from '../../fragments/HeroIcons/HeroIcon';
import { pivotingIcons } from './hero-content';
import { IconType } from '@/app/fragments/Icon/IconTypes';
import { SectionWithIdPropsType } from '@/app/types/props';

type PivotingIconsAsReactElementType = ReactElement<IconType, any>;

const Hero: React.FC<SectionWithIdPropsType> = ({ id }) => {
    const pivotingIconsElements: PivotingIconsAsReactElementType[] = getPivotingIcons(pivotingIcons);

    return (
        <section id={id} className="hero-section container mx-auto">
            <div className="left-hero">
                <Blob className="animated-blob blob-small"></Blob>
                <Blob className="animated-blob blob-medium"></Blob>
                <Blob className="animated-blob blob-large"></Blob>

                <div className="heading">
                    <span>Hello</span>
                    <h1>I&apos;m a <span>Solution Architect</span></h1>
                    <p>Designing the digital world, one pixel at a time.</p>
                    <div className="call-to-action"><button>Download Resume</button></div>
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
    icons.map<PivotingIconsAsReactElementType>((icon: IconType, index: number) => (
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