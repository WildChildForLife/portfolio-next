import { useTheme } from "next-themes";
import Icon from "../Icon/_Icon";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
        <div 
            className="theme-toggle" 
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
        >
            <Icon type="ci" code="CiDark" className="theme-mode dark-mode" />
            <Icon type="ci" code="CiLight" className="theme-mode light-mode" />
        </div>
    )
};

export default ThemeToggle;