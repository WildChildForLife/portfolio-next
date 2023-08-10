import Image from "next/image";

// TODO : Merge this Interface with Experience Interface
interface ExperienceSelectorProps {
    selectedExperienceIndex: number;
    currentIndex: number;
    icon: string;
    name: string;
    role: string;
    time: string;
    handleExperienceClick: (index: number) => void;
}

const ExperienceSelector: React.FC<ExperienceSelectorProps> = ({ selectedExperienceIndex, currentIndex, icon, name, role, time, handleExperienceClick }) => {
    return (
        <li 
        className={`${selectedExperienceIndex === currentIndex ? 'active' : ''}`} 
        onClick={() => handleExperienceClick(currentIndex)}>
            <div className="experience">
                <Image width={100} height={100} alt="experience" src={`/assets/companies/${icon}`} />
                <div className="company">
                    <p className="company-name">{name}</p>
                    <p className="role">{role}</p>
                </div>
            </div>
            <time>{time}</time>
        </li>
    )
}

export default ExperienceSelector;