import Card from "@/app/fragments/Card/Card";
import { cards } from "./strategicThinkingContent";

type StrategicThinkingProps = {
    id: string;
}

const StrategicThinking: React.FC<StrategicThinkingProps>  = ({ id }) => {
    return (
        <section id={id} className="strategicthinking-section container mx-auto">
            <h2>Strategic Thinking</h2>
            <div className="list-cards">
                <ul>
                    {cards.map((card, index) => (
                        <Card index={index} title={card.title} items={card.items} key={index} ></Card>
                    ))}
                </ul>
            </div>
        </section>        
    )
}

export default StrategicThinking;