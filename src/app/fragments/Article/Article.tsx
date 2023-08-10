import Image from "next/image";
import Link from "next/link";

interface ArticleProps {
    title: string;
    publishedAt: string;
    link: string;
    sample: string;
    imgName: string;
}

const Article: React.FC<ArticleProps> = ({ title, publishedAt, link, sample, imgName }) => {
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