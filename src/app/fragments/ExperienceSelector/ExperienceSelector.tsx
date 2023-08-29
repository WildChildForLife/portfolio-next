import Image from "next/image";

// TODO : Merge this Interface with Experience Interface
interface ExperienceSelectorPropsType {
    selectedExperienceIndex: number;
    currentIndex: number;
    icon: string;
    name: string;
    role: string;
    time: string;
    handleExperienceClick: (index: number) => void;
}

const ExperienceSelector: React.FC<ExperienceSelectorPropsType> = ({ selectedExperienceIndex, currentIndex, icon, name, role, time, handleExperienceClick }) => {
    let SvgComponent = (icon.endsWith('.svg')) ? importSVG(icon) : null;
    return (
        <li 
            className={`${selectedExperienceIndex === currentIndex ? 'active' : ''}`} 
            onClick={() => handleExperienceClick(currentIndex)}
        >
            <div className="experience">
                {SvgComponent ? <SvgComponent /> : <Image width={100} height={100} alt="experience" src={`/assets/companies/${icon}`} />}
                <div className="company">
                    <p className="company-name">{name}</p>
                    <p className="role">{role}</p>
                </div>
            </div>
            <time>{time}</time>
        </li>
    )
}

const importSVG = (name: string) => {
    return require(`../../../../public/assets/companies/${name}`).default;
    //return dynamic(() => import(`../../../../public/assets/companies/${name}`), { ssr: false });
}

export default ExperienceSelector;