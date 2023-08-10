'use client';

import ExperienceDescription from "@/app/fragments/ExperienceDescription/ExperienceDescription";
import ExperienceSelector from "@/app/fragments/ExperienceSelector/ExperienceSelector";
import { useState } from "react";
import { experiences } from "./experienceContent";
import { ExperienceType } from "@/app/components/SkillsExperiences/ExperienceTypes";

const SkillsExperiences: React.FC = () => {
    const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(0);
    

    const handleExperienceClick = (index: number) => {
        setSelectedExperienceIndex(index);
    }
    
    const getSelectedExperience = () => experiences[selectedExperienceIndex];

    return (
        <section className="skills-experiences-section container mx-auto">
            <h2>Skills & Experiences</h2>
            <p>With over 14 years of experience in the tech industry. My journey as an Architect, started when I was a curious little coder. Passion and ambition have always fueled my architectural adventures, making every project a playground of possibilities. From shaping systems to building grand designs, I weave my way through the code, crafting masterpieces that stand the test of time. As an architect through coding, I unlock the realms of creativity, constructing digital wonders that leave a mark on the world of tech.</p>
            <blockquote className="blockquote">Some of the greatest accomplishments in life come from tackling challenges that initially seemed beyond our capabilities.</blockquote>
            <div className="experiences">
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
            </div>
        </section>
    )
}

export default SkillsExperiences;