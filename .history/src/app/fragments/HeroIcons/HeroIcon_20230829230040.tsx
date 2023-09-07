import { IconType } from '../Icon/IconTypes';
import Icon from '../Icon/_Icon';

type HeroIconPropsType = IconType & { currentIndex: number }

const HeroIcon: React.FC<HeroIconPropsType> = ({ type, code, currentIndex }) => {
    return (
        <div className="icon-container" style={{['--icon-index' as any]: ++currentIndex}}>
            <Icon type={type} code={code} />
        </div>
    )
}

export default HeroIcon;