import Card from "@/app/fragments/Card/Card";
import { cards } from "./strategicThinking-content";
import { SectionPropsWithIdType } from "@/app/types/props";

const StrategicThinking: React.FC<SectionPropsWithIdType>  = ({ id }) => {
    return (
        <section id={id} className="strategicthinking-section container mx-auto">
            <h2>Strategic Thinking</h2>
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