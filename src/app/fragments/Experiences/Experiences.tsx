'use client';

import { useState } from 'react';

import { ExperienceType } from '@/app/types';
import { experiences } from '../../components/SkillsExperiences/experience-content';
import ExperienceSelector from '../ExperienceSelector/ExperienceSelector';
import ExperienceDescription from '../ExperienceDescription/ExperienceDescription';
import { motion } from 'framer-motion';

const Experiences = () => {
    const [selectedExperienceIndex, setSelectedExperienceIndex] = useState<null | number>(0);

    const handleExperienceClick = (index: number) => {
        if (index === selectedExperienceIndex) {
            setSelectedExperienceIndex(null);    
        } else {
            setSelectedExperienceIndex(index);
        }
    }

    const emptyObjectFallback = { name: '', description: [], skills: [] };
    const getSelectedExperience = (index: number | null) => (index !== null) ? experiences[index] : emptyObjectFallback;
    const getExperienceByName = (name: string ) => experiences.find((experience: ExperienceType) => experience.name === name) ?? emptyObjectFallback;

    return (
        <>
            <ul className="list-experiences">
                {Object.values(experiences).map((experience: ExperienceType, index: number) => (
                    <ExperienceSelector
                        key={index}
                        selectedExperienceIndex={selectedExperienceIndex}
                        description={getExperienceByName(experience.name)?.description}
                        skills={getExperienceByName(experience.name).skills}
                        currentIndex={index}
                        icon={experience.icon}
                        name={experience.name}
                        role={experience.role}
                        time={experience.time}
                        handleExperienceClick={handleExperienceClick}
                    />
                ))}
            </ul>
            {selectedExperienceIndex !== null && 
                <motion.div
                    key={selectedExperienceIndex}
                    initial={{ opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ translateY: -100, duration: 0.8 }}
                >
                    <ExperienceDescription
                        name={getSelectedExperience(selectedExperienceIndex).name}
                        description={getSelectedExperience(selectedExperienceIndex).description}
                        skills={getSelectedExperience(selectedExperienceIndex).skills}
                        withTitle={true}
                    />
                </motion.div>
            }
        </>
    )
}

export default Experiences;