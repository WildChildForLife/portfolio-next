import { AvailableTagsForIconType } from "../fragments/Icon/IconTypes";

type ExperienceType = {
    name: string;
    description: string[];
    skills: AvailableTagsForIconType[];
    icon: string;
    role: string;
    time: string;
}

export default ExperienceType;