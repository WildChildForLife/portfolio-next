import { ComponentProps } from "react";

type SectionWithIdPropsType = ComponentProps<'section'> & {
    id: string;
};

export default SectionWithIdPropsType;