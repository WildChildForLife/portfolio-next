import Steps from "../Steps/Steps";
import { CardPropsType } from "@/app/types/props";

const Card: React.FC<CardPropsType> = ({ title, items }) => {
    return(
        <li className="card">
            <h3>{title}</h3>
            <ul>
                <Steps items={items} />
            </ul>
        </li>
    )
}

export default Card;