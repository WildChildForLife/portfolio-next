'use client';

import { useState } from 'react';

import { ExperienceType } from '@/app/types/ExperienceType';
import { experiences } from '../../components/SkillsExperiences/experience-content';
import ExperienceSelector from '../ExperienceSelector/ExperienceSelector';
import ExperienceDescription from '../ExperienceDescription/ExperienceDescription';

const Experiences = () => {
    const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
    
    const handleExperienceClick = (index: number) => {
        setSelectedExperienceIndex(index);
    }
    
    const getSelectedExperience = () => experiences[selectedExperienceIndex];

    return (
        <>
            <ul className="list-experiences">
                {Object.values(experiences).map((experience: ExperienceType, index: number) => (
                    <ExperienceSelector
                        key={index}
                        selectedExperienceIndex={selectedExperienceIndex}
                        currentIndex={index}
                        icon={experience.icon}
                        name={experience.name}
                        role={experience.role}
                        time={experience.time}
                        handleExperienceClick={handleExperienceClick}
                    />
                ))}
            </ul>
            <div className="experience-description">
                <ExperienceDescription
                    currentIndex={selectedExperienceIndex}
                    name={getSelectedExperience().name}
                    description={getSelectedExperience().description}
                    skills={getSelectedExperience().skills}
                />
            </div>
        </>
    )
}

export default Experiences;