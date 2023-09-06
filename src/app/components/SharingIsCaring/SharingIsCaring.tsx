import { SectionWithIdPropsType } from "@/app/types/props";
import SliderComponent from "./ArticlesSlider";

const SharingIsCaring: React.FC<SectionWithIdPropsType> = ({ id }) => {
    return (
        <section id={id} className="sharingiscaring-section">
            <div className="container mx-auto">
                <h2>Sharing is Caring</h2>
                <p>Ever wondered how to navigate the intricate web of coding and design? Well, fear not! I&apos;m on a mission to share my web wisdom and best practices through a magical concoction called Medium articles. With a dash of humor, a sprinkle of wit, and a generous serving of attractive prose, I&apos;m here to turn complex concepts into digestible delights. So grab your virtual reading glasses, because we&apos;re about to embark on a wild and enlightening journey through the digital realm!</p>
            </div>
            <div className="list-articles">
                <SliderComponent></SliderComponent>
            </div>
        </section>
    )
}

export default SharingIsCaring;