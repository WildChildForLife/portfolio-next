import { ComponentType } from "react";

type ArticlePropsType = ComponentType<'article'> & {
    title: string;
    publishedAt: string;
    link: string;
    sample: string;
    imgName: string;
}

export default ArticlePropsType;