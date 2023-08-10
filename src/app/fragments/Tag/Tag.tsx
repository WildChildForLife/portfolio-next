import Icon from "../Icon/Icon";
import { IconType } from "../Icon/IconTypes";

export type TagProps = IconType & {
    currentIndex: number;
}

const Tag: React.FC<TagProps> = ({ currentIndex, type, code, name }) => {
    return (
        <li key={currentIndex}>
            <Icon code={code} type={type} />
            <span className="tag-name">{name}</span>
        </li> 
    )
}

export default Tag;