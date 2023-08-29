import { UIEventHandler } from "react";

type NavBarLinkPropsType = {
    name: string;
    path: string;
    currentRoute: string;
    onClickFn: (path: string) => void;
}

export default NavBarLinkPropsType;