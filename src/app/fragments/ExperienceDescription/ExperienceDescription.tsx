import { motion } from "framer-motion";
import Tag from "../Tag/Tag";
import { IconType, AvailableTagsForIconType } from "../Icon/IconTypes";
import { mappedTagsIcons } from "@/app/components/SkillsExperiences/experience-content";
import { ExperienceDescriptionPropsType } from "@/app/types/props";
import { TagAsReactElementType } from "@/app/types";

const ExperienceDescription: React.FC<ExperienceDescriptionPropsType> = ({ currentIndex, name, description, skills }) => {
    const tagsElements: TagAsReactElementType[] = getTags(skills);

    return (
        <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ translateY: -100, duration: 0.8 }}
            className="description" data-experience="cognizant">
            <h3>{name}</h3>
            <ul>
                {description.map((description: string, index: number) => (
                    <li key={index}>{description}</li>
                ))}
            </ul>
            <ul className="tags">
                {tagsElements}
            </ul>
        </motion.div>
    )
}

const getTags = (skills: AvailableTagsForIconType[]) => (
    getHydratedTags(skills).map<TagAsReactElementType>((icon: IconType, index: number) => (
        <Tag
            currentIndex={index}
            key={index}
            code={icon.code}
            name={icon.name}
            type={icon.type}
        />
    ))
);

const getHydratedTags = (skills: AvailableTagsForIconType[]): IconType[] => (
    skills.map((skillName: AvailableTagsForIconType) => mappedTagsIcons[skillName])
)

export default ExperienceDescription;