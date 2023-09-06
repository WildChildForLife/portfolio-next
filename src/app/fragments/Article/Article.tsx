import { ArticlePropsType } from "@/app/types/props";
import Image from "next/image";
import Link from "next/link";

const Article: React.FC<ArticlePropsType> = ({ title, publishedAt, link, sample, imgName }) => {
    return (
        <article>
            <figure>
                <Link href={link} target="_blank">
                    <div className="img-container">
                        <Image width={320} height={220} alt={title} src={`/assets/articles/${imgName}`} />
                    </div>
                    <div className="content">
                        <h3>{title}</h3>
                        <time className="publishedAt">{publishedAt}</time>
                        <figcaption className="sample">{sample}</figcaption>
                    </div>
                </Link>
            </figure>
        </article>
    )
}

export default Article;