import ExperienceType from "../ExperienceType";

type ExperienceDescriptionPropsType = Omit<ExperienceType, 'icon' | 'role' | 'time'> & {
    withTitle: boolean;
};

export default ExperienceDescriptionPropsType;