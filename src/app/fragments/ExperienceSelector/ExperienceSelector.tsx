import Image from "next/image";
import ExperienceDescription from "../ExperienceDescription/ExperienceDescription";
import { ExperienceSelectorPropsType } from "@/app/types/props";

const ExperienceSelector: React.FC<ExperienceSelectorPropsType> = ({ selectedExperienceIndex, currentIndex, icon, name, role, time, description, skills, handleExperienceClick }) => {
    let SvgComponent = (icon.endsWith('.svg')) ? importSVG(icon) : null;
    return (
        <li
            className={(selectedExperienceIndex === currentIndex) ? 'active' : undefined}
            onClick={() => handleExperienceClick(currentIndex)}
        >
            <div className="experience-selector">
                <div className="experience">
                    {SvgComponent ? <SvgComponent /> : <Image width={100} height={100} alt="experience" src={`/assets/companies/${icon}`} />}
                    <div className="company">
                        <p className="company-name">{name}</p>
                        <p className="role">{role}</p>
                    </div>
                </div>
                <time>{time}</time>
            </div>

            <ExperienceDescription
                name={name}
                description={description}
                skills={skills}
                withTitle={false}
            />

        </li>
    )
}

const importSVG = (name: string) => {
    return require(`../../../../public/assets/companies/${name}`).default;
    //return dynamic(() => import(`../../../../public/assets/companies/${name}`), { ssr: false });
}

export default ExperienceSelector;