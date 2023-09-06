import Icon from "../Icon/Icon";
import { IconType } from "../Icon/IconTypes";

export type TagPropsType = IconType & {
    currentIndex: number;
}

const Tag: React.FC<TagPropsType> = ({ currentIndex, type, code, name }) => {
    return (
        <li key={currentIndex}>
            <Icon code={code} type={type} className="tag-icon" />
            <span className="tag-name">{name}</span>
        </li> 
    )
}

export default Tag;