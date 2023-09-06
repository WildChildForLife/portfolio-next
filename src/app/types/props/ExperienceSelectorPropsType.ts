import ExperienceType from "../ExperienceType";

export type ExperienceSelectorPropsType = ExperienceType & {
    currentIndex: number;
    selectedExperienceIndex: number | null;
    handleExperienceClick: (index: number) => void;
};