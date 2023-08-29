import ExperienceType from "../ExperienceType";

type ExperienceDescriptionPropsType = Omit<ExperienceType, 'icon' | 'role' | 'time'> & {
    currentIndex: number;
}

export default ExperienceDescriptionPropsType;