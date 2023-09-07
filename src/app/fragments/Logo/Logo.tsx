import LogoPropsType from "@/app/types/props/LogoPropsType";

const Logo: React.FC<LogoPropsType> = ({ styles }) => {
    return (
        <div className="logo" style={styles}>
            <span className="logo-name">Y</span>
            <span className='square square-1'></span>
            <span className='square square-2'></span>
            <span className='square square-3'></span>
        </div>
    )
}

export default Logo;