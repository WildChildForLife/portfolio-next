import { UIEventHandler } from "react";

type NavBarLinkPropsType = {
    name: string;
    path: string;
    onClickFn: (path: string) => void;
}

export default NavBarLinkPropsType;