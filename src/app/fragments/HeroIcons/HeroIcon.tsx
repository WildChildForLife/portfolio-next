import { IconType } from '../Icon/IconTypes';
import Icon from '../Icon/Icon';

type HeroIconProps = IconType & { currentIndex: number }

const HeroIcon: React.FC<HeroIconProps> = ({ type, code, currentIndex }) => {
    return (
        <div className="icon-container" style={{['--icon-index' as any]: ++currentIndex}}>
            <Icon type={type} code={code} />
        </div>
    )
}

export default HeroIcon;