import { availableIcons } from "@/app/components/SkillsExperiences/experience-content";

export type IconTypesType = 'fa' | 'fa6' | 'ai' | 'md' | 'si' | 'vsc' | 'gr' | 'ri' | 'fc' | 'bi' | 'bs' | 'cg' | 'ci' | 'go' | 'gi' | 'pi' | 'di' | 'rx';
export type IconType = {
    code: string,
    name: string,
    type: IconTypesType
}

export type AvailableTagsForIconType = typeof availableIcons[number];

export type IconsMappedType = { 
    [K in typeof availableIcons[number]]: IconType;
}