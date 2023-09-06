import Tag from "../Tag/Tag";
import { IconType, AvailableTagsForIconType } from "../Icon/IconTypes";
import { mappedTagsIcons } from "@/app/components/SkillsExperiences/experience-content";
import { ExperienceDescriptionPropsType } from "@/app/types/props";
import { TagAsReactElementType } from "@/app/types";

const ExperienceDescription: React.FC<ExperienceDescriptionPropsType> = ({ name, description, skills, withTitle }) => {
    const tagsElements: TagAsReactElementType[] = getTags(skills);

    return (
        <div className="experience-description">
            { withTitle ? <h3>{name}</h3> : null }
            <ul>
                {description.map((description: string, index: number) => (
                    <li key={index}>{description}</li>
                ))}
            </ul>
            <ul className="tags">
                {tagsElements}
            </ul>
        </div>
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