import { useTheme } from "next-themes";
import Icon from "../Icon/Icon";

const ThemeToggle = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    console.log('Current Theme', currentTheme);

    return (
        <div 
            className="theme-toggle" 
            data-current-theme={currentTheme}
            onClick={() => theme == "dark"? setTheme('light'): setTheme("dark")}
        >
            <Icon type="ci" code="CiDark" className="theme-mode dark-mode" />
            <Icon type="ci" code="CiLight" className="theme-mode light-mode" />
        </div>
    )
};

export default ThemeToggle;