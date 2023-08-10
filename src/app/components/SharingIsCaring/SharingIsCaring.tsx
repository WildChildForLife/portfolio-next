'use client';

import Article from "@/app/fragments/Article/Article";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SharingIsCaring: React.FC = () => {
    const articles = [
        {
            title: 'Amazon CodeWhisperer vs. GitHub Copilot: Which One Is Right for You?',
            publishedAt: 'Apr 28 2023',
            link: 'https://medium.com/@youssefelgharbaoui/amazon-codewhisperer-vs-github-copilot-which-one-is-right-for-you-a5be8fdac0e8',
            sample: 'Welcome to a world where there are two types of people: those who are afraid of being replaced by AI, and those who embrace it and use it to their advantage. If you belong to the former, you might want to close this tab and go back to your abacus. But if you’re part of the latter, then you’re in the right place!',
            imgName: 'amazon-codewhisperer-vs-github-copilot.jpg'
        },
        {
            title: 'Understanding Design Patterns for Modern Web Development',
            publishedAt: 'Apr 28 2023',
            link: 'https://medium.com/@youssefelgharbaoui/understanding-design-patterns-for-modern-web-development-aedcb0697800',
            sample: 'Web development has come a long way, and modern web applications require robust and scalable architectures to meet the demands of today’s dynamic digital landscape. Design patterns provide proven solutions to common software design problems, helping developers create maintainable and efficient web applications. In this article, we will explore the world of design patterns and how they can be applied to modern web development.',
            imgName: 'understanding-design-patterns.jpg'
        },
        {
            title: 'Unlocking the Power of Serverless Architecture: Building Scalable and Cost-Effective Web Application',
            publishedAt: 'Apr 24 2023',
            link: 'https://medium.com/@youssefelgharbaoui/unlocking-the-power-of-serverless-architecture-building-scalable-and-cost-effective-web-ac502127ebe3',
            sample: 'Serverless architecture has become a popular approach in building web applications due to its scalability, cost-effectiveness, and efficiency. In this article, we will explore the benefits of serverless architecture and how web architects can leverage it to build modern web applications that meet the demands of today’s users. We will discuss the key concepts of serverless architecture, its advantages, best practices for designing serverless applications, and real-world examples of successful implementations.',
            imgName: 'serverless-architecture.jpg'
        },
        {
            title: 'Boost Your Web App Performance with Code Splitting and Component-Driven Frameworks',
            publishedAt: 'Mar 7 2023',
            link: 'https://medium.com/@youssefelgharbaoui/boost-your-web-app-performance-with-code-splitting-and-component-driven-frameworks-2c4f218552c8',
            sample: 'As web applications grow in complexity, performance can become a major issue. Code splitting and component-driven frameworks are two powerful tools that can help you optimize your web app’s performance. In this article, we’ll explore these concepts and show you how to apply them to your own projects.',
            imgName: 'code-splitting.jpg'
        },
        {
            title: 'Monorepos vs. Multirepos: Which One Should You Choose?',
            publishedAt: 'Feb 21 2023',
            link: 'https://medium.com/@youssefelgharbaoui/monorepos-vs-multirepos-which-one-should-you-choose-649fd474061',
            sample: 'When it comes to managing a codebase for a large project, there are two main approaches: Monorepos and Multirepos. Both have their benefits and drawbacks, and the choice largely depends on the specific needs and constraints of your organization. Let’s take a closer look at each approach, including some examples of successful companies using them, and the pros and cons of each.',
            imgName: 'monorepos-vs-multirepos.jpg'
        },
        {
            title: 'Implementing Secure Coding Practices with JavaScript and TypeScript',
            publishedAt: 'Feb 21 2023',
            link: 'https://medium.com/@youssefelgharbaoui/implementing-secure-coding-practices-with-javascript-and-typescript-772f9ccfadd',
            sample: 'As software applications become more complex and web-based, it’s important to ensure that secure coding practices are implemented to protect against cyber attacks. JavaScript and TypeScript are popular programming languages for web development, but they can also pose security risks if not used correctly. In this article, we’ll explore best practices for secure coding with JavaScript and TypeScript.',
            imgName: 'secure-coding.jpg'
        },
        {
            title: 'Choosing the Right Web Design Framework for Your Project',
            publishedAt: 'Feb 17 2023',
            link: 'https://medium.com/@youssefelgharbaoui/choosing-the-right-web-design-framework-for-your-project-f8e38d1e8a8b',
            sample: 'Choosing the right web design framework is critical to the success of your project. With so many options available, it can be difficult to decide which framework is best for your needs.This post provides an overview on how to choose the right web design framework for your project, Compare some of the most popular options available.',
            imgName: 'web-design-framework.jpg'
        },
        {
            title: 'The Role of Accessibility in Web Design',
            publishedAt: 'Feb 17 2023',
            link: 'https://medium.com/@youssefelgharbaoui/the-role-of-accessibility-in-web-design-5e69ae549f37',
            sample: 'Web accessibility is the practice of creating websites designed to be usable by people with disabilities. Making websites more accessible ensures equal access to content for everyone, regardless of ability. This article explores the importance of accessibility in web design and offers practical tips for improving the accessibility of your website.',
            imgName: 'web-accessibility.jpg'
        },

    ]

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
    return (
        <section className="sharingiscaring-section">
            <div className="container mx-auto">
                <h2>Sharing is Caring</h2>
                <p>Ever wondered how to navigate the intricate web of coding and design? Well, fear not! I&apos;m on a mission to share my web wisdom and best practices through a magical concoction called Medium articles. With a dash of humor, a sprinkle of wit, and a generous serving of attractive prose, I&apos;m here to turn complex concepts into digestible delights. So grab your virtual reading glasses, because we&apos;re about to embark on a wild and enlightening journey through the digital realm!</p>
            </div>
            <div className="list-articles">
                <Slider {...sliderSettings}>
                    {articles.map((article, index) => (
                        <Article key={index} title={article.title} publishedAt={article.publishedAt} link={article.link} sample={article.sample} imgName={article.imgName}></Article>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default SharingIsCaring;