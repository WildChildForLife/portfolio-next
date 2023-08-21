type AboutMeProps = {
    id: string;
}

const AboutMe: React.FC<AboutMeProps> = ({ id }) => {
    
    return (
        <section id={id} className="aboutme-section container mx-auto">
            <h2>About me</h2>
            <p>With over <b>14 years of experience</b> as a Full-Stack Developer, Tech-Lead, CTO, and <b>Web Architect Cloud oriented</b>, I bring a wealth of knowledge and expertise to each client I work with. My primary focus is on ensuring <b>high code quality</b> and providing valuable <b>guidance</b> throughout the development process. I understand the importance of setting up Continuous Integration/Continuous Deployment (CI/CD) pipelines to streamline the <b>development workflow</b> and deliver efficient and reliable applications. </p>
            <p>To achieve maximum <b>efficiency</b>, I believe in <b>testing</b> all aspects of the application, leaving no stone unturned. I take pride in my ability to optimize workflows and create robust systems that meet and exceed client expectations by <b>automating</b> time-consuming processes. By leveraging my skills and experience, I am dedicated to delivering <b>top-notch solutions</b> that are both <b>scalable</b> and <b>maintainable</b>.</p>
        </section>        
    )
}

export default AboutMe;