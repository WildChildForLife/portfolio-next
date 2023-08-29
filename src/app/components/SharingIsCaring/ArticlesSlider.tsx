'use client';

import Slider from "react-slick";

import Article from "@/app/fragments/Article/Article";
import { articles } from "./blog-content";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10px",
    draggable: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }
    ]
}

const SliderComponent: React.FC = () => {
    return (
        <Slider {...sliderSettings}>
            {articles.map((article, index) => (
                <Article key={index} title={article.title} publishedAt={article.publishedAt} link={article.link} sample={article.sample} imgName={article.imgName}></Article>
            ))}
        </Slider>
    )
}

export default SliderComponent;