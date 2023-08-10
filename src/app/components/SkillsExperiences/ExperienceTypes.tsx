import { AvailableTagsForIconType } from "../../fragments/Icon/IconTypes";

export type ExperienceType = {
    name: string;
    icon: string;
    role: string;
    time: string;
    description: string[];
    skills: AvailableTagsForIconType[];
}