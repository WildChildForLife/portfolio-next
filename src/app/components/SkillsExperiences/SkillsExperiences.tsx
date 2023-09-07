import Experiences from "@/app/fragments/Experiences/Experiences";
import { SkillsExperiencePropsType } from "@/app/types/props";

const SkillsExperiences: React.FC<SkillsExperiencePropsType> = ({ id, yearsOfExperience }) => {
    return (
        <section id={id} className="skills-experiences-section container mx-auto">
            <h2>Tech & Experience</h2>
            <h3>{yearsOfExperience} years of experience</h3>
            <p>My journey as an Architect, started when I was a curious little coder. Passion and ambition have always fueled my adventures, making every project a playground of possibilities. </p>
            <p>From shaping systems to building grand designs, I weave my way through the code, crafting masterpieces that stand the test of time.</p>
            <p>I unlock the realms of creativity, constructing digital wonders that leave a mark on the world of tech.</p>
            <blockquote className="blockquote">&#32;Some of the greatest accomplishments in life come from tackling challenges that initially seemed beyond our capabilities.</blockquote>
            <div className="experiences">
                <Experiences></Experiences> 
            </div>
        </section>
    )
}

export default SkillsExperiences;