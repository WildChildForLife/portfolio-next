import Card from "@/app/fragments/Card/Card";
import { cards } from "./strategicThinking-content";
import { SectionWithIdPropsType } from "@/app/types/props";

const StrategicThinking: React.FC<SectionWithIdPropsType>  = ({ id }) => {
    return (
        <section id={id} className="strategicthinking-section container mx-auto">
            <h2>Skillset Spectrum</h2>
            <div className="list-cards">
                <ul>
                    {cards.map((card, index) => (
                        <Card title={card.title} items={card.items} key={index}></Card>
                    ))}
                </ul>
            </div>
        </section>        
    )
}

export default StrategicThinking;