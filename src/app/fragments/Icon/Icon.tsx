import { ComponentType } from "react";
import { IconType as IconLibrary } from "react-icons";

import * as Fa from "react-icons/fa";
import * as Fa6 from "react-icons/fa6";
import * as Ai from "react-icons/ai";
import * as Md from "react-icons/md";
import * as Si from "react-icons/si";
import * as Vsc from "react-icons/vsc";
import * as Gr from "react-icons/gr";
import * as Ri from "react-icons/ri";
import * as Fc from "react-icons/fc";
import * as Bi from "react-icons/bi";
import * as Bs from "react-icons/bs";
import * as Cg from "react-icons/cg";
import * as Ci from "react-icons/ci";
import * as Go from "react-icons/go";
import * as Gi from "react-icons/gi";
import * as Pi from "react-icons/pi";
import * as Di from "react-icons/di";
import { IconTypesType } from "./IconTypes";

type IconLibraryType = {
    [key: string]: ComponentType<IconLibrary>;
}

type IconLibraryPropsType = {
    type: IconTypesType;
    code: string;
}

const Icon: React.FC<IconLibraryPropsType> = ({ type, code }) => {
    const libraries = new Map([
        ['fa', (Fa as IconLibraryType)],
        ['fa6', (Fa6 as IconLibraryType)],
        ['ai', (Ai as IconLibraryType)],
        ['vsc', (Vsc as IconLibraryType)],
        ['si', (Si as IconLibraryType)],
        ['gr', (Gr as IconLibraryType)],
        ['ri', (Ri as IconLibraryType)],
        ['fc', (Fc as IconLibraryType)],
        ['bi', (Bi as IconLibraryType)],
        ['cg', (Cg as IconLibraryType)],
        ['ci', (Ci as IconLibraryType)],
        ['go', (Go as IconLibraryType)],
        ['gi', (Gi as IconLibraryType)],
        ['pi', (Pi as IconLibraryType)],
        ['di', (Di as IconLibraryType)],
        ['bs', (Bs as IconLibraryType)],
        ['md', (Md as IconLibraryType)]
    ]);

    const IconComponent: ComponentType<any> = (libraries.get(type) as IconLibraryType)[code];

    if (IconComponent) {
        return <IconComponent />;
    }

    throw new Error(`Icon type : ${type} with name ${code} not found`);
};

export default Icon;