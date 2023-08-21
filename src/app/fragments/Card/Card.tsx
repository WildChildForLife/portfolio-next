import { AvailableStepsForIcon } from "@/app/components/StrategicThinking/strategicThinkingContent";
import Steps from "../Steps/Steps";

interface CardProps {
    index: number,
    title: string,
    items: AvailableStepsForIcon[]
}

const Card: React.FC<CardProps> = ({ index, title, items }) => {
    return(
        <li key={index} className="card">
            <h3>{title}</h3>
            <ul>
                <Steps items={items} />
            </ul>
        </li>
    )
}

export default Card;