'use client';

import { AvailableStepsForIcon, mappedStepsIcons } from "@/app/components/StrategicThinking/strategicThinkingContent";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import { IconType } from "../Icon/IconTypes";
import Icon from "../Icon/Icon";

interface CardProps {
    index: number,
    title: string,
    items: AvailableStepsForIcon[]
}

type StepAsReactElement = ReactElement<HTMLLIElement & IconType, any>;

const Card: React.FC<CardProps> = ({ index, title, items }) => {
    const stepsElements: StepAsReactElement[] = getSteps(items);

    return(
        <li key={index} className="card">
            <h3>{title}</h3>
            <ul>
                {stepsElements}
            </ul>
        </li>
    )
}

const getSteps = (steps: AvailableStepsForIcon[]) => (
    getHydratedSteps(steps).map<StepAsReactElement>((step: IconType, index: number) => (
        <motion.li 
            key={index}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
        >
            <Icon code={step.code} type={step.type} />                        
            {step.name}
        </motion.li>
    ))
);

const getHydratedSteps = (steps: AvailableStepsForIcon[]): IconType[] => (
    steps.map((stepName: AvailableStepsForIcon) => mappedStepsIcons[stepName])
)

export default Card;